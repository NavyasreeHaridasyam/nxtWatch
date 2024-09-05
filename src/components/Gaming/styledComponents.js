import styled from 'styled-components'

export const GamingBgContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props =>
    props.isDarkThemeActivated ? '#0f0f0f' : '#f9f9f9'};
`
export const GamingContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
`
export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const FailureContainer = styled.div`
  height: 90vh;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const GamingItems = styled.div`
  padding: 2%;
  width: 100%;
  flex-wrap: wrap;
  height: 90vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    justify-content: space-around;
    padding-top: 4%;
  }
`
export const Thumbnail = styled.img`
  height: 36vh;
  @media screen and (max-width: 576px) {
    height: 20vh;
  }
`

export const GamingListItem = styled.li`
  list-style-type: none;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
`
export const Title = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 0px;
`

export const ViewCount = styled.p`
  color: #64748b;
  font-size: 11px;
  font-weight: 500;
  margin-top: 5px;
`
export const GamingVideosBgContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  width: 82%;
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
