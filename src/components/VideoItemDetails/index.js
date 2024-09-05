import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import {withRouter} from 'react-router-dom'

import Header from '../Header'
import HomeSideBar from '../HomeSideBar'
import FailureDetails from '../FailureDetails'

import {
  VideoItemDetailsBgContainer,
  VideoItemDetailsContainer,
  VideoItemDetailsLoaderContainer,
  VideoPlayerContainer,
  TitleOfTheVideo,
  ViewsAndLikesContainer,
  Views,
  ViewsAndTimeContainer,
  Time,
  LikeAndSaveContainer,
  LikeContainer,
  LikePara,
  SaveContainer,
  ChannelLogoAndSubscribersContainer,
  ChannelLogo,
  HrLine,
  ChannelAndDescriptionContainer,
  ChannelName,
  SubScribersCount,
  DescriptionOfTheVideo,
  ReactVideoPlayerContainer,
  DescriptionOfTheVideoTwo,
  DisLikeContainer,
  DisLikePara,
  SavedButton,
  FailureDetailsContainer,
} from './styledComponents'

import './index.css'

import NxtwatchContext from '../NxtwatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    fetchingStatus: apiStatusConstants.initial,
    videoDetails: {},
    likedStatus: '',
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({fetchingStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {Authorization: `bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const jsonData = await response.json()
      const videoDetails = jsonData.video_details
      const data = {
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        description: videoDetails.description,
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
      }
      this.setState({
        fetchingStatus: apiStatusConstants.success,
        videoDetails: data,
      })
    } else {
      this.setState({fetchingStatus: apiStatusConstants.failure})
    }
  }

  renderFailureDetails = () => (
    <FailureDetailsContainer>
      <FailureDetails onReRender={this.getVideoItemDetails} />
    </FailureDetailsContainer>
  )

  renderLoadingDetails = isDarkThemeActivated => (
    <VideoItemDetailsLoaderContainer>
      <Loader
        data-testid="loader"
        type="ThreeDots"
        color={isDarkThemeActivated ? '#ffffff' : 'blue'}
        height="50"
        width="50"
      />
    </VideoItemDetailsLoaderContainer>
  )

  renderVideoItemDetails = () => {
    const {videoDetails, likedStatus, isSaved} = this.state

    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      description,
      channel,
    } = videoDetails
    const {profileImageUrl, name, subscriberCount} = channel
    const time = formatDistanceToNow(new Date(publishedAt))

    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDarkThemeActivated, onClickToSaveTheVideo} = value

          const onClickToSaveTheVideoItem = () => {
            this.setState({isSaved: !isSaved})
            onClickToSaveTheVideo(videoDetails)
          }

          return (
            <VideoPlayerContainer isDarkThemeActivated={isDarkThemeActivated}>
              <ReactVideoPlayerContainer>
                <ReactPlayer url={videoUrl} controls className="react-player" />
              </ReactVideoPlayerContainer>
              <TitleOfTheVideo isDarkThemeActivated={isDarkThemeActivated}>
                {title}
              </TitleOfTheVideo>
              <ViewsAndLikesContainer>
                <ViewsAndTimeContainer>
                  <Views isDarkThemeActivated={isDarkThemeActivated}>
                    {viewCount} views
                  </Views>
                  <BsDot
                    color={
                      isDarkThemeActivated === true ? '#94a3b8' : '#000000'
                    }
                    size={20}
                  />
                  <Time isDarkThemeActivated={isDarkThemeActivated}>
                    {time}
                  </Time>
                </ViewsAndTimeContainer>

                <LikeAndSaveContainer>
                  <LikeContainer
                    type="button"
                    onClick={this.onClickToLike}
                    likedStatus={likedStatus}
                  >
                    <BiLike size={20} />
                    <LikePara likedStatus={likedStatus}>Like</LikePara>
                  </LikeContainer>

                  <DisLikeContainer
                    type="button"
                    onClick={this.onClickToDisLike}
                    likedStatus={likedStatus}
                  >
                    <BiDislike size={20} />
                    <DisLikePara likedStatus={likedStatus}>Dislike</DisLikePara>
                  </DisLikeContainer>
                  <SaveContainer
                    type="button"
                    onClick={onClickToSaveTheVideoItem}
                    isSaved={isSaved}
                  >
                    <BiListPlus size={20} />
                    <SavedButton
                      isDarkThemeActivated={isDarkThemeActivated}
                      isSaved={isSaved}
                    >
                      {isSaved ? 'Saved' : 'Save'}
                    </SavedButton>
                  </SaveContainer>
                </LikeAndSaveContainer>
              </ViewsAndLikesContainer>
              <HrLine />

              <ChannelLogoAndSubscribersContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <ChannelAndDescriptionContainer>
                  <ChannelName isDarkThemeActivated={isDarkThemeActivated}>
                    {name}
                  </ChannelName>
                  <SubScribersCount isDarkThemeActivated={isDarkThemeActivated}>
                    {subscriberCount} subscribers
                  </SubScribersCount>
                  <DescriptionOfTheVideo
                    isDarkThemeActivated={isDarkThemeActivated}
                  >
                    {description}
                  </DescriptionOfTheVideo>
                </ChannelAndDescriptionContainer>
              </ChannelLogoAndSubscribersContainer>
              <DescriptionOfTheVideoTwo
                isDarkThemeActivated={isDarkThemeActivated}
              >
                {description}
              </DescriptionOfTheVideoTwo>
            </VideoPlayerContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }

  renderStateWiseDetails = () => {
    const {fetchingStatus} = this.state
    switch (fetchingStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItemDetails()
      case apiStatusConstants.inProgress:
        return this.renderLoadingDetails()
      case apiStatusConstants.failure:
        return this.renderFailureDetails()
      default:
        return null
    }
  }

  onClickToLike = () => {
    this.setState({likedStatus: 'liked'})
  }

  onClickToDisLike = () => {
    this.setState({likedStatus: 'disliked'})
  }

  render() {
    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDarkThemeActivated} = value
          return (
            <VideoItemDetailsBgContainer
              isDarkThemeActivated={isDarkThemeActivated}
              data-testid="videoItemDetails"
            >
              <Header />
              <VideoItemDetailsContainer>
                <HomeSideBar />
                {this.renderStateWiseDetails()}
              </VideoItemDetailsContainer>
            </VideoItemDetailsBgContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default withRouter(VideoItemDetails)
