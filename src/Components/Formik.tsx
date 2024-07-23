import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, IconButton, InputAdornment, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { StyleSheet } from './Styles'


const initialValues = {
    name: '',
    email: '',
    password: '',
}

const validate = (values: typeof initialValues) => {
    const errors = {
        name: "",
        email: "",
        password: "",
    };

    if (values.name === "") {
        errors.name = "Name is required"
    }
    else if (values.name.length < 6 && values.name !== "") {
        errors.name = "Minimum 6 characters required"
    }
    if (values.email === "") errors.email = "Email is required"
    else if (values.email !== '' && !/\S+@\S+\.\S+/.test(values.email)) errors.email = "Email address is invalid";

    if (values.password === "") errors.password = "Password is required"
    else if (values.password.length < 8 && values.password.length > 1) errors.password = "Min 8 characters is required"

    return errors
}



const Formik = () => {
    const [showPassword, setShowPassword] = useState<Istate['showPassword']>(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }


    const formik = useFormik({
        initialValues,
        // enable all the validation features.
        validateOnBlur: true,
        validateOnChange: true,
        validate,
        onSubmit: (values) => {
            console.log(values, 'hello')
            console.log("iudsfshf")
        },
    });

    interface Istate {
        showPassword: boolean;
    }

    return (
        <Paper sx={StyleSheet.main} elevation={5}>
            <Stack component={'form'} onSubmit={formik.handleSubmit} gap={2}>
                <Typography sx={StyleSheet.header}>Signin Form</Typography>
                <Stack>
                    <TextField type="text" name="name" value={formik.values.name}
                        id="name"
                        placeholder='enter name' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.name && formik.touched.name && <Typography sx={StyleSheet.helperTex}> {formik.errors.name}</Typography>}
                </Stack>
                <Stack>
                    <TextField type="email" name="email" value={formik.values.email}
                        id="email"
                        placeholder='enter email' onChange={formik.handleChange} onBlur={formik.handleBlur}
                    />
                    {formik.errors.email && formik.touched.email && <Typography sx={StyleSheet.helperTex}>{formik.errors.email}</Typography>}
                </Stack>
                <Stack>
                    <OutlinedInput placeholder='enter password'
                        type={!showPassword ? "password" : "text"}
                        id="password"
                        name="password" value={formik.values.password}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={handleClickShowPassword}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {formik.errors.password && formik.touched.password && <Typography sx={StyleSheet.helperTex}>{formik.errors.password}</Typography>}
                </Stack>
                <Button variant='contained' type="submit"> submit</Button>
            </Stack>
        </Paper>

    )
}

export default Formik
