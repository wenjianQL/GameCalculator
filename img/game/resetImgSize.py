from PIL import Image
import os

# 指定文件夹路径
input_folder = "./dsp"
output_folder = "./dsp/px_16"  # 输出文件夹路径

# 确保输出文件夹存在
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# 循环处理文件夹下的所有图片文件
for filename in os.listdir(input_folder):
    if filename.endswith(".jpg") or filename.endswith(".png"):  # 只处理jpg和png文件
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)

        # 打开图像文件
        img = Image.open(input_path)

        # 调整图像大小为16x16
        img = img.resize((16, 16))

        # 保存调整后的图像
        img.save(output_path)

print("图片处理完成")
