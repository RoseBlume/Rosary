FROM rust:1.78.0-bookworm

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
    cargo

# Add architecture
#RUN dpkg --add-architecture arm64 
#RUN apt-get update
# RUN apt-get install -y build-essential:arm64 python3:arm64 build-essential:arm64 python3-mako:arm64 python3-markdown:arm64
#RUN apt-get install -y libwebkit2gtk-4.1-dev:arm64 libssl-dev:arm64

# Add Rust target
RUN rustup target add aarch64-unknown-linux-gnu

# Use latest npm version
RUN npm install -g npm@latest

# Perform npm install
RUN npm install

# Create the out directory
RUN mkdir out
RUN rustup default nightly
# Install app deps
RUN cargo install --path src-tauri/
RUN cargo install tauri-cli --locked

# Set environment variables
ENV PKG_CONFIG_SYSROOT_DIR=/usr/aarch64-linux-gnu/

# Build app
RUN cargo tauri build --target aarch64-unknown-linux-gnu -b deb