# copy Samsung a207F stock wallpers to storage

## 1. Copy the APK to Downloads:

```
cp /system/priv-app/wallpaper-res/wallpaper-res.apk \
~/storage/downloads/
```

## 2. Then extract it:

```
cd ~/storage/downloads
mkdir wallpaper_extract
unzip wallpaper-res.apk -d wallpaper_extract

```

## 3. Look through the extracted resources:

```
find wallpaper_extract -type f | grep -iE '\.(jpg|jpeg|png|webp)$'

```
## 4. You can then:
- view the actual wallpapers in the downloads/wallpaper_extract folder
- optimize them using PicTools apk to make them reasonably smaller (from 2MB to 80kb but same quality)