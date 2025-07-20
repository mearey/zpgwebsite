import siteheader from '../websiteheader.png';
import discordIcon from "../icons/aav06vw3u.png";
import steamIcon from "../icons/steam-round-logo-icon-download-png-701751694966032dl6elakl5o.png";
import blueskyIcon from "../icons/bluesky-icon.png";
import youtubeIcon from "../icons/youtube_pixel.png";
import iconOfSin from "../iconOFSIN.png";

function Header({ scaledBackgroundHeight }) {
  return (
    <header className="App-header" style={{ height: `${scaledBackgroundHeight}px` }}>
      <div
        className="gradient"
        style={{
          height: '100px',
          position: 'fixed',
          top: '0px',
          left: 0,
          width: '100vw',
          alignItems: 'center',
          display: 'flex',
          zIndex: 1000
        }}
      >
        <img
          src={siteheader}
          className="header-image"
          alt="Header"
        />
        <a href="https://www.youtube.com/@Zero_Point_Games" target='_blank' style={{ position: "absolute", left: "25px" }}>
          <input type="image" className="icon" src={youtubeIcon} ></input>
        </a>
        <a href="https://discord.gg/cF2vQmkXV6" target='_blank' style={{ position: "absolute", left: "75px" }}>
          <input type="image" className="icon" src={discordIcon} ></input>
        </a>
        <a href="https://store.steampowered.com/search/?developer=Zero%20Point%20Games" target='_blank' style={{ position: "absolute", left: "125px" }}>
          <input className="icon" type="image" src={steamIcon}></input>
        </a>
        <a
          href="https://bsky.app/profile/zero-point-games.bsky.social"
          target="_blank"
          style={{ position: 'absolute', left: '175px' }}
        >
          <input className="icon" type="image" src={blueskyIcon}></input>
        </a>
        <img style={{ height: "110px", right: "25px", position: "absolute", }} src={iconOfSin} className="top-logo" />
      </div>
    </header>
  );
}

export default Header; 