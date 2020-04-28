import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const webviewRef = useRef(null);
  const backButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goBack();
  };

  const frontButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goForward();
  };

  return (
    <View style={{ backgroundColor:'white',flex:1}}>
    <View style={{ backgroundColor:'white',flex: 0.8, marginTop: 10 }}>
      <View style={{ backgroundColor:'white',flex: 1, marginTop: 10 }}>
        <WebView
          source={{ uri: "https://drive.google.com/drive/folders/1aDCK1WNJ56Y-nrf2Yco9gVYVGkRR8krk?usp=sharing" }}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator
              color="red"
              size="large"
              style={styles.flexContainer}
            />
          )}
          ref={webviewRef}
          onNavigationStateChange={navState => {
            setCanGoBack(navState.canGoBack);
            setCanGoForward(navState.canGoForward);
            setCurrentUrl(navState.url);
          }}
        />
      </View>
      <View style={{ backgroundColor:'white',flex: 0.1, flexDirection: "row", flexWrap: "wrap",marginTop:10 }}>
          <View style = {{backgroundColor:'white',flex:0.5,marginHorizontal:20,alignItems:'center'}}>
        <TouchableOpacity onPress={backButtonHandler}>
          <Text style={{borderWidth: 2,backgroundColor:"#DAE0E2",borderRadius:8,justifyContent:'center',padding: 8,alignItems:'center'}}>Back</Text>
        </TouchableOpacity>
        </View>
        <View style = {{backgroundColor:'white',flex:0.5,marginHorizontal:20,alignItems:'center'}}>       
         <TouchableOpacity onPress={frontButtonHandler}>
          <Text style={{borderWidth: 2,backgroundColor:"#DAE0E2",borderRadius:8,justifyContent:'center',padding: 8,alignItems:'center'}}>Forward</Text>
        </TouchableOpacity>
        </View>

      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
