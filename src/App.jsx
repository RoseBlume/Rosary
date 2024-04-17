import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("James");
  const [name, setName] = useState("");
  const [furl, setfurl] = useState("Books/The_Temptation_Of_Saint_Anthony.html");
  const [frameshow, setFrameshow] = useState(true);
  const [menshow, setMenshow] = useState(false);
  const [bookshow, setBookshow] = useState(false);
  const [bibleshow, setBibleshow] = useState(false);
  async function greet() {
  	//inputter.currentTarget.value
  	//() => setfurl("menu.html")
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    
    setfurl(await invoke("greet", { name }));
  }
  async function togglemenu() {
    setMenshow((menshow) => !menshow)
    setFrameshow((frameshow) => !frameshow)
    if (bookshow == true) {
    	setBookshow((bookshow) => !bookshow)
    }
    if (bibleshow == true) {
      setBibleshow((bibleshow) => !bibleshow)
    }
    //setBookshow((bookshow) => false)
    }
  async function togglebooks() {
    if (bibleshow == true) {
      setBibleshow((bibleshow) => !bibleshow)
    }
    setBookshow((bookshow) => !bookshow)
  }
  async function togglebibles() {
    if (bookshow == true) {
      setBookshow((bookshow) => !bookshow)
    }
    setBibleshow((bibleshow) => !bibleshow)
  }
  async function compress(url) {
    setBookshow((bookshow) => false)
    setMenshow((menshow) => false)
    setfurl((furl) => url)
    //setfurl(await invoke("greet", url));
    //setfurl((furl) => "The_Confession_Of_Saint_Augustine/index.html")
    //setfurl((furl) => url)
    //() => setfurl(url)
  }
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

    	{menshow && <ul><li><button class="menu" onClick={togglebooks}><h3>Books</h3></button></li><li><button class="menu" onClick={togglebibles}><h3>Bibles</h3></button></li></ul>}
    	{bookshow && <h2 class="mentop">Books</h2>}
    	{bibleshow && <h2 class="mentop">Bibles</h2>}
    	<ul>
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/Catechism/_INDEX.HTM"); togglemenu()}}><h3>The Catechism Of The Catholic Church</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/Compendium.html"); togglemenu()}}><h3>Compendium Of The Social Doctrine Of The Church</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/The_Temptation_Of_Saint_Anthony.html"); togglemenu()}}><h3>The Temptation Of Saint Anthony</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/The_Confession_Of_Saint_Augustine.html"); togglemenu()}}><h3>The Confession Of Saint Augustine</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/City_Of_God_Volume_1.html"); togglemenu()}}><h3>City Of God Volume 1</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/City_Of_God_Volume_2.html"); togglemenu()}}><h3>City Of God Volume 2</h3></button></li>}
    	{bibleshow && <li><button class="menu" onClick={() => {setfurl("Bibles/NIV.html"); togglemenu()}}><h3>New International Version</h3></button></li>}
    	{bibleshow && <li><button class="menu" onClick={() => {setfurl("Bibles/King_James.html"); togglemenu()}}><h3>The King James Bible</h3></button></li>}
    	{bibleshow && <li><button class="menu" onClick={() => {setfurl("/Bibles/American/_INDEX.HTM"); togglemenu()}}><h3>The New American Bible</h3></button></li>}
    	</ul>
</header>
      {frameshow && <iframe id="viewarea" src={furl} width="100%" height="1000"/>}
    </div>
  );
}

export default App;
