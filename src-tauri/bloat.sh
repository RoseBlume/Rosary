#! /bin/bash
cd src-tauri
cargo bloat --release --symbols-section .text

cargo bloat --release --symbols-section .data

cargo bloat --release --symbols-section .bss
