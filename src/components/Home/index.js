import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoClose, IoSearchOutline} from 'react-icons/io5'

import Header from '../Header'
import HomeSideBar from '../HomeSideBar'
import VideoItem from '../VideoItem'
import FailureDetails from '../FailureDetails'

import NxtwatchContext from '../NxtwatchContext'

import {
  HomeBgContainer,
  HomeInterface,
  BannerBackground,
  BannerLogo,
  BannerPara,
  BannerButton,
  BannerOneSide,
  Close,
  SearchContainer,
  SearchInput,
  SearchIcon,
  HomeRightBar,
  Line,
  VideosListContainer,
  FailureDetailsContainer,
  FailureImg,
  NoSearchResultsHeading,
  NoSearchResultsDescription,
  RetryButton,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    isShowPrimeDetails: true,
    searchInput: '',
    videosList: [],
    fetchingState: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({fetchingState: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {Authorization: `bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updateData = data.videos.map(i => ({
        id: i.id,
        channel: i.channel,
        publishedAt: i.published_at,
        thumbnailUrl: i.thumbnail_url,
        title: i.title,
        viewCount: i.view_count,
      }))
      this.setState({
        videosList: updateData,
        fetchingState: apiStatusConstants.success,
      })
    } else {
      this.setState({fetchingState: apiStatusConstants.failure})
    }
  }

  onClickToGetSearchResults = () => {
    this.setState({fetchingState: 'loading'})
    this.getVideosDetails()
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickToClosePrimeDetails = () => {
    this.setState({isShowPrimeDetails: false})
  }

  renderPrimeDealsSection = () => {
    const {isShowPrimeDetails} = this.state

    if (isShowPrimeDetails === true) {
      return (
        <BannerBackground
          data-testid="banner"
          isShowPrimeDetails={isShowPrimeDetails}
        >
          <BannerOneSide>
            <BannerLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <BannerPara>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerPara>
            <BannerButton>GET IT NOW</BannerButton>
          </BannerOneSide>
          <Close
            type="button"
            data-testid="close"
            onClick={this.onClickToClosePrimeDetails}
          >
            <IoClose size={20} />
          </Close>
        </BannerBackground>
      )
    }
    return null
  }

  renderVideosLists = () => {
    const {videosList, searchInput} = this.state

    const filterItems =
      searchInput.length === 0
        ? videosList
        : videosList.filter(each =>
            each.title.toLowerCase().includes(searchInput.toLowerCase()),
          )

    if (filterItems.length === 0) {
      return this.renderNoSearchResultsFound()
    }
    return (
      <VideosListContainer>
        {filterItems.map(eachVideo => (
          <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </VideosListContainer>
    )
  }

  renderLoadingItem = isDarkThemeActivated => (
    <LoaderContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDarkThemeActivated ? '#ffffff' : 'blue'}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

  renderNoSearchResultsFound = isDarkThemeActivated => (
    <FailureDetailsContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoSearchResultsHeading isDarkThemeActivated={isDarkThemeActivated}>
        NO Search results found
      </NoSearchResultsHeading>
      <NoSearchResultsDescription isDarkThemeActivated={isDarkThemeActivated}>
        Try different key words or remove search filter
      </NoSearchResultsDescription>
      <RetryButton type="button" onClick={this.getAllVideos}>
        Retry
      </RetryButton>
    </FailureDetailsContainer>
  )

  renderFailureDetails = () => (
    <FailureDetails returnVideoDetails={this.getAllVideos} />
  )

  renderVideosResult = () => {
    const {fetchingState} = this.state

    switch (fetchingState) {
      case apiStatusConstants.success:
        return this.renderVideosLists()
      case apiStatusConstants.failure:
        return this.renderFailureDetails()
      case apiStatusConstants.inProgress:
        return this.renderLoadingItem()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDarkThemeActivated} = value

          return (
            <HomeBgContainer>
              <Header />
              <HomeInterface isDarkThemeActivated={isDarkThemeActivated}>
                <HomeSideBar />
                <HomeRightBar>
                  {this.renderPrimeDealsSection()}
                  <SearchContainer>
                    <SearchInput
                      type="Search"
                      placeholder="Search"
                      onChange={this.onChangeInput}
                      data-testid="searchButton"
                    />
                    <Line />
                    <SearchIcon>
                      <IoSearchOutline
                        size={20}
                        onClick={this.onClickToGetSearchResults}
                      />
                    </SearchIcon>
                  </SearchContainer>
                  {this.renderVideosResult()}
                </HomeRightBar>
              </HomeInterface>
            </HomeBgContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default Home
