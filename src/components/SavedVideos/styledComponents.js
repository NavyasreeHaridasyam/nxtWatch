import styled from 'styled-components'

export const SavedVideosBgContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props =>
    props.isDarkThemeActivated === true ? ' #0f0f0f' : '#f9f9f9 '};
`
export const SavedVideosContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
`
export const NoVideosImg = styled.img`
  height: 50vh;
  @media screen and (max-width: 576px) {
    height: 30vh;
  }
`
export const NovideosContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NoSavedHeading = styled.h1`
  font-size: 25px;
  margin-top: 30px;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#f9f9f9 ' : ' #0f0f0f'};
`

export const NoSavedDescription = styled.p`
  font-size: 16px;
  color: #64748b;
  font-weight: 600;
  margin-top: 0px;
`
export const SavedVideoItemsContainer = styled.ul`
  padding-left: 0px;
  width: 99%;
  height: 85vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const SavedCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-size: cover;
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
export const SavedHeading = styled.h1`
  font-size: 27px;
  margin-left: 2%;
  padding-left: 10px;
  width: 100%;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#ffffff' : '#000000'};
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`

export const Another = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`
