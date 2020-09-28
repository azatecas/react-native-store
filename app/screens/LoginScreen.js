import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import SignIn from '../components/Buttons/SignIn'

import { Formik } from 'formik';

const LoginScreen = (props) => {

    return (
        <Screen style={styles.container}>
            <Image 
                source={require("../assets/logo-red.png")}
                style={styles.logo}
            />

            <Formik 
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
            >
                { ({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            placeholder="Email"
                            textContentType="emailAddress"
                            onChangeText={handleChange("email")}
                        />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                            onChangeText={handleChange("password")}
                        />
                        <SignIn 
                            title="Login" 
                            onPress={handleSubmit} 
                        />
                    </>
                )}
            </Formik>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
    },
    logo:{
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
})


export default LoginScreen
