import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {
    errorMsg: '',
    username: '',
    password: '',
    isError: '',
    isShowPassword: false,
  }

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({isError: true, errorMsg})
  }

  onClickLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleShowPassword = event => {
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
  }

  render() {
    const {username, password, isShowPassword, isError, errorMsg} = this.state
    const changeType = isShowPassword ? 'Text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-form-main-container">
        <form onSubmit={this.onClickLogin} className="form-container">
          <h1 className="heading">Daily Mood Tracker</h1>
          <div className="large-device-container">
            <div className="input-container">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                placeholder="Username"
                className="user-input"
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                placeholder="Password"
                value={password}
                type={changeType}
                className="user-input"
                onChange={this.onChangePassword}
              />
            </div>
            <div className="checkbox-container">
              <input
                id="Checkbox"
                type="checkbox"
                className="checkbox-input"
                onChange={this.onToggleShowPassword}
              />
              <label htmlFor="Checkbox" className="checkbox-label">
                Show Password
              </label>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            {isError && <p className="error-text">{errorMsg}</p>}
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
