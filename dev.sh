!#/bin/bash
cd /home/james/Documents/v2/Rosary

echo "Setting up Environment Variables"
export ANDROID_HOME=/home/james/Android/Sdk
export NDK_HOME=/home/james/Android/Sdk/ndk/27.0.11718014
export JAVA_HOME=/home/james/Documents/Studio/android-studio-2023.2.1.25-linux/android-studio/jbr

npm install
npm update

npm run tauri icon Bible.png
echo "\n\nInitializing android project"
npm run tauri android init
npm run tauri icon Bible.png
echo "\n\nBuilding android project"
npm run tauri android dev
