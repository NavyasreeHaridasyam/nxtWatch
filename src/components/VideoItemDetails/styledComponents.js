import styled from 'styled-components'

export const VideoItemDetailsBgContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props =>
    props.isDarkThemeActivated === true ? '#0f0f0f' : '#f9f9f9'};
`

export const VideoItemDetailsContainer = styled.div`
  height: 90vh;
  display: flex;
`
export const VideoItemDetailsLoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const VideoPlayerContainer = styled.div`
  width: 58%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  height: 90vh;
  overflow-y: auto;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
  ::-webkit-scrollbar {
    width: 0;
  }
`
export const ReactVideoPlayerContainer = styled.div`
  height: 75vh;
  width: 100%;
  @media screen and (max-width: 576px) {
    height: 25vh;
  }
`

export const TitleOfTheVideo = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#e2e8f0' : '#1e293b'};
  @media screen and (max-width: 576px) {
    margin-bottom: 0px;
  }
`
export const ViewsAndLikesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 2%;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const Views = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#94a3b8' : '#000000'};
`
export const ViewsAndTimeContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 576px) {
    margin-top: 0px;
    margin-bottom: 20px;
    margin-left: 10px;
  }
`

export const Time = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#94a3b8' : '#000000'};
`
export const LikeAndSaveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 40%;
  @media screen and (max-width: 576px) {
    justify-content: space-evenly;
    width: 100%;
  }
`
export const LikeContainer = styled.button`
  display: flex;
  align-items: center;
  margin-left: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-right: 0px;
  color: ${props => (props.likedStatus === 'liked' ? '#2563eb' : '#64748b')};
  @media screen and (max-width: 576px) {
    margin-left: 0px;
    padding: 0px;
    margin-right: 13px;
  }
`

export const DisLikeContainer = styled.button`
  display: flex;
  align-items: center;
  margin-left: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-right: 0px;
  color: ${props => (props.likedStatus === 'disliked' ? '#2563eb' : '#64748b')};
  @media screen and (max-width: 576px) {
    margin-left: 0px;
    padding: 0px;
    margin-right: 13px;
  }
`

export const LikePara = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin-left: 7px;
  color: ${props => (props.likedStatus === 'liked' ? '#2563eb' : '#64748b')};
`
export const DisLikePara = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin-left: 7px;
  color: ${props => (props.likedStatus === 'disliked' ? '#2563eb' : '#64748b')};
`
export const SavedButton = styled.button`
  font-size: 12px;
  font-weight: 600;
  margin-left: 7px;
  color: ${props => (props.isSaved === true ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border: none;
`

export const SaveContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => (props.isSaved === true ? '#2563eb' : '#64748b')};
`

export const ChannelLogoAndSubscribersContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`
export const ChannelLogo = styled.img`
  height: 35px;
`
export const HrLine = styled.hr`
  width: 100%;
  margin-left: 0px;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#94a3b8' : '#1e293b'};
`
export const ChannelAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: 0px;
`
export const ChannelName = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 0px;
  margin-top: 0px;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#e2e8f0' : '#1e293b'};
`

export const SubScribersCount = styled.p`
  font-size: 11px;
  font-weight: 500;
  margin-top: 7px;
  color: #94a3b8;
`
export const DescriptionOfTheVideo = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#e2e8f0' : '#1e293b'};
  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const DescriptionOfTheVideoTwo = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin-left: 10px;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#e2e8f0' : '#1e293b'};
  @media screen and (min-width: 577px) {
    display: none;
  }
`

export const FailureDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10%;
`
export const FailureImg = styled.img`
  height: 40vh;
  @media screen and (max-width: 576px) {
    height: 20vh;
  }
`

export const FailureHeading = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#e2e8f0' : '#1e293b'};
`
export const FailureDescription = styled.p`
  font-size: 15px;
  text-align: center;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#e2e8f0' : '#1e293b'};
`
export const RetryButton = styled.button`
  color: white;
  background-color: blue;
  border: 0px;
  padding: 8px;
  width: 100px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 20px;
`
