import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import ListIcon from '../ListIcon'

import NxtwatchContext from '../NxtwatchContext'

import {
  SideBarContainer,
  PathItemsContainer,
  FooterContainer,
  ContactUs,
  SocialMediaIconsContainer,
  SocialMediaIcon,
  FooterPara,
} from './styledComponents'

const navOptions = [
  {displayText: 'Home', icon: <AiFillHome size={20} />, id: 'HOME', path: '/'},
  {
    displayText: 'Trending',
    icon: <HiFire size={20} />,
    id: 'TRENDING',
    path: '/trending',
  },
  {
    displayText: 'Gaming',
    icon: <SiYoutubegaming size={20} />,
    id: 'GAMING',
    path: '/gaming',
  },
  {
    displayText: 'Saved Videos',
    icon: <BiListPlus size={20} />,
    id: 'SAVED VIDEOS',
    path: '/saved-videos',
  },
]

const HomeSideBar = () => (
  <NxtwatchContext.Consumer>
    {value => {
      const {isDarkThemeActivated, activeOption} = value

      return (
        <SideBarContainer isDarkThemeActivated={isDarkThemeActivated}>
          <PathItemsContainer>
            {navOptions.map(each => (
              <ListIcon
                key={each.id}
                details={each}
                isActive={activeOption === each.id}
              />
            ))}
          </PathItemsContainer>
          <FooterContainer>
            <ContactUs isDarkThemeActivated={isDarkThemeActivated}>
              CONTACT US
            </ContactUs>
            <SocialMediaIconsContainer>
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaIconsContainer>
            <FooterPara isDarkThemeActivated={isDarkThemeActivated}>
              Enjoy! Now to see your channels and recommendations!
            </FooterPara>
          </FooterContainer>
        </SideBarContainer>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default HomeSideBar
