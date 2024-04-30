!#/bin/bash
cd /home/james/Documents/v2/Rosary

echo "Setting up Environment Variables"
export ANDROID_HOME=/home/james/Android/Sdk
export NDK_HOME=/home/james/Android/Sdk/ndk/27.0.11718014
export JAVA_HOME=/home/james/Documents/Studio/android-studio-2023.2.1.25-linux/android-studio/jbr

echo "\n\nInitializing android project"
npm run tauri android init

echo "\n\nBuilding android project"
npm run tauri android build

echo "\n\nGenerating keypair"
keytool -genkeypair -v -keystore rosary.keystore -alias rosary -keyalg RSA -keysize 2048 -validity 10000

echo "\n\nRunning zipalign"
/home/james/Android/Sdk/build-tools/34.0.0/zipalign -f -v 4 src-tauri/gen/android/app/build/outputs/apk/universal/release/app-universal-release-unsigned.apk Rosary.apk

echo "\n\nSigning APK"
/home/james/Android/Sdk/build-tools/34.0.0/apksigner sign --ks rosary.keystore --ks-key-alias rosary Rosary.apk

echo "\n\nBuilding linux bundles"

npm run tauri build
