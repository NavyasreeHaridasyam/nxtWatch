import styled from 'styled-components'

export const HomeVideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style-type: none;
  width: 100%;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    width: 100%;
    padding: 4%;
    margin-right: 0px;
    padding-bottom: 1%;
  }
`
export const ThumbnailImg = styled.img`
  height: 150px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    height: 100%;
  }
  @media screen and (min-width: 577px) and (max-width: 766px) {
    height: 125px;
  }
`
export const SubscribeLogoAndDescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`
export const ChannelLogo = styled.img`
  height: 30px;
  margin-top: 0px;
`
export const TitleOfTheVideo = styled.p`
  font-size: 12px;
  margin-top: 0px;
  font-weight: 600;
  margin-left: 10px;
  margin-bottom: 6px;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#f8fafc' : '#000000'};
`
export const ChannelName = styled.p`
  font-size: 14px;
  margin-top: 0px;
  font-weight: 600;
  margin-left: 10px;
  margin-bottom: 0px;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#94a3b8' : '#000000'};
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`
export const DescriptionViewsAndTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ViewsAndTimeContainer = styled.div`
  display: flex;
  margin-top: 0px;
`
export const Views = styled.p`
  color: #424242;
  font-size: 11px;
  font-weight: 500;
  margin-top: 5px;
  margin-left: 10px;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#94a3b8' : '#000000'};
  @media screen and (max-width: 576px) {
    margin-top: 0px;
    font-size: 12px;
    margin-left: 0px;
  }
`

export const TimeDistance = styled.p`
  color: #424242;
  font-size: 11px;
  font-weight: 500;
  margin-top: 5px;
  list-style-type: disc;
  margin-left: 3px;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#94a3b8' : '#000000'};
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 576px) {
    margin-top: 0px;
    margin-left: 2px;
    font-size: 12px;
  }
`
export const ChannelNameViewsAndTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 577px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const DotOne = styled.div`
  font-size: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 577px) {
    display: none;
  }
`
export const DotTwo = styled.div`
  font-size: 20px;
  display: flex;
  height: 20px;
  align-items: center;
  @media screen and (min-width: 577px) {
    margin-top: 3px;
  }
`
