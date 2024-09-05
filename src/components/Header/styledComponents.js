import styled from 'styled-components'

export const HeaderBgContainer = styled.div`
  background-color: ${props =>
    props.isDarkThemeActivated ? '#231f20' : '#ffffff'};
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

export const HeaderLogo = styled.img`
  height: 25px;
  width: 130px;
  cursor: pointer;
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Profile = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 20px;
  margin-right: 20px;
`

export const LogoutButton = styled.button`
  font-family: Roboto;
  color: #3b82f6;
  border: 1px solid #3b82f6;
  border-radius: 3px;
  font-weight: bold;
  background-color: transparent;
  padding: 10px;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 15px;
  margin-top: 0px;
  padding-right: 0px;
  width: 18px;
`

export const LogOutButton = styled.button`
  background-color: transparent;
  border: 2px solid
    ${props => (props.isDarkThemeActivated ? '#ffffff' : 'blue')};
  color: ${props => (props.isDarkThemeActivated ? '#ffffff' : 'blue')};
  border-radius: 5px;
  cursor: pointer;
  height: 30px;
  margin-left: 15px;
  margin-right: 20px;
  @media screen and (max-width: 576px) {
    margin-right: 0px;
    display: none;
    width: 0px;
  }
`
export const LogOutIconButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.isDarkThemeActivated ? '#ffffff' : 'black')};
  border-radius: 5px;
  cursor: pointer;
  height: 30px;
  margin-left: 15px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 576px) {
    margin-right: 0px;
    display: none;
  }
`

export const LogoutPopUpContainer = styled.div`
  height: 25vh;
  background-color: black;
  width: 320px;
  padding: 3%;
  text-align: center;
  border-radius: 12px;
  background-color: ${props =>
    props.isDarkThemeActivated ? 'black' : '#ffffff'};
  @media screen and (max-width: 576px) {
    margin-top: 0px;
  }
`
export const LogOutText = styled.p`
  color: ${props =>
    props.isDarkThemeActivated === true ? '#f1f1f1' : '#00306e'};
`

export const CancelButton = styled.button`
  background-color: transparent;
  border: 2px solid
    ${props => (props.isDarkThemeActivated === true ? '#f1f1f1' : 'blue')};
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  padding: 8px;
  width: 45%;
  margin-top: 20px;
  color: ${props => (props.isDarkThemeActivated === true ? '#f1f1f1' : 'blue')};
`
export const ConfirmButton = styled.button`
  background-color: blue;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  padding: 10px;
  color: #f1f1f1;
  width: 45%;
  margin-left: 10px;
  margin-top: 20px;
`
export const SettingsButton = styled.button`
  display: none;
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    display: block;
  }
`

export const ProfileImgButton = styled.button`
  display: none;
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  @media screen and (min-width: 577px) {
    display: block;
  }
`
export const PopUpContainer = styled.div`
  padding-left: 0px;
`
export const OptionsPopupContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props =>
    props.isDarkThemeActivated === true ? 'black' : 'white'};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NavOptions = styled.ul`
  padding-left: 0px;
  margin-top: 0px;
  list-style-type: none;
  width: 80%;
`
export const NavOption = styled.li`
  list-style-type: none;
  display: flex;
  padding-left: 0px;
  align-items: center;
`
export const NavOptionText = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin-left: 20px;
  color: ${props => (props.isDarkThemeActivated ? '#ffffff' : '#000000')};
`
const backgroundColorOfActiveOption = obj => {
  const {isDarkThemeActivated, isActiveOption} = obj
  if (isDarkThemeActivated && isActiveOption) {
    return '#383838'
  }
  if (isDarkThemeActivated && !isActiveOption) {
    return '#000000'
  }
  if (!isDarkThemeActivated && isActiveOption) {
    return '#f1f5f9'
  }
  return 'transparent'
}
export const NavButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 42px;
  color: ${props => (props.isDarkThemeActivated ? '#ffffff' : '#000000')};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 90%;
  border-radius: 6px;
  background-color: ${props =>
    backgroundColorOfActiveOption({
      isDarkThemeActivated: props.isDarkThemeActivated,
      isActiveOption: props.isActiveOption,
    })};
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  text-align: end;
  padding-right: 50px;
  margin-top: 5%;
  height: 30vh;
  color: ${props =>
    props.isDarkThemeActivated ? '#ffffff' : '#000000'} !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`
