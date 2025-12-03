---
title: 图片转 webp
createTime: 2025/12/03 19:44:35
permalink: /article/lv1tzdyv/
---

`webp` 格式可以很好的压缩图片的体积，适合前端网页使用，减轻图床压力，提升加载速度。 
并且，不会遇到 `avif` 可能存在的遇到透明的时候就出问题的问题。  

## 使用

### 依赖

```sh
pip install pillow pillow-heif
```

### 脚本

处理：仅处理脚本所在目录的文件  
源文件：将被拷贝至 `original` 目录下  

源目录下的源文件将被删除，仅保留输出的 `avif` 格式文件   

```python
import os
import shutil
from PIL import Image
import pillow_heif

# 注册 HEIF/AVIF 打开支持
pillow_heif.register_heif_opener()

def main():
    # 获取当前脚本所在目录
    base_dir = os.path.dirname(os.path.abspath(__file__))
    original_dir = os.path.join(base_dir, "original")

    # 创建备份文件夹
    if not os.path.exists(original_dir):
        os.makedirs(original_dir)

    # 支持的文件类型
    exts = {".jpg", ".jpeg", ".png"}

    files = os.listdir(base_dir)

    for file in files:
        # 跳过目录
        if os.path.isdir(os.path.join(base_dir, file)):
            continue

        name, ext = os.path.splitext(file)
        ext = ext.lower()

        if ext not in exts:
            continue

        src_path = os.path.join(base_dir, file)
        backup_path = os.path.join(original_dir, file)
        webp_path = os.path.join(base_dir, f"{name}.webp")

        print(f"处理文件：{file}")

        # 1. 备份原文件
        shutil.copy2(src_path, backup_path)

        # 2. 转 WebP
        try:
            with Image.open(src_path) as img:
                img.save(webp_path, format="WEBP", quality=90, method=6)  # method=6 最高压缩质量
            print(f"已生成：{name}.webp")
        except Exception as e:
            print(f"转换失败：{file}，错误：{e}")
            continue

        # 3. 删除原文件
        try:
            os.remove(src_path)
            print(f"已删除原文件：{file}")
        except Exception as e:
            print(f"删除失败：{file}，错误：{e}")

    print("\n全部处理完成！")

if __name__ == "__main__":
    main()

```