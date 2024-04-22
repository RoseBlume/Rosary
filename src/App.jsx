import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [furl, setfurl] = useState("Books/The_Temptation_Of_Saint_Anthony.html");
  const [menshow, setMenshow] = useState(false);
  // This will wait for the window to load, but you could
  // run this function on whatever trigger you want
 // 	invoke('close_splashscreen')
//})
 // invoke('close_splacescreen');
//  async function greet() {
  	//inputter.currentTarget.value
  	//() => setfurl("menu.html")
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    
   // setfurl(await invoke("greet", { name }));
 // }
  
  
  /*async function closesplash() {
    invoke('ose_splashscreen')
  }
  async function opensplash() {
    invoke('open_splashscreen')
  }
  */
  async function togglemenu() {
    setMenshow((menshow) => !menshow)
    }
    //setBookshow((bookshow) => false)
 // async function setter(url) {
   // setfurl(await invoke("srchange", { url }));
    //setfurl((furl) => "The_Confession_Of_Saint_Augustine/index.html")
  //}
  //async function genermenu() {
    //setMen2
  //}
 //<embed type="text/html" href="/Books/City_Of_God_Volume_1.html" width="100%" height="10000"/>
//{() => setfurl("menu.html")}
  return (
    <div className="container">
    <header>
    	<button class="menu" onClick={togglemenu}>
    		<h2>Menu</h2>
    	</button>
    	</header>
    	<table>
    	<tr id="titles">
    	{menshow && <td class="mentop"><h2>Books</h2></td>}
    	{menshow && <td class="mentop"><h2 >Bibles</h2></td>}
    	</tr>
    	{menshow && <tr><td class="books"><button class="menu" onClick={() => {setfurl("Books/Catechism/_INDEX.HTM"); togglemenu()}}><h3>The Catechism Of The Catholic Church</h3></button></td><td class="bibles"><button class="menu" onClick={() => {setfurl("Bibles/NIV.html"); togglemenu()}}><h3>New International Version</h3></button></td></tr>}
    	{menshow && <tr><td class="books"><button class="menu" onClick={() => {setfurl("Books/Compendium.html"); togglemenu()}}><h3>Compendium Of The Social Doctrine Of The Church</h3></button></td><td class="bibles"><button class="menu" onClick={() => {setfurl("Bibles/King_James.html"); togglemenu()}}><h3>The King James Bible</h3></button></td></tr>}
    	{menshow && <tr><td class="books"><button class="menu" onClick={() => {setfurl("Books/The_Temptation_Of_Saint_Anthony.html"); togglemenu()}}><h3>The Temptation Of Saint Anthony</h3></button></td> <td class="bibles"><button class="menu" onClick={() => {setfurl("/Bibles/American/_INDEX.HTM"); togglemenu()}}><h3>The New American Bible</h3></button></td></tr>}
    	{menshow && <tr><td class="books"><button class="menu" onClick={() => {setfurl("Books/The_Confession_Of_Saint_Augustine.html"); togglemenu()}}><h3>The Confession Of Saint Augustine</h3></button></td></tr>}
    	{menshow && <tr><td class="books"><button class="menu" onClick={() => {setfurl("Books/City_Of_God_Volume_1.html"); togglemenu()}}><h3>City Of God Volume 1</h3></button></td></tr>}
    	{menshow && <tr><td class="books"><button class="menu" onClick={() => {setfurl("Books/City_Of_God_Volume_2.html"); togglemenu()}}><h3>City Of God Volume 2</h3></button></td></tr>}
    	</table>
      {!menshow && <iframe id="viewarea" src={furl} loading="lazy" />}
      </div>
  );
}
//onLoad={frameshow}
export default App;