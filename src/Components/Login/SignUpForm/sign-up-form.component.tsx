import React from 'react'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import StyledSignUpForm, { StyledTextInput } from './sign-up-form.styled'
import { Button } from '@mui/material'

const SignUpForm = () => {
  return (
    <StyledSignUpForm elevation={3}>
      <CardContent>
        <Typography variant="h3" component="div">
          Sign Up
        </Typography>
        <Typography mt={3}>Create a new Account</Typography>
        <Typography mt={3}>Enter the following details</Typography>
        <form>
          <Box mt={2}>
            <StyledTextInput
              required
              label="First Name"
              type="text"
            ></StyledTextInput>
          </Box>
          <Box mt={2}>
            <StyledTextInput
              required
              label="Last Name"
              type="text"
            ></StyledTextInput>
          </Box>
          <Box mt={2}>
            <StyledTextInput
              required
              label="Email"
              type="email"
            ></StyledTextInput>
          </Box>
          <Box mt={2}>
            <StyledTextInput
              required
              label="Password"
              type="password"
            ></StyledTextInput>
          </Box>
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
          </Box>
        </form>
      </CardContent>
    </StyledSignUpForm>
  )
}

export default SignUpForm
