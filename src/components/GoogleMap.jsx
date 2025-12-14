
import { APIProvider, Map } from '@vis.gl/react-google-maps';

const position = { lat: 41.0082, lng: 28.9784 };

export function GoogleMap() {

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: '500px', width: '100%' }}>
        <Map
          defaultCenter={position}
          defaultZoom={12}
          gestureHandling={'greedy'}
        />
      </div>
    </APIProvider>
  );
}

