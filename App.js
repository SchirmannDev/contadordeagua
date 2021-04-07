import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Button } from "react-native";

export default class contadordeagua extends Component {
  constructor(props) {
    super(props);
    this.state = { consumido: 0, status: "Ruim", pct: "0" };

    this.addCopo = this.addCopo.bind(this);
    this.atualizar = this.atualizar.bind(this);
  }

  atualizar() {
    let s = this.state;
    s.pct = Math.floor(s.consumido / 2000) * 100; //+'%';

    if (s.pct >= 100) {
      s.status = "Bom.";
    } else {
      s.status = "Ruim";
    }

    this.setState(s);
  }

  addCopo() {
    let s = this.state;
    s.consumido += 200;

    this.setState(s);

    this.atualizar();
  }

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

                <Text style={styles.areaDados}>{this.state.consumido}ml</Text>
              </View>

              <View style={styles.area}>
                <Text style={styles.areaTitulo}>STATUS</Text>

                <Text style={styles.areaDados}>{this.state.status}</Text>
              </View>
            </View>

            <View style={styles.pctArea}>
              <Text style={styles.pctText}>{this.state.pct}%</Text>
            </View>

            <View style={styles.btnArea}>
              <Button title="Beber 200ml" onPress={this.addCopo}></Button>
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
    fontSize: 90,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  btnArea: {
    marginTop: 30,
    alignItems: "center",
  },
});
