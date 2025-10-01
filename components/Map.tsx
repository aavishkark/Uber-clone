import * as React from "react";
//import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';
var MapView = require('react-native-maps');
import { Text } from 'react-native';
const Map = () => {
  return (
    <>
    <MapView 
        // provider={PROVIDER_DEFAULT}
        className="w-full h-full rounded-2xl"
        tintColor="black"
    
    />
    <Text>Map</Text>
    </>
  );
};

export default Map;