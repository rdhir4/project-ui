import { TextField } from '@mui/material'
import Card from '@mui/material/Card'
import { styled } from '@mui/system'

const StyledSignUpForm = styled(Card)`
  background-color: white;
  border-radius: 8px;
  max-width: 30vw;
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
`
export const StyledTextInput = styled(TextField)`
  width: 25vw;
`

export default StyledSignUpForm
