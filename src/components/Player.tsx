import React from "react";
import { SPOTIFY } from "../constants/api";

interface PlayerProps {
  player: string;
}

const Player: React.SFC<PlayerProps> = ({ player }) => {
  const iframe = () => {
    const str = `<iframe src="${SPOTIFY.player}?uri=${player}" width="100%" height="80px" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
    return {
      __html: str,
    };
  };

  return <div dangerouslySetInnerHTML={iframe()} />;
};

export default Player;
