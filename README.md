# Rosary Bible App

## 1. Overview

The Rosary Bible App is a cross-platform application designed to provide users with access to various versions of the Bible and other religious texts. Built using Tauri, it offers a simple and intuitive interface for reading and exploring sacred scriptures.

## Installation

### Windows

#### MSI

To install Rosary on Windows using the MSI file, download the MSI file from the latest release and double-click on it to start the installation process.

#### setup.exe

To install Rosary on Windows using the setup.exe file, download the setup.exe file from the latest release and double-click on it to start the installation process.

### Linux

#### Debian

To install Rosary on Debian-based Linux distributions, download the Debian file from the latest release and run the following command in the terminal:

\`\`\`
sudo dpkg -i rosary.deb
\`\`\`

#### Arch Linux

To install Rosary on Arch Linux, download the tar.zst file from the latest release and run the following command in the terminal:

\`\`\`
yay -S rosary-tauri
\`\`\`

### MacOS

#### Install From Source

To install Rosary on MacOS, follow these steps:
1. Install Node.js and npm.
2. Install Rust and Cargo.
3. Clone the Rosary repository.
4. Navigate to the project directory in the terminal.
5. Run `npm install` to install dependencies.
6. Follow the instructions for building from source.

## 2. Development

### Setting up Tauri

#### A) Windows

To set up Rosary on Windows, follow these steps:
1. Install Node.js and npm.
2. Install Rust and Cargo.
3. Clone the Rosary repository.
4. Navigate to the project directory in the terminal.
5. Run `npm install` to install dependencies.
6. Follow the instructions for building from source.

#### B) Linux

To set up Rosary on Linux, follow these steps:
1. Install Node.js and npm.
2. Install Rust and Cargo.
3. Clone the Rosary repository.
4. Navigate to the project directory in the terminal.
5. Run `npm install` to install dependencies.
6. Follow the instructions for building from source.

#### C) MacOS

To set up Rosary on MacOS, follow these steps:
1. Install Node.js and npm.
2. Install Rust and Cargo.
3. Clone the Rosary repository.
4. Navigate to the project directory in the terminal.
5. Run `npm install` to install dependencies.
6. Follow the instructions for building from source.

### Building from Source

#### A) Cargo

To build Rosary using Cargo, run the following command:
\`\`\`
cargo build
\`\`\`

### Understanding the Project

#### A) Conditional Rendering

The app utilizes conditional rendering to display different sections based on user interactions or preferences.

#### B) Changing the Look (styles.css)

The styles.css file contains the CSS styles for customizing the appearance of the app. Users can modify this file to change the look and feel of the interface.

#### C) Adding Bibles and Books

Users can add new versions of the Bible or other religious texts by placing HTML files in the `public/Bibles` and `public/Books` directories, respectively.

#### D) Adding New Rust Functions

Developers can extend the functionality of the app by adding new Rust functions in the `src-tauri/src/main.rs` file.
