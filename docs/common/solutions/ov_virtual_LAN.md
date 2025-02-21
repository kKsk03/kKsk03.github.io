---
outline: deep
---

# 使用 OpenVPN 配置虚拟局域网

由于 `WMMT` 那边的需要，因此研究了一手如何配置虚拟局域网，以便能够远程联机揽抄（确信）  
本文使用的是 `Linux` 进行配置，只要有 `Docker` 和公网IP就可以了。  

首先需要先拉取 `Docker` 的镜像，一般用 [kylemanna/openvpn](https://hub.docker.com/r/kylemanna/openvpn/)  
如果服务器是 `arm64`，则使用 [nubacuk/docker-openvpn:arm64](https://hub.docker.com/r/nubacuk/docker-openvpn/)  

## 1. 新建文件夹

在服务器内合适的地方新建一个文件夹：  

```sh
mkdir openvpn
cd openvpn
```

## 2. 创建 `docker-compose.yml`

内容：  

```yml:line-numbers
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

然后启动终端，切换到 `docker-compose.yml` 所在的文件夹，执行以下命令：  

::: tip 提示
第一条命令执行前，需要进行更改：  

- `udp://VPN.SERVERNAME.COM` 中的 `VPN.SERVERNAME.COM` 换成服务器公网IP或者域名  
- `xxx.xxx.xxx.0/24` 中的 `xxx.xxx.xxx.0` 换成自定义子网范围，如 `192.168.50.0/24`  
:::

```sh
docker-compose run --rm openvpn ovpn_genconfig -u udp://VPN.SERVERNAME.COM -s xxx.xxx.xxx.0/24
docker-compose run --rm openvpn ovpn_initpki
```

运行期间需要输入 `CA pass phrase` 并再次输入确认，生成完毕后同样也要再次输入刚刚设置的 `pass phrase`。  

成功后，在 `docker-compose.yml` 的同一个文件夹下会出现一个 `config` 文件夹。  

## 3. 编辑 `openvpn.conf` 文件

1. 将原文件中 `dev tun0` 进行修改：  
    - 如果是搭建代理隧道，则用 `dev tun0`
    - 如果是搭建虚拟局域网，则用 `dev tap`

2. 注释原有 `DNS` 设置

    ```conf
    # push "block-outside-dns"
    # push "dhcp-option DNS 8.8.8.8"
    # push "dhcp-option DNS 8.8.4.4"
    ```

3. 新增配置

    ```conf
    # 告诉客户端代理下面的 IP 段，这里换上之前自定义的子网范围  
    push "route xxx.xxx.xxx.0 255.255.255.0 vpn_gateway"

    # 添加一条 允许客户端通过 VPN 互相通讯
    client-to-client

    # 允许多客户端复用 .oven 文件
    duplicate-cn
    ```

## 4. 生成 `.ovpn` 文件

在 `docker-compose.yml` 的同一个文件夹下进行操作

1. 生成客户端密钥

    ```sh
    docker-compose run --rm openvpn easyrsa build-client-full client nopass
    ```

2. 生成客户端 `ovpn` 文件

    ```sh
    docker-compose run --rm openvpn ovpn_getclient client > client.ovpn
    ```

成功后当前文件夹下会出现名为 `client.ovpn` 的配置文件。

## 5. 修改 `client.ovpn` 配置文件

配置文件默认是 `tun`，如果我们使用 `tap` 则需要将配置文件中的 `dev tun` 修改成 `dev tap`。

默认配置文件是全局代理。  
如果全局代理的话，就会导致服务器的带宽被我们正常上网的流量所占满。  
因此，为了只代理局域网部分的流量，我们需要删除配置文件的这一行（一般在最后一行）：  

```ovpn
redirect-gateway def1
```

在配置文件中添加下列几行，使得客户端能够自动重连：  

```ovpn
resolv-retry infinite
persist-key
persist-tun
```

## 6. 启动服务器

在 `docker-compose.yml` 的同一个文件夹下进行操作  

```sh
docker-compose up -d
```

然后，下载 `client.ovpn`，并导入到其软件后连接，就可以访问其子网分配范围的某一个IP。  
但需要注意的是，务必得关闭防火墙（Windows），否则有可能出现无法 `ping` 通的情况。  
