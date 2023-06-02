import StyledLoginForm from './login-form.styled'

const LoginForm = () => {
  return (
    <StyledLoginForm>
      <div className="au-login-form-cn">
        <label htmlFor = "Email" className="au-email-label">Email
        </label>
        <input type = "email" name="Email" placeholder="abc@xyz.com" className="au-email-input"/>
        <label htmlFor = "Password" className="au-password-label">Password
          <input type = "password" name="Password" placeholder="Password" className="au-password-input"/>
        </label>
      </div>
      <div className="au-signin-btn-cn">
        <button className="au-signin-btn">SignIn</button>
      </div>
    </StyledLoginForm>
  )
}
export default LoginForm
