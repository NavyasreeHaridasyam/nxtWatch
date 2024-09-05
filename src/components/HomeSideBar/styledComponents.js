import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0px;
  width: 25%;
  height: 100vh;

  @media screen and (max-width: 576px) {
    max-width: 15%;
  }
  background-color: ${props =>
    props.isDarkThemeActivated ? '#231f20' : '#ffffff'};
`

export const PathItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;

  margin-top: 0px;
  margin-left: 0px;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  color: ${props => (props.isDarkThemeActivated ? '#f1f5f9' : '#383838')};
`

export const ContactUs = styled.p`
  font-family: Roboto;
  color: ${props => (props.isDarkThemeActivated ? '#f1f5f9' : '#383838')};
  font-size: 12px;
`

export const SocialMediaIconsContainer = styled.div`
  display: flex;
`

export const SocialMediaIcon = styled.img`
  height: 30px;
  margin-right: 10px;
`

export const FooterPara = styled.p`
  font-family: Roboto;
  color: ${props => (props.isDarkThemeActivated ? '#f1f5f9' : '#383838')};
  width: 200px;
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

export const OptionsPopupContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props =>
    props.isDarkThemeActivated === true ? 'black' : 'white'};
  display: flex;
  flex-direction: column;
  align-items: center;
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
