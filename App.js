import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  Animated,
} from "react-native";
import { Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import MyHeader from "./MyHeader";

export default class App extends React.Component {
  state = {
    anim0: new Animated.Value(0),
    anim1: new Animated.Value(0),
    anim2: new Animated.Value(0),
    anim3: new Animated.Value(0),
    anim4: new Animated.Value(0),
    anim5: new Animated.Value(0),
    anim6: new Animated.Value(0),
    anim7: new Animated.Value(0),
    anim8: new Animated.Value(0),
    anim9: new Animated.Value(0),
    anim10: new Animated.Value(0),
    value: 0,
    xPoints: 0,
    oPoints: 0,
    btnText: "Play",
    btnDisable: false,
    boxDisable: true,
    boxColor: "grey",
    colors: [
      "skyblue",
      "grey",
      "skyblue",
      "grey",
      "skyblue",
      "grey",
      "skyblue",
      "grey",
      "skyblue",
    ],
    start: -1,
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    text5: "",
    text6: "",
    text7: "",
    text8: "",
    text9: "",
    startText1: "",
    startText2: "",
  };

  xwins = () => {
    this.setState({
      start: -1,
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      startText1: "",
      startText2: "",
      btnText: "Play Again",
      btnDisable: false,
      boxDisable: true,
      xPoints: this.state.xPoints + 1,
      anim1: new Animated.Value(0),
      anim1: new Animated.Value(0),
      anim2: new Animated.Value(0),
      anim3: new Animated.Value(0),
      anim4: new Animated.Value(0),
      anim5: new Animated.Value(0),
      anim6: new Animated.Value(0),
      anim7: new Animated.Value(0),
      anim8: new Animated.Value(0),
      anim9: new Animated.Value(0),
      anim10: new Animated.Value(0),
    });
  };
  owins = () => {
    this.setState({
      start: -1,
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      startText1: "",
      startText2: "",
      btnText: "Play Again",
      btnDisable: false,
      boxDisable: true,
      oPoints: this.state.oPoints + 1,
      anim1: new Animated.Value(0),
      anim1: new Animated.Value(0),
      anim2: new Animated.Value(0),
      anim3: new Animated.Value(0),
      anim4: new Animated.Value(0),
      anim5: new Animated.Value(0),
      anim6: new Animated.Value(0),
      anim7: new Animated.Value(0),
      anim8: new Animated.Value(0),
      anim9: new Animated.Value(0),
      anim10: new Animated.Value(0),
    });
  };
  draw = () => {
    this.setState({
      start: -1,
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      startText1: "",
      startText2: "",
      btnText: "Play Again",
      btnDisable: false,
      boxDisable: true,
      xPoints: this.state.xPoints,
      oPoints: this.state.xPoints,
      anim1: new Animated.Value(0),
      anim1: new Animated.Value(0),
      anim2: new Animated.Value(0),
      anim3: new Animated.Value(0),
      anim4: new Animated.Value(0),
      anim5: new Animated.Value(0),
      anim6: new Animated.Value(0),
      anim7: new Animated.Value(0),
      anim8: new Animated.Value(0),
      anim9: new Animated.Value(0),
      anim10: new Animated.Value(0),
    });
  };
  changeArray1 = () => {
    if (this.state.start % 2 == 0) {
      Animated.timing(this.state.anim1, { toValue: 1, duration: 500 }).start();
      this.setState({
        text1: "X",
        start: this.state.start + 1,
        btnDisable: true,
        startText1: "",
        startText2: "",
      });
    } else {
      Animated.timing(this.state.anim1, { toValue: 1, duration: 500 }).start();
      this.setState({
        text1: "0",
        start: this.state.start + 1,
        btnDisable: true,
        startText1: "",
        startText2: "",
      });
    }
  };
  changeArray2 = () => {
    if (this.state.start % 2 == 0) {
      Animated.timing(this.state.anim2, { toValue: 1, duration: 500 }).start();
      this.setState({
        text2: "X",
        start: this.state.start + 1,
        btnDisable: true,
        startText1: "",
        startText2: "",
      });
    } else {
      Animated.timing(this.state.anim2, { toValue: 1, duration: 500 }).start();
      this.setState({
        text2: "0",
        start: this.state.start + 1,
        btnDisable: true,
        startText1: "",
        startText2: "",
      });
    }
  };
  changeArray3 = () => {
    if (this.state.start % 2 == 0) {
      Animated.timing(this.state.anim3, { toValue: 1, duration: 500 }).start();
      this.setState({
        text3: "X",
        start: this.state.start + 1,
        btnDisable: true,
        startText1: "",
        startText2: "",
      });
    } else {
      Animated.timing(this.state.anim3, { toValue: 1, duration: 500 }).start();
      this.setState({
        text3: "0",
        start: this.state.start + 1,
        btnDisable: true,
        startText1: "",
        startText2: "",
      });
    }
  };
  changeArray4 = () => {
    if (this.state.start % 2 == 0) {
      Animated.timing(this.state.anim4, { toValue: 1, duration: 500 }).start();
      this.setState({
        text4: "X",
        start: this.state.start + 1,
        btnDisable: true,
        startText1: "",
        startText2: "",
      });
    } else {
      Animated.timing(this.state.anim4, { toValue: 1, duration: 500 }).start();
      this.setState({
        text4: "0",
        start: this.state.start + 1,
        btnDisable: true,
        startText1: "",
        startText2: "",
      });
    }
  };
  changeArray5 = () => {
    if (this.state.start % 2 == 0) {
      Animated.timing(this.state.anim5, { toValue: 1, duration: 500 }).start();
      this.setState({
        text5: "X",
        start: this.state.start + 1,
        btnDisable: true,
        startText1: "",
        startText2: "",
      });
    } else {
      Animated.timing(this.state.anim5, { toValue: 1, duration: 500 }).start();
      this.setState({
        text5: "0",
        start: this.state.start + 1,
        btnDisable: true,
        startText1: "",
        startText2: "",
      });
    }
  };
  changeArray6 = () => {
    if (this.state.start % 2 == 0) {
      Animated.timing(this.state.anim6, { toValue: 1, duration: 500 }).start();
      this.setState({
        text6: "X",
        start: this.state.start + 1,
        btnDisable: true,
        startText1: "",
        startText2: "",
      });
    } else {
      Animated.timing(this.state.anim6, { toValue: 1, duration: 500 }).start();
      this.setState({
        text6: "0",
        start: this.state.start + 1,
        btnDisable: true,
        startText1: "",
        startText2: "",
      });
    }
  };
  changeArray7 = () => {
    if (this.state.start % 2 == 0) {
      Animated.timing(this.state.anim7, { toValue: 1, duration: 500 }).start();
      this.setState({
        text7: "X",
        start: this.state.start + 1,
        btnDisable: true,
        startText1: "",
        startText2: "",
      });
    } else {
      Animated.timing(this.state.anim7, { toValue: 1, duration: 500 }).start();
      this.setState({
        text7: "0",
        start: this.state.start + 1,
        btnDisable: true,
        startText1: "",
        startText2: "",
      });
    }
  };
  changeArray8 = () => {
    if (this.state.start % 2 == 0) {
      Animated.timing(this.state.anim8, { toValue: 1, duration: 500 }).start();
      this.setState({
        text8: "X",
        start: this.state.start + 1,
        btnDisable: true,
        startText1: "",
        startText2: "",
      });
    } else {
      Animated.timing(this.state.anim8, { toValue: 1, duration: 500 }).start();
      this.setState({
        text8: "0",
        start: this.state.start + 1,
        btnDisable: true,
        startText1: "",
        startText2: "",
      });
    }
  };
  changeArray9 = () => {
    if (this.state.start % 2 == 0) {
      Animated.timing(this.state.anim9, { toValue: 1, duration: 500 }).start();
      this.setState({
        text9: "X",
        start: this.state.start + 1,
        btnDisable: true,
        startText1: "",
        startText2: "",
      });
    } else {
      Animated.timing(this.state.anim9, { toValue: 1, duration: 500 }).start();
      this.setState({
        text9: "0",
        start: this.state.start + 1,
        btnDisable: true,
        startText1: "",
        startText2: "",
      });
    }
  };

  play = () => {
    Animated.timing(this.state.anim10, { toValue: 1, duration: 1500 }).start();
    this.setState({
      start: this.state.start + 1,
      btnDisable: true,
      boxDisable: false,
      anim1: new Animated.Value(0),
      startText1: "Game Starts...!",
      startText2: "X will get first chance",
    });
  };
  // animate = () => {
  //   Animated.timing(this.state.anim, { toValue: 1, duration: 500 }).start();
  //   this.setState({ newText: "X" });
  // };
  render() {
    var i = this.state.start;
    for (i = 0; i < 9; i++) {
      if (this.state.text1.toString() === "X") {
        if (this.state.text2.toString() === "X") {
          if (this.state.text3.toString() === "X") {
            Alert.alert("X wins", "", [
              {
                text: "Ok",
                onPress: () => this.xwins(),
              },
            ]);
            break;
          }
        }
      } else if (this.state.text1.toString() === "0") {
        if (this.state.text2.toString() === "0") {
          if (this.state.text3.toString() === "0") {
            Alert.alert("0 wins", "", [
              {
                text: "Ok",
                onPress: () => this.owins(),
              },
            ]);
            break;
          }
        }
      }

      if (this.state.text1.toString() === "X") {
        if (this.state.text5.toString() === "X") {
          if (this.state.text9.toString() === "X") {
            Alert.alert("X wins", "", [
              {
                text: "Ok",
                onPress: () => this.xwins(),
              },
            ]);
            break;
          }
        }
      } else if (this.state.text1.toString() === "0") {
        if (this.state.text5.toString() === "0") {
          if (this.state.text9.toString() === "0") {
            Alert.alert("0 wins", "", [
              {
                text: "Ok",
                onPress: () => this.owins(),
              },
            ]);
            break;
          }
        }
      }
      if (this.state.text1.toString() === "X") {
        if (this.state.text4.toString() === "X") {
          if (this.state.text7.toString() === "X") {
            Alert.alert("X wins", "", [
              {
                text: "Ok",
                onPress: () => this.xwins(),
              },
            ]);
            break;
          }
        }
      } else if (this.state.text1.toString() === "0") {
        if (this.state.text4.toString() === "0") {
          if (this.state.text7.toString() === "0") {
            Alert.alert("0 wins", "", [
              {
                text: "Ok",
                onPress: () => this.owins(),
              },
            ]);
            break;
          }
        }
      }
      if (this.state.text2.toString() === "X") {
        if (this.state.text5.toString() === "X") {
          if (this.state.text8.toString() === "X") {
            Alert.alert("X wins", "", [
              {
                text: "Ok",
                onPress: () => this.xwins(),
              },
            ]);
            break;
          }
        }
      } else if (this.state.text2.toString() === "0") {
        if (this.state.text5.toString() === "0") {
          if (this.state.text8.toString() === "0") {
            Alert.alert("0 wins", "", [
              {
                text: "Ok",
                onPress: () => this.owins(),
              },
            ]);
            break;
          }
        }
      }
      if (this.state.text3.toString() === "X") {
        if (this.state.text6.toString() === "X") {
          if (this.state.text9.toString() === "X") {
            Alert.alert("X wins", "", [
              {
                text: "Ok",
                onPress: () => this.xwins(),
              },
            ]);
            break;
          }
        }
      } else if (this.state.text3.toString() === "0") {
        if (this.state.text6.toString() === "0") {
          if (this.state.text9.toString() === "0") {
            Alert.alert("0 wins", "", [
              {
                text: "Ok",
                onPress: () => this.owins(),
              },
            ]);
            break;
          }
        }
      }
      if (this.state.text4.toString() === "X") {
        if (this.state.text5.toString() === "X") {
          if (this.state.text6.toString() === "X") {
            Alert.alert("X wins", "", [
              {
                text: "Ok",
                onPress: () => this.xwins(),
              },
            ]);
            break;
          }
        }
      } else if (this.state.text4.toString() === "0") {
        if (this.state.text5.toString() === "0") {
          if (this.state.text6.toString() === "0") {
            Alert.alert("0 wins", "", [
              {
                text: "Ok",
                onPress: () => this.owins(),
              },
            ]);
            break;
          }
        }
      }
      if (this.state.text7.toString() === "X") {
        if (this.state.text8.toString() === "X") {
          if (this.state.text9.toString() === "X") {
            Alert.alert("X wins", "", [
              {
                text: "Ok",
                onPress: () => this.xwins(),
              },
            ]);
            break;
          }
        }
      } else if (this.state.text7.toString() === "0") {
        if (this.state.text8.toString() === "0") {
          if (this.state.text9.toString() === "0") {
            Alert.alert("0 wins", "", [
              {
                text: "Ok",
                onPress: () => this.owins(),
              },
            ]);
            break;
          }
        }
      }
      if (this.state.text3.toString() === "X") {
        if (this.state.text5.toString() === "X") {
          if (this.state.text7.toString() === "X") {
            Alert.alert("X wins", "", [
              {
                text: "Ok",
                onPress: () => this.xwins(),
              },
            ]);
            break;
          }
        }
      } else if (this.state.text3.toString() === "0") {
        if (this.state.text5.toString() === "0") {
          if (this.state.text7.toString() === "0") {
            Alert.alert("0 wins", "", [
              {
                text: "Ok",
                onPress: () => this.owins(),
              },
            ]);
            break;
          }
        }
      }
      if (this.state.start == 9) {
        Alert.alert("Game Draw", "", [
          {
            text: "Ok",
            onPress: () => this.draw(),
          },
        ]);
        break;
      }
    }
    console.log(this.state.start);
    if (this.state.start == 0) {
      console.log("Game Starts now ");
      this.state.start + 1;
    }
    Animated.timing(this.state.anim0, { toValue: 1, duration: 2500 }).start();

    // const translateX = this.state.anim10.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [-500, 1],
    // });

    // const transform = [{ translateX }];
    return (
      <View style={{ flex: 1, paddingTop:25, backgroundColor:"grey" }}>
        <View style={styles.container}>
          <LinearGradient
            colors={[
              "black",
              "grey",
              "grey",
              "grey",
              "grey",
              "grey",
              "grey",
              "black",
            ]}
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <View style={{ margin: 15 }}>
              <Text style={{ fontSize: 19 }}>
                Player(X): {this.state.xPoints}
              </Text>
              <Text style={{ fontSize: 19 }}>
                Player(O): {this.state.oPoints}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingTop: 20,
                fontSize: 30,
              }}
            >
              <TouchableOpacity
                disabled={this.state.boxDisable}
                style={styles.box}
                onPress={this.changeArray1}
              >
                <Animated.Text
                  style={{
                    fontSize: this.state.anim1.interpolate({
                      inputRange: [0, 2],
                      outputRange: [35, 20],
                    }),
                  }}
                >
                  {this.state.text1}
                </Animated.Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={this.state.boxDisable}
                style={styles.box}
                onPress={this.changeArray2}
              >
                <Animated.Text
                  style={{
                    fontSize: this.state.anim2.interpolate({
                      inputRange: [0, 2],
                      outputRange: [35, 20],
                    }),
                  }}
                >
                  {this.state.text2}
                </Animated.Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={this.state.boxDisable}
                style={styles.box}
                onPress={this.changeArray3}
              >
                <Animated.Text
                  style={{
                    fontSize: this.state.anim3.interpolate({
                      inputRange: [0, 2],
                      outputRange: [35, 20],
                    }),
                  }}
                >
                  {this.state.text3}
                </Animated.Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                disabled={this.state.boxDisable}
                style={styles.box}
                onPress={this.changeArray4}
              >
                <Animated.Text
                  style={{
                    fontSize: this.state.anim4.interpolate({
                      inputRange: [0, 2],
                      outputRange: [35, 20],
                    }),
                  }}
                >
                  {this.state.text4}
                </Animated.Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={this.state.boxDisable}
                style={styles.box}
                onPress={this.changeArray5}
              >
                <Animated.Text
                  style={{
                    fontSize: this.state.anim5.interpolate({
                      inputRange: [0, 2],
                      outputRange: [35, 20],
                    }),
                  }}
                >
                  {this.state.text5}
                </Animated.Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={this.state.boxDisable}
                style={styles.box}
                onPress={this.changeArray6}
              >
                <Animated.Text
                  style={{
                    fontSize: this.state.anim6.interpolate({
                      inputRange: [0, 2],
                      outputRange: [35, 20],
                    }),
                  }}
                >
                  {this.state.text6}
                </Animated.Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                disabled={this.state.boxDisable}
                style={styles.box}
                onPress={this.changeArray7}
              >
                <Animated.Text
                  style={{
                    fontSize: this.state.anim7.interpolate({
                      inputRange: [0, 2],
                      outputRange: [35, 20],
                    }),
                  }}
                >
                  {this.state.text7}
                </Animated.Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={this.state.boxDisable}
                style={styles.box}
                onPress={this.changeArray8}
              >
                <Animated.Text
                  style={{
                    fontSize: this.state.anim8.interpolate({
                      inputRange: [0, 2],
                      outputRange: [35, 20],
                    }),
                  }}
                >
                  {this.state.text8}
                </Animated.Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={this.state.boxDisable}
                style={styles.box}
                onPress={this.changeArray9}
              >
                <Animated.Text
                  style={{
                    fontSize: this.state.anim9.interpolate({
                      inputRange: [0, 2],
                      outputRange: [35, 20],
                    }),
                  }}
                >
                  {this.state.text9}
                </Animated.Text>
              </TouchableOpacity>
            </View>

            <Animated.View
              style={{
                alignItems: "center",
                paddingTop: 10,
                opacity: this.state.anim10.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              }}
            >
              <Animated.Text>{this.state.startText1}</Animated.Text>
              <Animated.Text>{this.state.startText2}</Animated.Text>
            </Animated.View>

            <Button
              disabled={this.state.btnDisable}
              onPress={this.play}
              color="transparent"
            >
              <Text style={{ color: "black", fontSize: 18 }}>
                {this.state.btnText}
              </Text>
            </Button>
            {/* <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <FadeInView
              style={{ width: 250, height: 50, backgroundColor: "#fff" }}
              texts="Fading In"
            />
          </View> */}
          </LinearGradient>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: "#fff",
    paddingTop: 30,
    alignItems: "center",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0,
    height: 70,
    width: 70,
    borderWidth: 2,
    fontSize: 30,
    borderColor: "black",
  },
  text: {
    fontSize: 25,
  },
});
