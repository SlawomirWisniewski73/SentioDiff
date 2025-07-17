import React from 'react';
import { Track } from 'sentio-core/types';

interface Props {
  tracks: Track[];
}

export const ReactTrackView: React.FC<Props> = ({ tracks }) => {
  return (
    <div>
      <h3>Track View</h3>
      <ul>
        {tracks.map(track => (
          <li key={track.id}>
            {track.id}: {track.data.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};
