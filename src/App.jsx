import { createSignal, Index, Show } from "solid-js";

const [bibles] = createSignal([
  {title: "The King James Bible", url: "/Bibles/King_James.html"},
  {title: "The Juvenile Interpretation of The Bible", url: "/Bibles/The Juvenile Bible/index.html"}
]);
const [books] = createSignal([
  {title: "The Temptation Of Saint Anthony", url: "/Books/The_Temptation_Of_Saint_Anthony.html"},
  {title: "The Confession Of Saint Augustine", url: "/Books/The_Confession_Of_Saint_Augustine.html"},
  {title: "City Of God Volume 1", url: "/Books/City_Of_God_Volume_1.html"},
  {title: "City Of God Volume 2", url: "/Books/City_Of_God_Volume_2.html"},
  {title: "A Bible History of Baptism, by Samuel John Baird", url: "/Books/A_Bible_History_Of_Baptism/index.html"},
  {title: "A Bible Hand-Book, by Fernandez C. Holliday", url: "/Books/A Bible Hand-Book, by Fernandez C. Holliday/index.html"},
  {title: "Baptism as taught in the Bible and the Prayer Book, by Edward Hoare", url: "/Books/Baptism as taught in the Bible and the Prayer Book, by Edward Hoare/index.html"},
  {title: "Captivating Bible Stories, by Charlotte Mary Yonge", url: "/Books/Captivating Bible Stories, by Charlotte Mary Yonge/index.html"},
  {title: "Church And Bible History By Volrath Vogt", url: "/Books/Church And Bible History By Volrath Vogt/index.html"},
  {title: "The Atonement, by Edward Hoare", url: "/Books/The Atonement, by Edward Hoare/index.html"},
  {title: "The Believer not Ashamed of the Gospel, by Edward Hoare", url: "/Books/The Believer not Ashamed of the Gospel, by Edward Hoare/index.html"},
  {title: "The Influence of the Bible on Civilisation, by Ernst Von Dobschutz", url: "/Books/The Influence of the Bible on Civilisation, by Ernst Von Dobschutz/index.html"},
  {title: "The Lost Faith, by T. S. Childs", url: "/Books/The Lost Faith, by T. S. Childs/index.html"},
  {title: "The Preacher's Complete Homiletic Commentary of the Books of the Bible, by George Barlow", url: "/Books/The_Preachers_Commentary/index.html"},
  {title: "The writings of Clement of Alexandria, Vol. 1 (of 2) by Saint of Alexandria Clement", url: "/Books/Clement/index.html"},
  {title: "New Witnesses for God (Volume 3 of 3) by B. H. Roberts", url: "/Books/Witnesses/index.html"}

]);

const [licenses] = createSignal([
  {title: "MIT License", author: "James Rose"}
])

function App() {
  const [furl, setfurl] = createSignal("Bibles/King_James.html");
  const [menshow, setMenshow] = createSignal(false);
  const [bookshow, setBookshow] = createSignal(false);
  const [bibleshow, setBibleshow] = createSignal(false);
  const [disclaimer, setDisclaimer] = createSignal(false);
  const [license, setLicense] = createSignal(false);

  const [podcasts, setPodcasts] = createSignal([
    {title: "Example Podcast 1", 
    source: "/Podcasts/Example_Podcast_1.mp3", 
    description: "This is an example podcast.",
    expanded: false,
    image: "/Podcasts/Example_Podcast_1.jpg",
    length: "0:00"
    },
    {title: "Example Podcast 2",
    source: "/Podcasts/Example_Podcast_2.mp3",
    description: "This is an example podcast.",
    expanded: false,
    image: "/Podcasts/Example_Podcast_2.jpg",
    length: "0:00"
    }
  ]);

  async function togglemenu() {
    setMenshow((menshow) => !menshow);
    setBibleshow(false);
    setBookshow(false);
    setDisclaimer(false);
    setLicense(false);
  }
  return (
    <div className="container">
    <header onClick={() => {togglemenu()}}>
      <img src="Icons/Menu-Light.png" id="menimg"/>
    </header>
    <ul>
    <Show when={menshow()}>
      <div id="topper"></div>
      <table><tbody>
      <tr><td><button class="menu" onClick={() => {setBibleshow(false); setDisclaimer(false); setLicense(false); setBookshow((bookshow) => !bookshow)}}><h3>Books</h3></button></td></tr>
      <Show when={bookshow()}>
        <table class="inner"><tbody>
        <Index each={books()}>{(books, i) => 
        <tr><td><button class="menu" onClick={() => {setfurl(books().url); togglemenu()}}><h3>{books().title}</h3></button></td></tr>
        }</Index>
        </tbody></table>
      </Show>
      <tr><td><button class="menu" onClick={() => {setBookshow(false); setDisclaimer(false); setLicense(false); setBibleshow((bibleshow) => !bibleshow)}}><h3>Bibles</h3></button></td></tr>
      <Show when={bibleshow()}>
        <table class="inner"><tbody>
        <Index each={bibles()}>{(bibles, i) =>
        <tr><td><button class="menu" onClick={() => {setfurl(bibles().url); togglemenu()}}><h3>{bibles().title}</h3></button></td></tr>
        }</Index>
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
        <Index each={licenses()}>{(licenses, i) =>
        <tr><td>
        <p class="license">{licenses().title}</p>
        <p class="license">Copyright (c) 2024 {licenses().author}</p>
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
        }
        </Index>
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
