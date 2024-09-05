import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  LoginBgContainer,
  LoginInsideContainer,
  LoginImage,
  LoginLabel,
  LoginInput,
  CheckBoxPassword,
  LoginButton,
  LogoContainer,
  Error,
} from './styledComponents'

import NxtwatchContext from '../NxtwatchContext'

class Login extends Component {
  state = {
    userInput: '',
    passwordInput: '',
    showPasswordStatus: false,
    errorMsg: '',
    errorStatus: false,
  }

  componentDidMount() {
    this.loginUser()
  }

  loginUser = async () => {
    const {userInput, passwordInput} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username: userInput, password: passwordInput}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = await data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('./home')
    } else {
      const error = await data.error_msg
      this.setState({errorStatus: true, errorMsg: error})
    }
  }

  onChangeUsername = event => {
    this.setState({userInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangePasswordStatus = event => {
    this.setState({showPasswordStatus: event.target.checked})
  }

  render() {
    const {
      userInput,
      passwordInput,
      showPasswordStatus,
      errorStatus,
      errorMsg,
    } = this.state

    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDarkThemeActivated} = value
          return (
            <LoginBgContainer isDarkThemeActivated={isDarkThemeActivated}>
              <LoginInsideContainer
                onSubmit={this.loginUser()}
                isDarkThemeActivated={isDarkThemeActivated}
              >
                <LogoContainer>
                  <LoginImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                </LogoContainer>
                <LoginLabel htmlFor="username">USERNAME</LoginLabel>
                <LoginInput
                  type="text"
                  id="username"
                  value={userInput}
                  onChange={this.onChangeUsername}
                />
                <LoginLabel htmlFor="password">PASSWORD</LoginLabel>
                <LoginInput
                  type={showPasswordStatus ? 'text' : 'password'}
                  id="password"
                  value={passwordInput}
                  onChange={this.onChangePassword}
                />
                <CheckBoxPassword>
                  <LoginInput
                    type="checkbox"
                    id="checkbox"
                    onChange={this.onChangePasswordStatus}
                  />
                  <LoginLabel htmlFor="checkbox">Show Password</LoginLabel>
                </CheckBoxPassword>
                <LoginButton type="submit">Login</LoginButton>
                {errorStatus ? <Error>*{errorMsg}</Error> : ''}
              </LoginInsideContainer>
            </LoginBgContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default Login
