import React from 'react'
import { View, Text } from 'react-native'
import { useFormikContext } from 'formik';
import AppButton from '../Buttons/AppButton'


const SubmitButton = ({ title }) => {
    const { handleSubmit } = useFormikContext();
    return (
        <AppButton title={title} onPress={handleSubmit} />
    )
}

export default SubmitButton
