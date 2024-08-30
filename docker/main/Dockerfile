ARG ARCH=
ARG TRIPLE=
FROM ${ARCH}debian:bookworm

WORKDIR /usr/app/raspirus
COPY . .

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get clean && apt-get update && apt-get upgrade -y
RUN apt-get update && apt-get install -y build-essential \
    cmake \
    libsqlite3-0 \
    libsqlite3-dev \
    wget \
    npm \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev \
    gcc-aarch64-linux-gnu \
    libwebkit2gtk-4.1-dev \
    libssl-dev
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y --default-toolchain nightly
RUN . "$HOME/.cargo/env"

# Use latest npm version
RUN npm install -g npm@latest

# Perform npm install
RUN npm install

# Create the out directory
RUN mkdir out

# Install app deps
RUN cargo install --path src-tauri/
RUN cargo install tauri-cli --locked

# Set environment variables
ENV PKG_CONFIG_SYSROOT_DIR=/usr/${TRIPPLE}/

# Build app
RUN cargo tauri build --target ${TRIPPLE} -b deb
