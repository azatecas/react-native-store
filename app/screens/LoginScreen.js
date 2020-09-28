import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppFormField from '../components/AppFormField';
import SignIn from '../components/Buttons/SignIn';
import ErrorMessage from '../components/ErrorMessage';

import { Formik } from 'formik';
import * as Yup from 'yup';

//validation schema
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

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
                validationSchema={validationSchema}
            >
                { ({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <AppFormField
                            name="email" 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            placeholder="Email"
                            textContentType="emailAddress"
                        />
                        <AppFormField
                            name="password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
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
