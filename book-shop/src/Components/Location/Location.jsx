import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon issues in Leaflet
import markerIconPng from 'leaflet/dist/images/marker-icon.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconPng,
  
  iconUrl: markerIconPng,
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
});

const Location = () => {
  const position = [35.6892, 51.3890]; // Sample coordinates (Tehran, Iran)

  return (
    <MapContainer center={position} zoom={16} style={{ height: '500px'}} className='lg:!h-[660px] '>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
           فروشگاه کتاب
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Location;
