import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default function coletasDisponiveis () {
    let [colletcs, setCollects] = useState([])

    useEffect(() => {
        fetch("/api/collects")
        .then((response) => response.json())
        .then((json) => setCollects(json.collects))
    }, [])

    return (
        <View>
            <Text>Coletas Disponiveis</Text>
            
            {colletcs.map((collect) => (
                <Text key={collect.id}>{collect.situation}</Text>
            ))}
        </View>
    )
}