// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("{}", name)
}
#[tauri::command]
fn srchange(name: &str) -> String {
    format!("{}", name)
 //   println!(name)
}
#[tauri::command]
fn log(logs: &str){
    println!("{}",logs)
}
#[tauri::command]
fn gener(name: &str) -> String{
    format!("{}", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .invoke_handler(tauri::generate_handler![log])
        .invoke_handler(tauri::generate_handler![gener])
        .invoke_handler(tauri::generate_handler![srchange])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
