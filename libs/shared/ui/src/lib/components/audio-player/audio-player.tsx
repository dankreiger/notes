import { FC } from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { AudioPlayerProps } from './internal';

function secondsToTime(e: number) {
  const h = Math.floor(e / 3600);
  const m = Math.floor((e % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const s = Math.floor(e % 60)
    .toString()
    .padStart(2, '0');

  return `${h}:${m}:${s}`;
}

export const AudioPlayer: FC<AudioPlayerProps> = ({
  src,
  header,
  footer,
  duration,
}) => {
  return (
    <ReactAudioPlayer
      header={header}
      footer={footer}
      defaultDuration={secondsToTime(duration)}
      src={src}
    />
  );
};
