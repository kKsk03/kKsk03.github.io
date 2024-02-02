# OpenVPN搭建虚拟局域网

由于有些游戏的联机方式是使用局域网进行联机，因此可以搭建一个远程虚拟局域网以便不受地域限制  
而常见的 `Softether VPN` 有一个不好的地方：网络流量全部走服务器（全局代理）  
进而导致服务器带宽无法支持游戏流畅连接（力大砖飞另说）  
因此可以使用 `OpenVPN` 进行虚拟局域网架设，以解决上述问题  

## 准备工作

- 1台拥有公网IP的服务器，系统使用Linux（推荐Ubuntu），并且已安装宝塔面板（方便使用）  
- 服务器需安装：宝塔面板 & Docker服务   
- 客户端下载：[OpenVPN](https://openvpn.net/community-downloads/)  

上述两项准备好后，即可开始配置  

## 开始部署

本文使用的 `Docker` 镜像来源于 [kylemanna/openvpn](https://hub.docker.com/r/kylemanna/openvpn/)  
如果服务器是 `arm64`，则使用 [nubacuk/docker-openvpn:arm64](https://hub.docker.com/r/nubacuk/docker-openvpn/)  

开始部署前，建议先在宝塔面板将上述所需镜像拉取  

1. 找一个地方，新建一个用于放置 `OpenVPN` 文件的文件夹

```shell
mkdir openvpn
cd openvpn
```

2. 创建 `docker-compose.yml`，文件内容如下：

```yml
version: '2'

services:
  openvpn:
    cap_add:
      - NET_ADMIN
    image: kylemanna/openvpn
    # image: nubacuk/docker-openvpn:arm64
    container_name: openvpn
    ports:
      - "1194:1194/udp" # 冒号左边为外部映射端口
    restart: unless-stopped
    volumes:
      - ./config:/etc/openvpn
```

在宝塔面板中， `Docker` --> `项目模板` --> `添加`  
将该模板添加进去  

3. 执行下面的命令初始化配置文件，把里面的 `VPN.SERVERNAME.COM` 换成你的域名或者 IP 地址，把 `xxx.xxx.xxx.0` 换成你想要自定义的子网范围，例如 `192.168.10.0`：

> 这里的子网IP将会作为分配机器IP所使用

```shell
docker-compose run --rm openvpn ovpn_genconfig -u udp://VPN.SERVERNAME.COM -s xxx.xxx.xxx.0/24
docker-compose run --rm openvpn ovpn_initpki
```

::: details 执行成功示例
- 第一段代码执行后
```shell
[+] Creating 1/1
 ✔ Network openvpn_default  Created  0.3s 
Processing PUSH Config: 'block-outside-dns'
Processing Route Config: '192.168.254.0/24'
Processing PUSH Config: 'dhcp-option DNS 8.8.8.8'
Processing PUSH Config: 'dhcp-option DNS 8.8.4.4'
Processing PUSH Config: 'comp-lzo no'
Successfully generated config
Cleaning up before Exit ...
```

- 第二段代码执行后
```shell
init-pki complete; you may now create a CA or requests.
Your newly created PKI dir is: /etc/openvpn/pki


Using SSL: openssl OpenSSL 1.1.1g  21 Apr 2020

Enter New CA Key Passphrase:  // [!code hl]
Re-Enter New CA Key Passphrase:  // [!code hl]
Generating RSA private key, 2048 bit long modulus (2 primes)
............................+++++
..........+++++
e is 65537 (0x010001)
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Common Name (eg: your user, host, or server name) [Easy-RSA CA]:openvpn // [!code hl]

CA creation complete and you may now import and sign cert requests.
Your new CA certificate file for publishing is at:
/etc/openvpn/pki/ca.crt


Using SSL: openssl OpenSSL 1.1.1g  21 Apr 2020
Generating DH parameters, 2048 bit long safe prime, generator 2
This is going to take a long time
...............................................................................................................+..................................................................................................................................................................................................+....................................................................+....................................+...+.....+.............................................................................................................+......+..........................................................................+.......................................+....................................................................................................................................................................................+.+..+..........+................................................................................................+...........................+..................................................................+.................+......+......................................+..........................................+.........++*++*++*++*

DH parameters of size 2048 created at /etc/openvpn/pki/dh.pem


Using SSL: openssl OpenSSL 1.1.1g  21 Apr 2020
Generating a RSA private key
...............................................................................................+++++
......................................+++++
writing new private key to '/etc/openvpn/pki/easy-rsa-73.fkICMP/tmp.JlojMP'
-----
Using configuration from /etc/openvpn/pki/easy-rsa-73.fkICMP/tmp.OdbJae
Enter pass phrase for /etc/openvpn/pki/private/ca.key: // [!code hl]
Check that the request matches the signature
Signature ok
The Subject's Distinguished Name is as follows
commonName            :ASN.1 12:'119.91.26.162'
Certificate is to be certified until May  7 14:33:43 2026 GMT (825 days)

Write out database with 1 new entries
Data Base Updated

Using SSL: openssl OpenSSL 1.1.1g  21 Apr 2020
Using configuration from /etc/openvpn/pki/easy-rsa-148.pcLFaG/tmp.JNKgGf
Enter pass phrase for /etc/openvpn/pki/private/ca.key: // [!code hl]

An updated CRL has been created.
CRL file: /etc/openvpn/pki/crl.pem
```
:::

运行期间你需要输入密码： `CA pass phrase` ，设定好密码后并再次输入确认，生成完毕后同样也要再次输入刚刚设置的密码  
并且期间还需要自定义一个 `common name`  

成功后会出现一个 `config` 文件夹，里面有个 `openvpn.conf` 文件，我们需要做一些修改

4. 打开 `openvpn.conf` 文件进行修改：  

::: details 原版的 `openvpn.conf`
```conf
server 192.168.10.0 255.255.255.0
verb 3
key /etc/openvpn/pki/private/119.91.26.162.key
ca /etc/openvpn/pki/ca.crt
cert /etc/openvpn/pki/issued/119.91.26.162.crt
dh /etc/openvpn/pki/dh.pem
tls-auth /etc/openvpn/pki/ta.key
key-direction 0
keepalive 10 60
persist-key
persist-tun

proto udp
# Rely on Docker to do port mapping, internally always 1194
port 1194
dev tun0
status /tmp/openvpn-status.log

user nobody
group nogroup
comp-lzo no

### Route Configurations Below
route 192.168.254.0 255.255.255.0

### Push Configurations Below
push "block-outside-dns"
push "dhcp-option DNS 8.8.8.8"
push "dhcp-option DNS 8.8.4.4"
push "comp-lzo no"
```
:::

```conf
# 修改 tap/tun，若是搭建虚拟局域网则推荐使用 tap，若是搭建代理隧道则推荐使用 tun
# dev tun0
dev tap

# 将下列三个的 dns 设置注释掉
# push "block-outside-dns"
# push "dhcp-option DNS 8.8.8.8"
# push "dhcp-option DNS 8.8.4.4"

# 告诉客户端代理下面的 IP 段，这里换上之前自定义的子网范围  
push "route xxx.xxx.xxx.0 255.255.255.0 vpn_gateway"

# 添加一条 允许客户端通过 VPN 互相通讯
client-to-client

# 允许多客户端复用 .oven 文件
duplicate-cn
```

5. 修改好后，生成供客户端使用的配置文件 `client.ovpn` ：

```shell
# 生成客户端密钥
docker-compose run --rm openvpn easyrsa build-client-full client nopass

# 生成客户端 ovpn 文件
docker-compose run --rm openvpn ovpn_getclient client > client.ovpn 
```
成功后当前文件夹下会出现名为 `client.ovpn` 的配置文件  

6. 修改客户端使用的配置文件  

配置文件默认是 `tun` ，如果我们使用 `tap` 则需要将配置文件中的 `dev tun` 修改成 `dev tap`  

默认配置文件是**全局代理**，但我们**只希望代理局域网的流量**，不想代理上网流量。编辑配置文件删除下面一行（一般在最后一行）：  

```ovpn
redirect-gateway def1
```

在配置文件中添加下列几行，使得客户端能够自动重连：  

```ovpn
resolv-retry infinite
persist-key
persist-tun
```

7. 运行该 `OpenVPN` 服务器  

```shell
# 加 -d 可在后台运行
docker-compose up
```

8. 将该配置文件下载至客户端，并将其导入连接

连接后， `OpenVPN` 会分配一个此前自定义子网范围的IP给客户端，并且，多台设备之间可以互相ping通  
如果使用的是 `Windows` ，则务必关闭防火墙，或进入防火墙高级设定，增加一个入站规则，让整个子网变成白名单  