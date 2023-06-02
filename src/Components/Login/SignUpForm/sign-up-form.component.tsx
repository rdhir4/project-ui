import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import StyledSignUpForm from "./sign-up-form.styled"
import { Button } from "@mui/material"
import DatePicker from "@mui/lab/DatePicker"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import AdapterDateFns from "@mui/lab/AdapterDateFns"

const SignUpForm = () => {
  return (
    <StyledSignUpForm>
      <Card>
        <CardContent>
          <Typography variant='h3' component='div'>
            Sign Up
          </Typography>
          <Typography mt={3}>Create a new Account</Typography>
          <Typography mt={3}>Enter the below details</Typography>
          <form>
            <Box mt={2}>
              <TextField required label='First Name' type='text'></TextField>
            </Box>
            <Box mt={2}>
              <TextField required label='Last Name' type='text'></TextField>
            </Box>
            <Box mt={2}>
              <TextField required label='Email' type='email'></TextField>
            </Box>
            <Box mt={2}>
              <TextField required label='Password' type='password'></TextField>
            </Box>
            <Box mt={2}>
              <Button type='submit' variant='contained' color='primary'>
                Sign Up
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </StyledSignUpForm>
  )
}

export default SignUpForm
