import { createSignal, Show } from "solid-js";


function App() {
  const [furl, setfurl] = createSignal("Books/The_Temptation_Of_Saint_Anthony.html");
  const [menshow, setMenshow] = createSignal(false);
  const [bookshow, setBookshow] = createSignal(false);
  const [bibleshow, setBibleshow] = createSignal(false);
  const [disclaimer, setDisclaimer] = createSignal(false);
  // If not we need to request it
  async function togglemenu() {
    setMenshow((menshow) => !menshow);
    () => setBibleshow(false);
    () => setBookshow(false);
    () => setDisclaimer(false);
  }
  return (
    <div className="container">
    <header>
    <button class="menu" onClick={() => {setBibleshow(false); setBookshow(false); setDisclaimer(false); togglemenu()}}>
    <h2 id="met">Menu</h2>
    </button>

    </header>
    <ul>
    <Show when={menshow()}>
      <div id="topper"></div>
      <li><button class="menu" onClick={() => {setBibleshow(false); setDisclaimer(false); setBookshow((bookshow) => !bookshow)}}><h3>Books</h3></button></li>
      <li><button class="menu" onClick={() => {setBookshow(false); setDisclaimer(false); setBibleshow((bibleshow) => !bibleshow)}}><h3>Bibles</h3></button></li>
      <li><button class="menu" onClick={() => {setBookshow(false); setBibleshow(false); setDisclaimer((disclaimer) => !disclaimer)}}><h3>Disclaimer</h3></button></li>
    </Show>
    </ul>
    <ul>
    <Show when={bookshow()}>
    <h2 class="mentop">Books</h2>
    <li><button class="menu" onClick={() => {setfurl("Books/The_Temptation_Of_Saint_Anthony.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>The Temptation Of Saint Anthony</h3></button></li>
    <li><button class="menu" onClick={() => {setfurl("Books/The_Confession_Of_Saint_Augustine.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>The Confession Of Saint Augustine</h3></button></li>
    <li><button class="menu" onClick={() => {setfurl("Books/City_Of_God_Volume_1.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>City Of God Volume 1</h3></button></li>
    <li><button class="menu" onClick={() => {setfurl("Books/City_Of_God_Volume_2.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>City Of God Volume 2</h3></button></li>
    <li><button class="menu" onClick={() => {setfurl("Books/A_Bible_History_Of_Baptism/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>A Bible History of Baptism, by Samuel John Baird</h3></button></li>
    <li><button class="menu" onClick={() => {setfurl("Books/A Bible Hand-Book, by Fernandez C. Holliday/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>A Bible Hand-Book, by Fernandez C. Holliday</h3></button></li>
    <li><button class="menu" onClick={() => {setfurl("Books/Baptism as taught in the Bible and the Prayer Book, by Edward Hoare/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>Baptism as taught in the Bible and the Prayer Book, by Edward Hoare</h3></button></li>
    <li><button class="menu" onClick={() => {setfurl("/Books/Captivating Bible Stories, by Charlotte Mary Yonge/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>Captivating Bible Stories, by Charlotte Mary Yonge</h3></button></li>
    <li><button class="menu" onClick={() => {setfurl("Books/Church And Bible History By Volrath Vogt/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>Church And Bible History By Volrath Vogt</h3></button></li>
    <li><button class="menu" onClick={() => {setfurl("/Books/The Atonement, by Edward Hoare/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>The Atonement, by Edward Hoare</h3></button></li>
    <li><button class="menu" onClick={() => {setfurl("/Books/The Believer not Ashamed of the Gospel, by Edward Hoare/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>The Believer not Ashamed of the Gospel, by Edward Hoare</h3></button></li>
    <li><button class="menu" onClick={() => {setfurl("/Books/The Influence of the Bible on Civilisation, by Ernst Von Dobschutz/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>The Influence of the Bible on Civilisation, by Ernst Von Dobschutz</h3></button></li>
    <li><button class="menu" onClick={() => {setfurl("/Books/The Lost Faith, by T. S. Childs/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>The Lost Faith, by T. S. Childs</h3></button></li>
    <li><button class="menu" onClick={() => {setfurl("/Books/The_Preachers_Commentary/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>The Preacher's Complete Homiletic Commentary of the Books of the Bible, by George Barlow</h3></button></li>
    </Show>

    <Show when={bibleshow()}>
    <h2 class="mentop">Bibles</h2>
    <li><button class="menu" onClick={() => {setfurl("Bibles/King_James.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>The King James Bible</h3></button></li>
    <li><button class="menu" onClick={() => {setfurl("Bibles/The Juvenile Bible/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>The Juvenile Interpretation of The Bible</h3></button></li>
    </Show>

    <Show when={disclaimer()}>
    <h2 class="mentop">Disclaimer</h2>
    <li><p id="disclaimer">This application contains Project Gutenbergs Assets that have been modified to provide a better user experience. By continuing to use this app you agree that you have read and understood the previous statements.</p></li>
    </Show>
    </ul>
    {!menshow() && <iframe id="viewarea" src={furl()} loading="eager" />}
    </div>
  );
}

export default App;
