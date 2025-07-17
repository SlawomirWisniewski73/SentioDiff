'use strict';

// Przyk\u0142adowe dane, kt\u00f3re chcemy zwizualizowa\u0107 (dw\u00f3ch tracks)
const sampleTracks = [
  { id: 't1', data: [1, 2, 3] },
  { id: 't2', data: [4, 5, 6] }
];

// Jeśli biblioteka SentioDiff by\u0142aby dost\u0119pna globalnie (np. zaimportowana jako UMD),
// mogliby\u015bmy u\u017cy\u0107 ReactTrackView. W zast\u0119pstwie definiujemy prosty komponent:
function TrackList({ tracks }) {
  return React.createElement(
    'ul',
    null,
    tracks.map(track =>
      React.createElement(
        'li',
        { key: track.id },
        track.id + ': ' + track.data.join(', ')
      )
    )
  );
}

// Wyrenderowanie komponentu TrackList do strony
const container = document.getElementById('app');
ReactDOM.createRoot(container).render(
  React.createElement(TrackList, { tracks: sampleTracks })
);

