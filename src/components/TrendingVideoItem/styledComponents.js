import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  list-style-type: none;
  padding: 2%;
  cursor: pointer;
  display: flex;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`
export const ThumbnailItem = styled.img`
  height: 200px;
`
export const DescriptionAndViewsETCContainerDeskTop = styled.div`
  padding: 2%;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const Title = styled.h1`
  font-size: 16px;
  width: 80vw;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#fffff1' : '#000000'};
  margin-bottom: 5px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
    margin-bottom: 0px;
  }
`
export const ChannelName = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 0px;
  margin-top: 0px;
`

export const Views = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #64748b;
  @media screen and (max-width: 576px) {
    margin-top: 2px;
  }
`
export const ViewsAndTimeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
`
export const DescriptionAndViewsETCContainerMobile = styled.div`
  display: flex;
  padding-top: 12px;
  align-items: center;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const ChannelImg = styled.img`
  height: 30px;
  margin-right: 20px;
`
export const ChannelAndViewsAndTimeContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
