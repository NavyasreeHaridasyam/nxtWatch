import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {
  HomeVideoItemContainer,
  ThumbnailImg,
  SubscribeLogoAndDescriptionContainer,
  ChannelLogo,
  TitleOfTheVideo,
  ChannelName,
  DescriptionViewsAndTimeContainer,
  ViewsAndTimeContainer,
  Views,
  TimeDistance,
  ChannelNameViewsAndTimeContainer,
  DotOne,
  DotTwo,
} from './styledComponents'

import './index.css'

import NxtwatchContext from '../NxtwatchContext'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  const profileImageUrl = channel.profile_image_url
  const {name} = channel
  const time = formatDistanceToNow(new Date(publishedAt))
  return (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDarkThemeActivated} = value
        return (
          <Link to={`/videos/${id}`} className="link-item">
            <HomeVideoItemContainer>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <SubscribeLogoAndDescriptionContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <DescriptionViewsAndTimeContainer>
                  <TitleOfTheVideo isDarkThemeActivated={isDarkThemeActivated}>
                    {title}
                  </TitleOfTheVideo>

                  <ChannelNameViewsAndTimeContainer>
                    <ChannelName isDarkThemeActivated={isDarkThemeActivated}>
                      {name}
                    </ChannelName>
                    <DotOne>
                      <BsDot
                        size={23}
                        color={
                          isDarkThemeActivated === true ? '#94a3b8' : '#000000'
                        }
                      />
                    </DotOne>
                    <ViewsAndTimeContainer>
                      <Views isDarkThemeActivated={isDarkThemeActivated}>
                        {viewCount} Views
                      </Views>
                      <DotTwo>
                        <BsDot
                          size={23}
                          color={
                            isDarkThemeActivated === true
                              ? '#94a3b8'
                              : '#000000'
                          }
                        />
                      </DotTwo>
                      <TimeDistance isDarkThemeActivated={isDarkThemeActivated}>
                        {time}
                      </TimeDistance>
                    </ViewsAndTimeContainer>
                  </ChannelNameViewsAndTimeContainer>
                </DescriptionViewsAndTimeContainer>
              </SubscribeLogoAndDescriptionContainer>
            </HomeVideoItemContainer>
          </Link>
        )
      }}
    </NxtwatchContext.Consumer>
  )
}

export default VideoItem
