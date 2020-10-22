import glob
import json
import os
import csv
import base64

ios_path = "ios/indigemoji/Images.xcassets/{}.imageset/{}.png"
ios_sticker_path = "ios/IndigemojiStickers/Stickers.xcassets/Sticker Pack.stickerpack/{}.sticker/{}.png"

out = {"emojis": []}

with open("emojis.csv", "r") as infile:
    reader = csv.DictReader(infile)
    for row in reader:
        with open("emojis/" + row["file"], "rb") as imagefile:
            imgdata = base64.b64encode(imagefile.read()).decode("utf8")
        item = {
            "name": row["name"],
            "name_arrernte": row["name_arrernte"],
            "file": row["file"],
            "audio": row['audio'],
            "data": imgdata,
        }
        out["emojis"].append(item)
        
        if row['audio'] != '' and not os.path.isfile('./assets/audio/%s' % row["audio"]):
            print("missing %s" % row["audio"])
with open("assets/emojis.json", "w") as outfile:
    json.dump(out, outfile, indent=2)
