import { createSignal, Show } from "solid-js";


function App() {
  const [furl, setfurl] = createSignal("Bibles/King_James.html");
  const [menshow, setMenshow] = createSignal(false);
  const [bookshow, setBookshow] = createSignal(false);
  const [bibleshow, setBibleshow] = createSignal(false);
  const [disclaimer, setDisclaimer] = createSignal(false);
  const [license, setLicense] = createSignal(false);
  const [mensrc, setMensrc] = createSignal("Icons/Menu-Light.png")
  const [arrow, setArrow] = createSignal("&#8592");
  // If not we need to request it
  async function togglemenu() {
    setMenshow((menshow) => !menshow);
    setBibleshow(false);
    setBookshow(false);
    setDisclaimer(false);
    setLicense(false);
  }

//<button class="menu" id="topbutton" onClick={() => {setBibleshow(false); setBookshow(false); setDisclaimer(false); setLicense(false); togglemenu()}}>
  //  <h2 id="met">T</h2>
//</button>
  return (
    <div className="container">
    <header onClick={() => {setBibleshow(false); setBookshow(false); setDisclaimer(false); setLicense(false); togglemenu()}}>
      <img src={mensrc()} id="menimg"/>
    </header>
    <ul>
    <Show when={menshow()}>
      <div id="topper"></div>
      <table><tbody>
      <tr><td><button class="menu" onClick={() => {setBibleshow(false); setDisclaimer(false); setLicense(false); setBookshow((bookshow) => !bookshow)}}><h3>Books</h3></button></td></tr>
      <Show when={bookshow()}>
        <table class="inner"><tbody>
        <tr><td><button class="menu" onClick={() => {setfurl("/Books/The_Temptation_Of_Saint_Anthony.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>The Temptation Of Saint Anthony</h3></button></td></tr>
        <tr><td><button class="menu" onClick={() => {setfurl("/Books/The_Confession_Of_Saint_Augustine.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>The Confession Of Saint Augustine</h3></button></td></tr>
        <tr><td><button class="menu" onClick={() => {setfurl("/Books/City_Of_God_Volume_1.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>City Of God Volume 1</h3></button></td></tr>
        <tr><td><button class="menu" onClick={() => {setfurl("/Books/City_Of_God_Volume_2.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>City Of God Volume 2</h3></button></td></tr>
        <tr><td><button class="menu" onClick={() => {setfurl("/Books/A_Bible_History_Of_Baptism/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>A Bible History of Baptism, by Samuel John Baird</h3></button></td></tr>
        <tr><td><button class="menu" onClick={() => {setfurl("/Books/A Bible Hand-Book, by Fernandez C. Holliday/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>A Bible Hand-Book, by Fernandez C. Holliday</h3></button></td></tr>
        <tr><td><button class="menu" onClick={() => {setfurl("/Books/Baptism as taught in the Bible and the Prayer Book, by Edward Hoare/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>Baptism as taught in the Bible and the Prayer Book, by Edward Hoare</h3></button></td></tr>
        <tr><td><button class="menu" onClick={() => {setfurl("/Books/Captivating Bible Stories, by Charlotte Mary Yonge/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>Captivating Bible Stories, by Charlotte Mary Yonge</h3></button></td></tr>
        <tr><td><button class="menu" onClick={() => {setfurl("Books/Church And Bible History By Volrath Vogt/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>Church And Bible History By Volrath Vogt</h3></button></td></tr>
        <tr><td><button class="menu" onClick={() => {setfurl("/Books/The Atonement, by Edward Hoare/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>The Atonement, by Edward Hoare</h3></button></td></tr>
        <tr><td><button class="menu" onClick={() => {setfurl("/Books/The Believer not Ashamed of the Gospel, by Edward Hoare/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>The Believer not Ashamed of the Gospel, by Edward Hoare</h3></button></td></tr>
        <tr><td><button class="menu" onClick={() => {setfurl("/Books/The Influence of the Bible on Civilisation, by Ernst Von Dobschutz/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>The Influence of the Bible on Civilisation, by Ernst Von Dobschutz</h3></button></td></tr>
        <tr><td><button class="menu" onClick={() => {setfurl("/Books/The Lost Faith, by T. S. Childs/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>The Lost Faith, by T. S. Childs</h3></button></td></tr>
        <tr><td><button class="menu" onClick={() => {setfurl("/Books/The_Preachers_Commentary/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>The Preacher's Complete Homiletic Commentary of the Books of the Bible, by George Barlow</h3></button></td></tr>
        </tbody></table>
      </Show>
      <tr><td><button class="menu" onClick={() => {setBookshow(false); setDisclaimer(false); setLicense(false); setBibleshow((bibleshow) => !bibleshow)}}><h3>Bibles</h3></button></td></tr>
      <Show when={bibleshow()}>
        <table class="inner"><tbody>
        <tr><td><button class="menu" onClick={() => {setfurl("/Bibles/King_James.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>The King James Bible</h3></button></td></tr>
        <tr><td><button class="menu" onClick={() => {setfurl("/Bibles/The Juvenile Bible/index.html"); togglemenu(); setBibleshow(false); setBookshow(false); }}><h3>The Juvenile Interpretation of The Bible</h3></button></td></tr>
        </tbody></table>
      </Show>
      <tr><td><button class="menu" onClick={() => {setBookshow(false); setBibleshow(false); setLicense(false); setDisclaimer((disclaimer) => !disclaimer)}}><h3>Disclaimer</h3></button></td></tr>
      <Show when={disclaimer()}>
        <table class="inner"><tbody>
        <tr><td><p id="disclaimer">This application contains Project Gutenbergs Assets that have been modified to provide a better user experience. By continuing to use this app you agree that you have read and understood the previous statements.</p></td></tr>
        </tbody></table>
      </Show>
      <tr><td><button class="menu" onClick={() => {setBookshow(false); setBibleshow(false); setDisclaimer(false); setLicense((license) => !license)}}><h3>License</h3></button></td></tr>
      <Show when={license()}>
        <table class="inner"><tbody>
        <tr><td>
        <p class="license">MIT License</p>
        <p class="license">Copyright (c) 2024 RoseBlume</p>
        <p class="license">Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:</p>
        <p class="license">The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.</p>
        <p class="license">THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.
        </p>
        </td></tr>
        </tbody></table>
      </Show>
      </tbody></table>
    </Show>
    </ul>
    <ul>
    </ul>
    {!menshow() && <iframe id="viewarea" src={furl()} loading="eager" />}
    </div>
  );
}

export default App;
