import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("James");
  const [name, setName] = useState("");
  const [furl, setfurl] = useState("The_Temptation_Of_Saint_Anthony/index.html");
  const [menshow, setMenshow] = useState(false);
  const [bookshow, setBookshow] = useState(false);
  async function greet() {
  	//inputter.currentTarget.value
  	//() => setfurl("menu.html")
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    
    setfurl(await invoke("greet", { name }));
  }
  async function togglemenu() {
    setMenshow((menshow) => !menshow)
  }
  async function togglebooks() {
    setBookshow((bookshow) => !bookshow)
  }
  async function compress() {
    setBookshow((bookshow) => false)
    setMenshow((menshow) => false)
    //setfurl((furl) => url)
    //() => setfurl(url)
  }
  async function setter() {
    setfurl((furl) => "The_Confession_Of_Saint_Augustine/index.html")
  }
  //async function genermenu() {
    //setMen2
  //}
//{() => setfurl("menu.html")}
  return (
    <div className="container">
    <header>
    	<button onClick={togglemenu}>
    		<h2>Menu</h2>
    	</button>
    	{menshow && <ul><li><button class="menu" onClick={togglebooks}><h3>Books</h3></button></li><li><button class="menu"><h3>Bibles</h3></button></li></ul>}
    	{bookshow && <h2 class="mentop">Books</h2>}
    	<ul>
    	{bookshow && <li><button class="menu" onClick={compress}><h3>The Temptation Of Saint Anthony</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={compress}><h3>The Confession Of Saint Augustine</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => setfurl("City_Of_God_Volume_1/index.html")}><h3>City Of God Volume 1</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => setfurl("City_Of_God_Volume_2/index.html")}><h3>City Of God Volume 2</h3></button></li>}
    	</ul>
</header>
      <form
        className="row"
        onSubmit={(inputter) => {
          inputter.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(inputter) => setfurl(inputter.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{furl}</p>
      <iframe id="viewarea" src={furl} width="100%" height="1000"/>
    </div>
  );
}

export default App;
