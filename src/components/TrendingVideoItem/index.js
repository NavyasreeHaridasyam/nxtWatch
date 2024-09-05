import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {
  VideoItemContainer,
  ThumbnailItem,
  DescriptionAndViewsETCContainerDeskTop,
  Title,
  ChannelName,
  Views,
  ViewsAndTimeContainer,
  DescriptionAndViewsETCContainerMobile,
  ChannelImg,
  ChannelAndViewsAndTimeContainer,
} from './styledComponents'

import NxtwatchContext from '../NxtwatchContext'

const TrendingVideoItem = props => {
  const {eachVideo} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = eachVideo
  const {name, profileImageUrl} = channel
  const time = formatDistanceToNow(new Date(publishedAt))
  return (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDarkThemeActivated} = value
        return (
          <Link to={`/videos/${id}`} className="link-item">
            <VideoItemContainer>
              <ThumbnailItem src={thumbnailUrl} alt="video thumbnail" />
              <DescriptionAndViewsETCContainerDeskTop>
                <Title isDarkThemeActivated={isDarkThemeActivated}>
                  {title}
                </Title>
                <ChannelName>{name}</ChannelName>
                <ViewsAndTimeContainer>
                  <Views>{viewCount} views</Views>
                  <BsDot size={25} color="#64748b" />
                  <Views>{time}</Views>
                </ViewsAndTimeContainer>
              </DescriptionAndViewsETCContainerDeskTop>

              <DescriptionAndViewsETCContainerMobile>
                <ChannelImg src={profileImageUrl} alt="channel logo" />
                <div>
                  <Title isDarkThemeActivated={isDarkThemeActivated}>
                    {title}
                  </Title>
                  <ChannelAndViewsAndTimeContainer>
                    <ChannelName>{name}</ChannelName>
                    <BsDot size={25} color="#64748b" />
                    <Views>{viewCount} views</Views>
                    <BsDot size={25} color="#64748b" />
                    <Views>{time}</Views>
                  </ChannelAndViewsAndTimeContainer>
                </div>
              </DescriptionAndViewsETCContainerMobile>
            </VideoItemContainer>
          </Link>
        )
      }}
    </NxtwatchContext.Consumer>
  )
}

export default TrendingVideoItem
