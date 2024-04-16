#!/bin/bash
mkdir bundles
npm run tauri build
mv src-tauri/target/release/bundle/deb/*.deb bundles
debtap -p *.deb