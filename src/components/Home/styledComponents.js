import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  background-color: #f8fafc;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 576px) {
    width: 99.9%;
    height: 81vh;
    padding: 0px;
  }
`

export const HomeInterface = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${props =>
    props.isDarkThemeActivated ? '#181818' : '#ffffff'};
`

export const BannerBackground = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 200px;
  width: 100%;
  display: ${props => (props.isShowPrimeDetails === true ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    width: 99.7%;
    height: 200px;
    margin-right: 0px;
  }
`

export const BannerLogo = styled.img`
  height: 30px;
  width: 130px;
`

export const BannerPara = styled.p`
  font-family: Roboto;
  color: #1e293b;
`

export const BannerButton = styled.button`
  font-family: Roboto;
  color: #1e293b;
  border: 1px solid #1e293b;
  border-radius: 2px;
  padding: 10px;
  width: 130px;
`

export const BannerOneSide = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

export const Close = styled.button`
  color: #475569;
  margin: 30px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`

export const SearchContainer = styled.div`
  background-color: transparent;
  border: 0.5px solid #909090;
  border-radius: 3px;
  width: 400px;
  display: flex;
  align-items: center;
  margin: 10px;
  height: 5vh;
`

export const SearchInput = styled.input`
  color: #424242;
  width: 350px;
  padding: 4px;
  border: none;
  outline: none;
  background-color: transparent;
`

export const SearchIcon = styled.h1`
  color: #383838;
  width: 50px;
  height: 30px;
  margin-top: 0px;
  margin-left: 20px;
`

export const HomeRightBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-size: cover;
  overflow-y: scroll;
`

export const Line = styled.hr`
  height: 30px;
`

export const VideosListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`

export const FailureDetailsContainer = styled.div`
  display: flex;
  height: 70vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FailureImg = styled.img`
  height: 40vh;
  @media screen and (max-width: 576px) {
    height: 20vh;
  }
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
export const NoSearchResultsHeading = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#e2e8f0' : '#1e293b'};
`
export const NoSearchResultsDescription = styled.p`
  font-size: 15px;
  text-align: center;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#e2e8f0' : '#1e293b'};
`

export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
