import styled from 'styled-components'

export const TrendingBgContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props =>
    props.isDarkThemeActivated === true ? ' #0f0f0f' : '#f9f9f9 '};
`

export const TrendingContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
`

export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const TrendingVideos = styled.ul`
  padding-left: 0px;
  height: 86vh;
  width: 100%;
  overflow-y: auto;
  padding-top: 0px;
  display: flex;
  flex-direction: column;
`
export const TrendingCard = styled.div`
  display: flex;
  height: 15vh;
  align-items: center;
  background-color: ${props =>
    props.isDarkThemeActivated === true ? '#000000' : '#ebebeb'};
  width: 100%;
  padding-left: 4%;
  @media screen and (max-width: 576px) {
    height: 8vh;
  }
`
export const TrendingVideosBgcontainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
`
export const IconContainer = styled.div`
  background-color: ${props =>
    props.isDarkThemeActivated === true ? '#000000' : '#f1f5f9'};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 576px) {
    height: 40px;
    width: 40px;
  }
`
export const TrendingHeading = styled.h1`
  font-size: 27px;
  margin-left: 2%;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#ffffff' : '#000000'};
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`
export const FailureContainer = styled.div`
  height: 90vh;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
`

export const TrendingVideosSideView = styled.div`
  display: flex;
  flex-direction: column;
`

export const UnorderContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`
