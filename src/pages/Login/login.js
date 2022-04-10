import React, { useState } from "react";
// import 'react-native-gesture-handler';
// import { NavigationContainer, createStackNavigator } from "@react-navigation";
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
// import coletasLancamento from "../Coletas-Lançamento/coletas-lancamento";
import { 
    View, 
    KeyboardAvoidingView, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    Text, 
    Button
    } 
    from "react-native";

export default function Login({ navigation }) {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <KeyboardAvoidingView style={styles.background}> 
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../assets/logo-transparente.png')}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                style={styles.input}
                placeholder="Email"
                autoCorrect={false}
                />

                <TouchableOpacity style={styles.password}>
                    <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    autoCorrect={false}
                    type="password"
                    secureTextEntry={hidePassword}
                    />
                    {
                        hidePassword ?
                        <Ionicons name="eye" color='#000' size={25} onPress={ () => setHidePassword(!hidePassword)}/>
                        :
                        <Ionicons name="eye-off" color='#000' size={25} onPress={ () => setHidePassword(!hidePassword)}/>
                    }
                    
                </TouchableOpacity>
                

                <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.submitText} onPress={() => navigation.navigate('Menu')} >Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

