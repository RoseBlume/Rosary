!#/bin/bash
cd /home/james/Documents/v2/Rosary

echo "Setting up Environment Variables"
export ANDROID_HOME=/run/media/james/tauri/Android
export NDK_HOME=/run/media/james/tauri/Android/ndk/27.0.11718014
export JAVA_HOME=/run/media/james/tauri/Studio/android-studio/jbr

npm install
npm update

npm run tauri icon Bible.png
echo "\n\nInitializing android project"
npm run tauri android init
npm run tauri icon Bible.png
echo "\n\nBuilding android project"
npm run tauri android build

echo "\n\nGenerating keypair"
keytool -genkeypair -v -keystore rosary.keystore -alias rosary -keyalg RSA -keysize 2048 -validity 10000

echo "\n\nRunning zipalign"
/run/media/james/tauri/Android/build-tools/35.0.0-rc4/zipalign -f -v 4 src-tauri/gen/android/app/build/outputs/apk/universal/release/app-universal-release-unsigned.apk Rosary.apk

echo "\n\nSigning APK"
/run/media/james/tauri/Android/build-tools/35.0.0-rc4/apksigner sign --ks rosary.keystore --ks-key-alias rosary Rosary.apk

echo "\n\nBuilding linux bundles"

npm run tauri build
