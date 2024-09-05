import React from 'react'

const NxtwatchContext = React.createContext({
  isDarkThemeActivated: false,
  onClickToChangeTheme: () => {},
  activeOption: 'HOME',
  onChangeActiveOption: () => {},
  onClickToSaveTheVideo: () => {},
  savedVideos: [],
})

export default NxtwatchContext
