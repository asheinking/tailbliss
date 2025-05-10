from PIL import Image

# 1) load original and ensure RGBA
img = Image.open("author.png").convert("RGBA")

# 2) make (near-)white transparent
pixels = img.getdata()
new_pixels = []
for r, g, b, a in pixels:
    # if very close to white, drop alpha
    if r > 250 and g > 250 and b > 250:
        new_pixels.append((255, 255, 255, 0))
    else:
        new_pixels.append((r, g, b, a))
img.putdata(new_pixels)

# 3) export resized PNGs
for size in (16, 32):
    resized = img.resize((size, size), Image.LANCZOS)
    resized.save(f"author_{size}x{size}.png", "PNG")

# 4) build multi-size ICO
img.save("favicon.ico", format="ICO", sizes=[(16, 16), (32, 32)])