import glob
import json
import os

ios_path = "ios/indigemoji/Images.xcassets/{}.imageset/{}.png"
ios_sticker_path = "ios/IndigemojiStickers/Stickers.xcassets/Sticker Pack.stickerpack/{}.sticker/{}.png"

with open("assets/emojis.json", "r") as infile:
    data = json.load(infile)
    for img in data["emojis"]:
        filename = img["file"].replace(".png", "")
        if not os.path.exists(ios_path.format(filename, filename)):
            print(img["file"])
