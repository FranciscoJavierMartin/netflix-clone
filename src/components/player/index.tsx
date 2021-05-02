import React, { createContext, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, Close } from './styles/player';

export const PlayerContext = createContext<any>(null);

interface PlayerProps {
  children: React.ReactNode;
}

export default function Player({ children, ...restProps }: PlayerProps) {
  const [showPlayer, setShowPlayer] = useState<boolean>(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}></Container>
    </PlayerContext.Provider>
  );
}

interface PlayerVideoProps {
  src: string;
}

Player.Video = function PlayerVideo({ src, ...restProps }: PlayerVideoProps) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...restProps}>
          <Inner>
            <video id='netflix-player' controls>
              <source src={src} type='video/mp4' />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton() {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((prevState: boolean) => !prevState)}>
      Play
    </Button>
  );
};
