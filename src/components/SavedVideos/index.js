import {Component} from 'react'
import {BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import HomeSideBar from '../HomeSideBar'
import NxtwatchContext from '../NxtwatchContext'
import TrendingVideoItem from '../TrendingVideoItem'

import {
  SavedVideosBgContainer,
  SavedVideosContainer,
  NoVideosImg,
  NovideosContainer,
  NoSavedHeading,
  NoSavedDescription,
  SavedVideoItemsContainer,
  SavedCard,
  IconContainer,
  SavedHeading,
  Another,
} from './styledComponents'

class SavedVideos extends Component {
  renderNoVideos = isDarkThemeActivated => (
    <NovideosContainer>
      <NoVideosImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoSavedHeading isDarkThemeActivated={isDarkThemeActivated}>
        No saved videos found
      </NoSavedHeading>
      <NoSavedDescription>
        You can save your videos while watching them
      </NoSavedDescription>
    </NovideosContainer>
  )

  renderSavedVideosDetails = obj => {
    const {savedVideos} = obj
    return (
      <SavedVideoItemsContainer>
        {savedVideos.map(eachVideo => (
          <TrendingVideoItem eachVideo={eachVideo} key={eachVideo.id} />
        ))}
      </SavedVideoItemsContainer>
    )
  }

  renderSavedVideos = obj => {
    const {savedVideos, isDarkThemeActivated} = obj
    if (savedVideos.length === 0) {
      return this.renderNoVideos(isDarkThemeActivated)
    }
    return this.renderSavedVideosDetails(obj)
  }

  render() {
    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {savedVideos, isDarkThemeActivated} = value
          return (
            <SavedVideosBgContainer
              data-testid="savedVideos"
              isDarkThemeActivated={isDarkThemeActivated}
            >
              <Header />
              <SavedVideosContainer>
                <HomeSideBar />
                <SavedCard isDarkThemeActivated={isDarkThemeActivated}>
                  <Another>
                    <IconContainer isDarkThemeActivated={isDarkThemeActivated}>
                      <BiListPlus size={25} color=" #ff0b37" />
                    </IconContainer>
                    <SavedHeading isDarkThemeActivated={isDarkThemeActivated}>
                      Saved Videos
                    </SavedHeading>
                  </Another>
                  {this.renderSavedVideos({savedVideos, isDarkThemeActivated})}
                </SavedCard>
              </SavedVideosContainer>
            </SavedVideosBgContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default SavedVideos
