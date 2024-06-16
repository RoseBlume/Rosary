#! /bin/bash
cd ..

echo -e "\n\n Installing frontend dependencies"
npm install
npm update

npm run tauri dev