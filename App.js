import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default class contadordeagua extends Component {
  render() {
    return (
      <View style={styles.body}>
        <ImageBackground
          source={require("./images/waterbg.png")}
          style={styles.bgimage}
        >
          <View style={styles.infoArea}>
            <View style={styles.area}>
              <Text style={styles.areaTitulo}>META</Text>
            </View>

            <View style={styles.area}>
              <Text style={styles.areaTitulo}>CONSUMIDO</Text>
            </View>

            <View style={styles.area}>
              <Text style={styles.areaTitulo}>STATUS</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 20,
  },
  bgimage: {
    flex: 1,
    width: null,
  },
  infoArea: {
    flex: 1,
    flexDirection: "row",
    marginTop: 50,
  },
  area: {
    flex: 1,
    alignItems: "center",
  },
  areaTitulo: {
    color: "#45b2fc",
  },
});
