import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtwatchContext from './components/NxtwatchContext'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {isDarkThemeActivated: false, activeOption: 'HOME', savedVideos: []}

  onClickToChangeTheme = () => {
    const {isDarkThemeActivated} = this.state
    this.setState({isDarkThemeActivated: !isDarkThemeActivated})
  }

  onChangeActiveOption = (id, path) => {
    this.setState({activeOption: id})
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to={path} />
    }
    return <Redirect to="/login" />
  }

  onClickToSaveTheVideo = videoDetails => {
    const {id} = videoDetails
    const {savedVideos} = this.state
    const isAlreadySaved = savedVideos.find(i => i.id === id)
    if (isAlreadySaved === true) {
      this.setState(previousState => ({
        savedVideos: previousState.savedVideos.filter(
          savedVideo => savedVideo.id !== id,
        ),
      }))
    } else {
      this.setState(previousState => ({
        savedVideos: [...previousState.savedVideos, videoDetails],
      }))
    }
  }

  render() {
    const {isDarkThemeActivated, activeOption, savedVideos} = this.state

    return (
      <NxtwatchContext.Provider
        value={{
          isDarkThemeActivated,
          onClickToChangeTheme: this.onClickToChangeTheme,
          activeOption,
          onChangeActiveOption: this.onChangeActiveOption,
          savedVideos,
          onClickToSaveTheVideo: this.onClickToSaveTheVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtwatchContext.Provider>
    )
  }
}

export default App
