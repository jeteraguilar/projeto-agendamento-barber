import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapaScreen = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: -23.55052,
        longitude: -46.633309,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      <Marker
        coordinate={{ latitude: -23.55052, longitude: -46.633309 }}
        title="BarberJet"
        description="Endereço do cabeleireiro"
      />
    </MapView>
  );
};

export default MapaScreen;
