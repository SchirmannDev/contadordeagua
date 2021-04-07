import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Button } from "react-native";

export default class contadordeagua extends Component {
  render() {
    return (
      <View style={styles.body}>
        <ImageBackground
          source={require("./images/waterbg.png")}
          style={styles.bgimage}
        >
          <View>
            <View style={styles.infoArea}>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>META</Text>

                <Text style={styles.areaDados}>2000ml</Text>
              </View>

              <View style={styles.area}>
                <Text style={styles.areaTitulo}>CONSUMIDO</Text>

                <Text style={styles.areaDados}>500ml</Text>
              </View>

              <View style={styles.area}>
                <Text style={styles.areaTitulo}>STATUS</Text>

                <Text style={styles.areaDados}>RUIM</Text>
              </View>
            </View>

            <View style={styles.pctArea}>
              <Text style={styles.pctText}>25%</Text>
            </View>

            <View style={styles.btnArea}>
              <Button title="Beber 200ml"></Button>
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
    marginTop: 70,
  },
  area: {
    flex: 1,
    alignItems: "center",
  },
  areaTitulo: {
    color: "#45b2fc",
  },
  areaDados: {
    color: "#2b4274",
    fontSize: 15,
    fontWeight: "bold",
  },
  pctArea: {
    marginTop: 200,
    alignItems: "center",
  },
  pctText: {
    fontSize: 70,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  btnArea: {
    marginTop: 30,
    alignItems: "center",
  },
});
