import Header from '../Header'
import HomeSideBar from '../HomeSideBar'

import {
  NotFoundBgContainer,
  NotFoundContainer,
  NotFoundImg,
  NotFoundContent,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'
import NxtwatchContext from '../NxtwatchContext'

const NotFound = () => (
  <NxtwatchContext.Consumer>
    {value => {
      const {isDarkThemeActivated} = value
      const imgUrl =
        isDarkThemeActivated === true
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundBgContainer isDarkThemeActivated={isDarkThemeActivated}>
          <Header />
          <NotFoundContainer>
            <HomeSideBar />
            <NotFoundContent>
              <NotFoundImg src={imgUrl} alt="not found" />
              <NotFoundHeading isDarkThemeActivated={isDarkThemeActivated}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContent>
          </NotFoundContainer>
        </NotFoundBgContainer>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default NotFound
