FROM ubuntu:noble

WORKDIR /usr/app/raspirus
COPY . .

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get clean && apt-get update && apt-get upgrade -y
RUN apt-get update && apt-get install -y libwebkit2gtk-4.1-dev \
    build-essential \
    curl \
    wget \
    file \
    libxdo-dev \
    libssl-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev\
    npm \
    cargo \
    gradle

# Add Rust target
RUN 

# Use latest npm version
RUN npm install -g npm@latest
RUN npm install -g nodejs@latest

# Perform npm install
RUN npm install

# Create the out directory
RUN mkdir out

RUN apt-get install -y openjdk-21-jre
RUN apt-get install -y gradle
RUN apt-get install -y rustup
RUN apt-get install -y npm
RUN npm install --force -g npm@latest
RUN npm install --force -g nodejs@latest

RUN rustup default nightly

RUN rustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android x86_64-linux-android

RUN mkdir Android
RUN wget https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip
RUN unzip *.zip -d Android

RUN yes | Android/cmdline-tools/bin/sdkmanager --licenses --sdk_root=..> /dev/null || true

RUN echo "yes"| Android/cmdline-tools/bin/sdkmanager --sdk_root=.. "platforms;android-33"
RUN echo "yes"| Android/cmdline-tools/bin/sdkmanager --sdk_root=.. "platform-tools"
RUN echo "yes"| Android/cmdline-tools/bin/sdkmanager --sdk_root=.. "build-tools;34.0.0"
RUN echo "yes"| Android/cmdline-tools/bin/sdkmanager --sdk_root=.. "ndk;27.0.11718014"
RUN cd ../..
#RUN export ANDROID_HOME=$PWD/Android
#RUN export NDK_HOME=$PWD/Android/ndk/27.0.11718014
#ENV ANDROID_HOME=/usr/app/raspirus/Android
#ENV NDK_HOME=/usr/app/raspirus/Android/ndk/27.0.11718014
RUN npm install
ENV ANDROID_HOME=Android
ENV NDK_HOME=Android/ndk/27.0.11718014
RUN npm run tauri android init
RUN npm run tauri android build