import siteheader from './websiteheader.png';
import discordIcon from "./icons/aav06vw3u.png"
import steamIcon from "./icons/steam-round-logo-icon-download-png-701751694966032dl6elakl5o.png"
import blueskyIcon from "./icons/bluesky-icon.png"
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="gradient" style={{height:"100px", position: "absolute", top:"0px", width:"100%", alignItems:"center", display:"flex"}}>
          <img src={siteheader} style={{width:"45%", margin:"auto", display:"flex", justifyContent:"center"}}></img>
          <a href="https://discord.gg/MJsPQmW2" target='_blank'>
            <input type="image" class="icon" src={discordIcon} style={{ position:"absolute",left:"25px"}}></input>
          </a>
          <a href="https://store.steampowered.com/search/?developer=Zero%20Point%20Games" target='_blank'>
            <input class="icon" type="image" src={steamIcon} style={{ position:"absolute",left:"75px"}}></input>
          </a>
          <a href="https://bsky.app/profile/zero-point-games.bsky.social" target='_blank'>
            <input class="icon" type="image" src={blueskyIcon} style={{ position:"absolute",left:"125px"}}></input>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
