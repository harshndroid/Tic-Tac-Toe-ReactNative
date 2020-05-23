import React from "react";
import { Text, Appbar } from "react-native-paper";

export default function MyHeader() {
  return (
    <Appbar.Header style={{backgroundColor:"black", elevation:30, paddingLeft:15}}>
      <Text style={{color:"#fff", fontSize:20, fontWeight:"bold"}}>Two Player</Text>
    </Appbar.Header>
  );
}
