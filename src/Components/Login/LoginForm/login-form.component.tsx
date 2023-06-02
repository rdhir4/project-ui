import { useState } from 'react'
import StyledLoginForm from './login-form.styled'
import { useDispatch } from 'react-redux'
import { signIn } from '../../../Redux/Auth/auth.action'
import bcrypt from 'bcrypt'

const LoginForm = () => {
  const dispatch = useDispatch()

  const [userInput, setUserInput] = useState('')
  const [password, setPassword] = useState('')

  const encryptPassword = (password: string) => {
    const saltRounds = 10 // Determines the complexity of the hashing algorithm
    const hashedPassword = bcrypt.hashSync(password, saltRounds)
    return hashedPassword
  }

  return (
    <StyledLoginForm>
      <div className="au-login-form-cn">
        <label htmlFor = "user-input" className="au-email-label">Email
        </label>
        <input
          type = "email"
          name="Email"
          placeholder="Enter username or email"
          className="au-email-input"
          id = "user-input"
          onChange={(event) => { setUserInput(event.target.value) }}
        />
        <label htmlFor = "Password" className="au-password-label">Password
          <input
            type = "password"
            name="Password"
            placeholder="Password"
            className="au-password-input"
            onChange={(event) => { setPassword(event.target.value) }}
          />
        </label>
      </div>
      <div className="au-signin-btn-cn">
        <button
          type = "button"
          className="au-signin-btn"
          onClick={() => dispatch(signIn(userInput, encryptPassword(password)) as any)}
        >SignIn</button>
      </div>
    </StyledLoginForm>
  )
}
export default LoginForm
