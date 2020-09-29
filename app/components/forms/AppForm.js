import React from 'react';
import { Formik } from 'formik';
import { View, Text } from 'react-native';

const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <>
                {children}
                </>
            )}
        </Formik>
    )
}

export default AppForm
