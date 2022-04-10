import React, { useState, useEffect } from "react";
import { View, Text, } from "react-native";
import { server } from '../../server.js';
import { styles } from "./styles.js";

export default function coletasDisponiveis () {
    let [colletcs, setCollects] = useState([])

    useEffect(() => {
        fetch("/api/collects")
        .then((response) => response.json())
        .then((json) => setCollects(json.collects))
    }, [])

    return (
        <View>
            <Text style={styles.title}>Coletas Disponiveis</Text>
            
            
                {colletcs.map((collect) => (
                    <View style={styles.card}>
                        <Text style={styles.card} key={collect.id}>Remetente: {collect.remetente}</Text>
                        <Text style={styles.card}>
                            Endereço: {collect.street}, 
                            N: {collect.number} -   
                            Bairro: {collect.neighborhood} - 
                            Cidade: {collect.cityIDAddress.name} - 
                            Estado: {collect.cityIDAddress.state} 
                        </Text>
                    </View>
                
            ))}
            
            
        </View>
    )
}