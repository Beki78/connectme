import React, { useState } from "react";
import Insta from "../assets/icons/instagram.png";
import Behance from "../assets/icons/behance.png";
import Dribble from "../assets/icons/dribble.png";
import FaceBook from "../assets/icons/facebook.png";
import Git from "../assets/icons/github-sign.png";
import LinkedIn from "../assets/icons/linkedin.png";
import Telegram from "../assets/icons/telegram.png";
import Twitch from "../assets/icons/twitch.png";
import Twitter from "../assets/icons/twitter.png";
import Youtube from "../assets/icons/youtube.png";

const socialMediaData = [
  { icon: Insta, name: "Instagram", placeholder: "Your profile url" },
  { icon: Behance, name: "Behance", placeholder: "Your profile url" },
  { icon: Dribble, name: "Dribble", placeholder: "Your profile url" },
  { icon: FaceBook, name: "Facebook", placeholder: "Your profile url" },
  { icon: Git, name: "GitHub", placeholder: "Your profile url" },
  { icon: LinkedIn, name: "LinkedIn", placeholder: "Your profile url" },
  { icon: Telegram, name: "Telegram", placeholder: "Your profile url" },
  { icon: Twitch, name: "Twitch", placeholder: "Your profile url" },
  { icon: Twitter, name: "Twitter", placeholder: "Your profile url" },
  { icon: Youtube, name: "YouTube", placeholder: "Your profile url" },
];

const MySociaMedia = () => {
  const [selectedSocials, setSelectedSocials] = useState([]);

  const handleToggle = (name) => {
    if (selectedSocials.includes(name)) {
      setSelectedSocials(selectedSocials.filter((social) => social !== name));
    } else if (selectedSocials.length < 4) {
      setSelectedSocials([...selectedSocials, name]);
    }
  };

  const isDisabled = (name) => {
    return selectedSocials.length >= 4 && !selectedSocials.includes(name);
  };

  return (
    <div className="m-2">
      <div className="max-h-[400px] overflow-y-auto">
        {socialMediaData.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-[1fr_2fr_auto] gap-6 my-3 px-5 items-center bg-slate-400 py-2 rounded-md ${
              isDisabled(item.name) ? "opacity-50" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <img src={item.icon} className="w-12" alt={`${item.name} Icon`} />
              <h1 className="text-black text-xl font-bold">{item.name}</h1>
            </div>
            <input
              type="text"
              placeholder={item.placeholder}
              className="bg-white text-black rounded-md w-full px-3 py-2"
              disabled={isDisabled(item.name)}
            />
            <button
              onClick={() => handleToggle(item.name)}
              className="text-black text-2xl"
            >
              {selectedSocials.includes(item.name) ? "❌" : "✅"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySociaMedia;
