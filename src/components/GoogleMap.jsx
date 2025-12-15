import '../globals.css'
import { APIProvider, Map } from '@vis.gl/react-google-maps';

const position = { lat: 40.72472827769576, lng: -74.0396737777706 };

export function GoogleMap() {

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className='map'>
        <Map
          defaultCenter={position}
          defaultZoom={12}
          gestureHandling={'greedy'}
        />
      </div>
    </APIProvider>
  );
}

