import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
//import {WebView} from 'react-native-webview';
import {SliderBox} from 'react-native-image-slider-box';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: [
        require('../images/mytlogo.png'),
        require('../images/react-native.jpg'),
        require('../images/Machine-learning.png'),
        require('../images/slide3.jpg'),
       
        
      ]
    }
  }
    static navigationOptions = {
        // set screen header title
        title: "MYT Home"
      };
  render() {
    return (
    
      <View style = {{backgroundColor:'white',flex:1,justifyContent:'space-evenly'}}>
        <View style = {{marginTop:0,flex: 0.38,alignItems:'center',justifyContent:'center'}}>
          {/* <Image 
          style = {{height:270,width:340}}
          source={require("../images/mytlogo.jpeg")} /> */}
          <SliderBox
            sliderBoxHeight = {200}
            images = {this.state.images}
            autoplay
            circleLoop
          />
        </View>
        <View style = {{backgroundColor:'white',alignItems:'center',flex: 0.25,flexDirection:'row',justifyContent:'space-evenly'}}>
          <View style = {{justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity
          style = {{alignItems:'center',justifyContent:'center'}}
            onPress={() => {
              this.props.navigation.navigate("Announcements");
            }}
          >
          <Image
            style = {{height:130,width:130}}
              source = {require('../images/announcement.gif')}
          />
            <Text>Announcements</Text>
          </TouchableOpacity>
          </View>
          <View style = {{backgroundColor: 'white',alignItems:'center',justifyContent:'center'}}>
          
          <TouchableOpacity
          style = {{alignItems:'center',justifyContent:'center'}}
            onPress={() => {
              this.props.navigation.navigate("Materials");
            }}
          >
          <Image
            style = {{marginTop:30,height:80,width:80}}
              source = {require('../images/materials.gif')}
          />
            <Text style = {{marginTop:20,alignItems:'center',justifyContent:'center'}}>Materials</Text>
          </TouchableOpacity>
          </View>

          </View>
          <View style = {{backgroundColor:'white',alignItems:'center',flex: 0.25,flexDirection:'row',justifyContent:'space-evenly'}}>
          <View style = {{backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity
          style = {{alignItems:'center',justifyContent:'center'}}
            onPress={() => {
              this.props.navigation.navigate("Videos");
            }}
          >
          <Image
            style = {{height:90,width:90}}
              source = {require('../images/videos.gif')}
          />
            <Text>Videos</Text>
          </TouchableOpacity>
        
          </View>
            <View style = {{alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity
          style = {{alignItems:'center',justifyContent:'center'}}
            onPress={() => {
              this.props.navigation.navigate("Contact");
            }}
          >
          <Image
            style = {{height:100,width:100}}
              source = {require('../images/location.gif')}
          />
            <Text>Contact</Text>
          </TouchableOpacity>
          </View>
        </View>
        </View>
      
    )
  }
}

