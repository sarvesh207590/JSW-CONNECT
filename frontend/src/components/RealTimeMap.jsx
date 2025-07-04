import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';
import DashboardNavbar from './DashboardNavbar';

const BusIcon = new L.DivIcon({
  className: 'custom-bus-icon',
  html: `<div style="font-size: 20px; color: #FF5733;">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20px" height="20px">
             <path d="M5 3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a3 3 0 0 0 6 0h4a3 3 0 0 0 6 0h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm0 2h14v6H5V5zm0 8h14v4h-1.17A3.001 3.001 0 0 0 13 19h-2a3.001 3.001 0 0 0-4.83 0H5v-4zm4 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
           </svg>
         </div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const StopIcon = new L.DivIcon({
  className: 'custom-stop-icon',
  html: `<div style="font-size: 20px; color: #0066cc;">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20px" height="20px">
             <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
           </svg>
         </div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const RealTimeMap = () => {
  const [busLocations, setBusLocations] = useState([]);
  const [busStops, setBusStops] = useState([
    { id: 1, latitude: 18.6921, longitude: 73.0491, name: 'Stop 1: Dolvi Gate' },
    { id: 2, latitude: 18.6915, longitude: 73.0478, name: 'Stop 2: Admin Office' },
    { id: 3, latitude: 18.6909, longitude: 73.0484, name: 'Stop 3: Factory Entrance' },
    { id: 4, latitude: 18.734951, longitude: 73.092779, name: 'Stop 4: PEN 1' },
    { id: 5, latitude: 18.656654, longitude: 72.879868, name: 'Stop 5: Alibag' },
    { id: 6, latitude: 18.7856, longitude: 73.3451, name: 'Stop 6: Khopoli' },
    { id: 7, latitude: 18.4363, longitude: 73.1193, name: 'Stop 7: Roha' },
    { id: 8, latitude: 18.5312, longitude: 73.1346, name: 'Stop 8: Nagothane' },
    { id: 9, latitude: 19.059984, longitude: 72.889999, name: 'Stop 9: Kurla' },
    { id: 10, latitude: 18.9894, longitude: 73.1175, name: 'Stop 10: Panvel 1' },
    { id: 11, latitude: 18.9986, longitude: 73.1101, name: 'Stop 11: Panvel 2' },
  ]);
  
 

  // Simulate fetching real-time bus data
  useEffect(() => {
    const fetchBusData = () => {
      const mockBusData = [
        { id: 1, latitude: 18.691073, longitude: 73.048916, name: 'Bus 101' },
        { id: 2, latitude: 18.690573, longitude: 73.047916, name: 'Bus 202' },
      ];
      setBusLocations(mockBusData);
    };

    fetchBusData();
    const interval = setInterval(fetchBusData, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
    <DashboardNavbar/>
    <div className="container mt-4">
      <h2 className="text-center mb-3">Real-Time Bus Tracker</h2>
      <p className="text-center text-muted mb-4">
        Track buses and their stops in real-time on the map below.
      </p>
      <div
        className="map-container"
        style={{
          height: '450px',
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <MapContainer
          center={[18.691073, 73.048916]} // Central coordinates
          zoom={15}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Bus Markers */}
          {busLocations.map((bus) => (
            <Marker key={bus.id} position={[bus.latitude, bus.longitude]} icon={BusIcon}>
              <Popup>
                <strong>{bus.name}</strong>
                <br />
                Lat: {bus.latitude.toFixed(4)}, Lon: {bus.longitude.toFixed(4)}
              </Popup>
            </Marker>
          ))}
          {/* Bus Stop Markers */}
          {busStops.map((stop) => (
            <Marker key={stop.id} position={[stop.latitude, stop.longitude]} icon={StopIcon}>
              <Tooltip direction="top" offset={[0, -20]} opacity={1} permanent>
                {stop.name}
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
    </>);
};

export default RealTimeMap;
