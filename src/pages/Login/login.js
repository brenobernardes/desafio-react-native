import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { 
    View, 
    KeyboardAvoidingView, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    Text, 
    StyleSheet
    } 
    from "react-native";

export default function Login() {
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
                    <Text style={styles.submitText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2'
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    input: {
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10
    },
    password: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
    },
    btnSubmit: {
        backgroundColor: '#35aaff',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    submitText: {
        color: '#fff',
        fontSize: 18
    }
})