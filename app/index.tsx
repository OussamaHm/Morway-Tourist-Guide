/* import { Stack, Link } from 'expo-router';
import React from 'react';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import Map from '~/components/Map';
export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Map />
    </>
  );
} */
 /*  import React from 'react';
  import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
  import { StyleSheet, View } from 'react-native';
  
  const INITIAL_REGION = {
    latitude: 34.2599,
    longitude: -6.5890,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };
  
  export default function App() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={StyleSheet.absoluteFillObject}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_REGION}
          showsUserLocation={true} // Show the user's location
          showsMyLocationButton={true} // Show the location button
        />
      </View>
    );
/////////////////////////////not work//////////////////////////

/*   
  import React, { useEffect, useState } from 'react';
import { StyleSheet, View, PermissionsAndroid, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const INITIAL_REGION: Region = {
  latitude: 34.2599, // Default latitude for Kenitra
  longitude: -6.5890, // Default longitude for Kenitra
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

export default function App() {
  const [region, setRegion] = useState<Region>(INITIAL_REGION);
  const [marker, setMarker] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location to show your position on the map.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } else {
      getCurrentLocation(); // iOS handles permissions in Info.plist
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.05,  // Small change in delta for better zoom
          longitudeDelta: 0.05,
        });
        setMarker({ latitude, longitude });
      },
      (error) => {
        console.error('Error fetching location:', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const handleSearch = (data: any, details: any) => {
    const { lat, lng } = details.geometry.location;
    setRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    });
    setMarker({ latitude: lat, longitude: lng });
  };

  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search for a place"
        fetchDetails={true}
        onPress={handleSearch}
        query={{
          key: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your Google Maps API key
          language: 'en',
        }}
        styles={{
          container: { position: 'absolute', top: 10, left: 10, right: 10, zIndex: 1 },
          textInput: { height: 40, borderRadius: 5, backgroundColor: '#fff', paddingHorizontal: 10 },
        }}
      />
      <MapView
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_GOOGLE}
        region={region} // This will center the map to the region
        showsUserLocation={true} // This will show the user's current location
        showsMyLocationButton={true} // This adds a button for the user to center on their location
      >
        {marker && <Marker coordinate={marker} />}
      </MapView>
    </View>
  );
}
 */
////////////////////work good///////////////////////////////////////
/*     import React, { useEffect, useState } from 'react';
    import { StyleSheet, View, PermissionsAndroid, Platform } from 'react-native';
    import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
    import Geolocation from 'react-native-geolocation-service';
    import "expo-router/entry";

    
    const INITIAL_REGION = {
      latitude: 34.2599, // Default latitude
      longitude: -6.5890, // Default longitude
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    };
    
    export default function App() {
      const [region, setRegion] = useState(INITIAL_REGION);
    
      useEffect(() => {
        requestLocationPermission();
      }, []);
    
      const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message: 'This app needs access to your location to show your position on the map.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getCurrentLocation();
          } else {
            console.log('Location permission denied');
          }
        } else {
          getCurrentLocation(); // iOS handles permissions in Info.plist
        }
      };
    
      const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setRegion({
              ...region,
              latitude,
              longitude,
            });
          },
          (error) => {
            console.error('Error fetching location:', error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      };
    
      return (
        <View style={{ flex: 1 }}>
          <MapView
            style={StyleSheet.absoluteFillObject}
            provider={PROVIDER_GOOGLE}
            region={region} // Set the region dynamically
            showsUserLocation={true} // Display the user's location
            showsMyLocationButton={true} // Show the location button (Android only)
          />
        </View>
      );
    }  */
      
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  import React, { useState, useEffect } from 'react';
import { StyleSheet, View, PermissionsAndroid, Platform } from 'react-native';
import MapView, { UrlTile } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const INITIAL_REGION = {
  latitude: 34.2599,
  longitude: -6.5890,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

export default function App() {
  const [region, setRegion] = useState(INITIAL_REGION);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location to show your position on the map.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } else {
      getCurrentLocation(); // iOS handles permissions in Info.plist
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRegion({
          ...region,
          latitude,
          longitude,
        });
      },
      (error) => {
        console.error('Error fetching location:', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        region={region}
        showsUserLocation={true}
        showsMyLocationButton={true}>
        {/* HERE Maps Tile Overlay */}
        <UrlTile
          urlTemplate="https://1.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?apiKey=YiS_UJsp2ayZ9WYcnSJ4uMfUdke3sOHcIVyaGT2iTJA"
          maximumZ={20}
          flipY={false}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
