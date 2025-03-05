from PIL import Image
import os

def convert_jpeg_to_webp(input_path, output_path, quality=80):
    """
    Converts a JPEG image to WebP format.

    Args:
        input_path (str): Path to the input JPEG file.
        output_path (str): Path to save the output WebP file.
        quality (int, optional): Quality of the WebP image (0-100). Defaults to 80.
    """
    try:
        img = Image.open(input_path)
        img.save(output_path, "webp", quality=quality)
        print(f"Converted {input_path} to {output_path}")

    except FileNotFoundError:
        print(f"Error: Input file not found: {input_path}")
    except Exception as e:
        print(f"An error occurred: {e}")

def convert_jpeg_to_webp_folder(input_folder, output_folder, quality=80):
    """
    Converts all JPEG images in a folder to WebP format, preserving folder structure.

    Args:
        input_folder (str): Path to the input folder containing JPEG files.
        output_folder (str): Path to the output folder to save WebP files.
        quality (int, optional): Quality of the WebP images (0-100). Defaults to 80.
    """
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    for root, _, files in os.walk(input_folder):
        for file in files:
            print(file)
            if file.lower().endswith((".jpg", ".jpeg")):
                input_file_path = os.path.join(root, file)
                relative_path = os.path.relpath(input_file_path, input_folder)
                output_file_path = os.path.join(output_folder, os.path.splitext(relative_path)[0] + ".webp")
                output_dir = os.path.dirname(output_file_path)

                if not os.path.exists(output_dir):
                    os.makedirs(output_dir)

                convert_jpeg_to_webp(input_file_path, output_file_path, quality)
# Example usage (single file):
# convert_jpeg_to_webp("input.jpg", "output.webp", quality=90)

# Example usage (folder):
# convert_jpeg_to_webp_folder("input_folder", "output_folder", quality=75)

if __name__ == "__main__":
    convert_jpeg_to_webp_folder("roles", "roles-output", quality=75)