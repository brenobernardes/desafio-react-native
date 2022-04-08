import React from "react";
import { View, Button } from "react-native";

export default function Menu ({ navigation }) {

    return (
        <View>
            <Button title="Coletas Disponiveis" onPress={() => navigation.navigate("Coletas")} />
            <Button title="Sair" onPress={() => navigation.goBack()} />
        </View>
    )
}