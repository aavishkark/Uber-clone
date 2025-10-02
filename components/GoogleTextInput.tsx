import 'react-native-get-random-values'
import { View, Image } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { icons } from "@/constants";
import { GoogleInputProps } from "@/types/type";
import React from "react";

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => {
  return (

    <GooglePlacesAutocomplete
      predefinedPlaces={[]}
      placeholder="Search"
      fetchDetails={true}
      onPress={(data, details = null) => {
          handlePress({
            latitude: details?.geometry.location.lat!,
            longitude: details?.geometry.location.lng!,
            address: data.description,
          });
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY || "",
        language: "en",
      }}
      styles={{
          textInputContainer: {
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            marginHorizontal: 20,
            position: "relative",
            shadowColor: "#d4d4d4",
          },
          textInput: {
            backgroundColor: textInputBackgroundColor
              ? textInputBackgroundColor
              : "white",
            fontSize: 16,
            fontWeight: "600",
            marginTop: 5,
            width: "100%",
            borderRadius: 200,
          },
          listView: {
            backgroundColor: textInputBackgroundColor
              ? textInputBackgroundColor
              : "white",
            position: "relative",
            top: 0,
            width: "100%",
            borderRadius: 10,
            shadowColor: "#d4d4d4",
            zIndex: 99,
          },
        }}
      autoFillOnNotFound={false}
        currentLocation={false}
        currentLocationLabel="Current location"
        debounce={500}
        disableScroll={false}
        enableHighAccuracyLocation={true}
        enablePoweredByContainer={true}
        filterReverseGeocodingByTypes={[]}
        GooglePlacesDetailsQuery={{}}
        GooglePlacesSearchQuery={{
          rankby: 'distance',
          type: 'restaurant',
        }}
        GoogleReverseGeocodingQuery={{}}
        isRowScrollable={true}
        keyboardShouldPersistTaps="always"
        listUnderlayColor="#c8c7cc"
        listViewDisplayed="auto"
        keepResultsAfterBlur={false}
        minLength={1}
        nearbyPlacesAPI="GooglePlacesSearch"
        numberOfLines={1}
        onFail={() => {}}
        onNotFound={() => {}}
        onTimeout={() =>
          console.warn('google places autocomplete: request timeout')
        }
        predefinedPlacesAlwaysVisible={false}
        suppressDefaultStyles={false}
        textInputHide={false}
        timeout={20000}
        renderLeftButton={() => (
          <View className="justify-center items-center w-6 h-6">
            <Image
              source={icon ? icon : icons.search}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </View>
        )}
        textInputProps={{
          placeholderTextColor: "gray",
          placeholder: initialLocation ?? "Where do you want to go?",
        }}  
/>

  
  );
};

export default GoogleTextInput;