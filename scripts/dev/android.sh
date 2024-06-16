#! /bin/bash
cd ..

echo "Setting up Environment Variables"
export ANDROID_HOME=/run/media/james/tauri/Android
export NDK_HOME=/run/media/james/tauri/Android/ndk/27.0.11718014
export JAVA_HOME=/run/media/james/tauri/Studio/android-studio/jbr

echo -e "\n\nInstalling frontend dependencies"
npm install
npm update

echo -e "\n\nInitializing android project"
npm run tauri android init
echo -e "\n\nBuilding android project"
npm run tauri android dev