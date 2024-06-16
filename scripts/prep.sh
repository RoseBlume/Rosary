#!/bin/bash
v2() {
    cp prep/v2/vite.config.js vite.config.js
    cp prep/v2/*.conf.json src-tauri
    cp prep/v2/package.json package.json
    
}
v1() {
    cp prep/v1/vite.config.js vite.config.js
    cp prep/v1/*.conf.json src-tauri
    cp prep/v1/package.json package.json
}
case $1
    ""
if [$1 -eq "v1"]
then
    v2t
    if [$2 -eq "stable"] 
    then
        cp prep/v2/stable/Cargo.toml src-tauri
    elif [$2 -eq "nightly"] 
    then
        cp prep/v2/nightly/Cargo.toml
    else
        echo "$2 is not a valid subcommand"
    fi
elif [$1 -eq "v2"]
then
    v1t
    if [$2 -eq "stable"] 
    then 
        cp prep/v2/stable/Cargo.toml src-tauri
    elif [$2 -eq "nightly"] 
    then
        cp prep/v2/nightly/Cargo.toml src-tauri
    else
        echo "$2 is not a valid subcommand"
    fi
else
    echo -e "Error: Version has an invalid value"
    source scripts/error.sh
fi