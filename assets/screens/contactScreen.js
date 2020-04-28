import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  ActivityIndicator
} from "react-native";
import { Marker } from "react-native-maps";
import MapView from "react-native-maps";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 39.72046,
      lon: -104.948028,
      longD: 0.000179662234,
      latD: 30,
      forceRefresh: Math.floor(Math.random() * 100)
    };
  }
  render() {
    return (
      <View style={{ backgroundColor:'white',flex: 1 }}>
        <View style={styles.MainContainer}>
          <MapView
            style={styles.mapStyle}
            showsUserLocation={false}
            zoomEnabled={true}
            zoomControlEnabled={true}
            initialRegion={{
              latitude: this.state.lat,
              longitude: this.state.lon,
              latitudeDelta: this.state.latD,
              longitudeDelta: this.state.longD
            }}
            key={this.state.forceRefresh}
          >
            <Marker
              coordinate={{
                latitude: this.state.lat,
                longitude: this.state.lon
              }}
              title={"Aspire, an myT company"}
              description={"Meet Your Thoughts"}
            />
          </MapView>
        </View>
        <View style={{ backgroundColor:'white',flex: 0.5, flexDirection: "row", flexWrap: "wrap" }}>
          <View
            style={{
              flex: 0.5,
              marginHorizontal: 20,
              alignItems: "flex-start"
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              North America:
            </Text>
            <Text>Aspire,</Text>
            <Text>Meet your thoughts,</Text>
            <Text>Cherry Creek,</Text>
            <Text>Denver, CO 80206, USA</Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  lat: 39.72046,
                  lon: -104.948028,
                  longD: 0.0001796622,
                  latD: 30,
                  forceRefresh: Math.floor(Math.random() * 100)
                });
              }}
            >
              <Text
                style={{
                  marginTop: 20,
                  borderWidth: 2,
                  borderRadius: 10,
                  alignItems: "flex-start",
                  justifyContent: "center",
                  padding: 5
                }}
              >
                show on map
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.5, alignItems: "flex-start" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Asia:</Text>

            <Text>Meet your thoughts</Text>
            <Text>Rail Eco Park,DRM Rd,</Text>
            <Text>Guntur,</Text>
            <Text>Andhra Pradesh,522006, INDIA</Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  lat: 16.310327,
                  lon: 80.388284,
                  longD: 0.000898311174991,
                  latD: 16,
                  forceRefresh: Math.floor(Math.random() * 100)
                });
              }}
            >
              <Text
                style={{
                  marginTop: 10,
                  borderWidth: 2,
                  borderRadius: 10,
                  alignItems: "flex-start",
                  justifyContent: "center",
                  padding: 5
                }}
              >
                show on map
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    position: "relative",
    bottom: 10
  },
  mapStyle: {
    flex: 1,
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 20
  }
});
