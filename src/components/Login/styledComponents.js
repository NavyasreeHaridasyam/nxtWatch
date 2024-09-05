import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  background-color: ${props =>
    props.isDarkThemeActivated === true ? '#181818' : '#f9f9f9'};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LoginInsideContainer = styled.form`
  background-color: ${props =>
    props.isDarkThemeActivated === true ? '#000000' : '#ffffff'};
  border-radius: 20px;
  background-size: cover;
  box-shadow: 3px 1px 10px 1px #94a3b8;
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 40%;

  @media screen and (max-width: 576px) {
    width: 90%;
    min-height: 45vh;
  }
`

export const LogoContainer = styled.div`
  text-align: center;
`

export const LoginImage = styled.img`
  height: 40px;
  width: 180px;
  text-align: center;
`

export const LoginLabel = styled.label`
  font-family: Roboto;
  color: #475569;
  font-weight: bold;
  font-size: 15px;
`

export const LoginInput = styled.input`
  font-family: Roboto;
  color: #475569;
  border: 0.2px solid #475569;
  padding: 10px;
  outline: none;
  margin: 10px;
  border-radius: 10px;
`

export const CheckBoxPassword = styled.div`
  display: flex;
  align-items: center;
`

export const LoginButton = styled.button`
  font-family: Roboto;
  color: #ffffff;
  font-weight: bold;
  background-color: #4f46e5;
  border-radius: 10px;
  padding: 10px;
  border: none;
`

export const Error = styled.p`
  font-family: Roboto;
  color: #ff0b37;
`
