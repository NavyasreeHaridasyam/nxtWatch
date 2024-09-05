import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {IoMoon} from 'react-icons/io5'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {
  HeaderBgContainer,
  HeaderLogo,
  IconsContainer,
  Profile,
  ThemeButton,
  LogOutButton,
  LogoutPopUpContainer,
  LogOutText,
  CancelButton,
  ConfirmButton,
  LogOutIconButton,
  PopUpContainer,
} from './styledComponents'
import NxtwatchContext from '../NxtwatchContext'

const Header = props => (
  <NxtwatchContext.Consumer>
    {value => {
      const {isDarkThemeActivated, onClickToChangeTheme} = value

      const changeTheme = () => {
        onClickToChangeTheme()
      }

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const nxtwatchLogoImgUrl = isDarkThemeActivated
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <HeaderBgContainer isDarkThemeActivated={isDarkThemeActivated}>
          <Link to="/">
            <HeaderLogo src={nxtwatchLogoImgUrl} alt="website logo" />
          </Link>
          <IconsContainer>
            <ThemeButton
              type="button"
              onClick={changeTheme}
              data-testid="theme"
            >
              {isDarkThemeActivated ? (
                <FiSun size={30} color="#ffffff" />
              ) : (
                <IoMoon size={30} />
              )}
            </ThemeButton>
            <Profile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <PopUpContainer>
              <Popup
                modal
                trigger={
                  <div className="logout-btn-container">
                    <LogOutButton
                      isDarkThemeActivated={isDarkThemeActivated}
                      type="button"
                    >
                      Logout
                    </LogOutButton>
                    <LogOutIconButton
                      type="button"
                      isDarkThemeActivated={isDarkThemeActivated}
                    >
                      <FiLogOut
                        isDarkThemeActivated={isDarkThemeActivated}
                        size={23}
                        className="log-out-icon"
                      />
                    </LogOutIconButton>
                  </div>
                }
                className="popup-content"
              >
                {close => (
                  <LogoutPopUpContainer
                    isDarkThemeActivated={isDarkThemeActivated}
                  >
                    <LogOutText isDarkThemeActivated={isDarkThemeActivated}>
                      Are you sure, you want to logout?
                    </LogOutText>
                    <CancelButton
                      onClick={() => close()}
                      isDarkThemeActivated={isDarkThemeActivated}
                    >
                      Cancel
                    </CancelButton>
                    <ConfirmButton
                      onClick={onLogout}
                      isDarkThemeActivated={isDarkThemeActivated}
                    >
                      Confirm
                    </ConfirmButton>
                  </LogoutPopUpContainer>
                )}
              </Popup>
            </PopUpContainer>
          </IconsContainer>
        </HeaderBgContainer>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default withRouter(Header)
