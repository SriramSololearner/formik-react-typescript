import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { Notifications } from 'react-push-notification';
import addNotification from 'react-push-notification';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { AcUnit } from '@mui/icons-material';


const validationSchema = yup.object({
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const Formik = () => {

    const buttonClick = () => {
        addNotification({
            title: 'Validating Details!',
            subtitle: 'Success!',
            message: '',
            theme: "darkblue",
            backgroundTop: 'green', //optional, background color of top container.
            backgroundBottom: '#fbd6d0', //optional, background color of bottom container.
            colorTop: 'white', //optional, font color of top container.
            native: true,
            icon: 'https://static.vecteezy.com/system/resources/previews/010/366/202/original/bell-icon-transparent-notification-free-png.png',
            // when using native, your OS will handle theming.
        });
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            buttonClick();

        },
    });

    return (
        <div>
            <Box > <Notifications position='bottom-left' /></Box>
            <h1> Hey All! Please Login</h1>

            <Box component={'form'} onSubmit={formik.handleSubmit}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',

                }} >

                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    sx={{ mt: "20px", width: '15%' }}
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button color="primary" variant="contained" type="submit"
                    sx={{ mt: '20px' }}>
                    Submit
                </Button>
            </Box>


        </div>
    )
}

export default Formik
