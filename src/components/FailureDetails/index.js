import {
  FailureDetailsContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponents'

import NxtwatchContext from '../NxtwatchContext'

const FailureDetails = props => {
  const {returnVideoDetails} = props
  return (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDarkThemeActivated} = value
        const failureImgUrl = isDarkThemeActivated
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const onReRenderDetails = () => {
          returnVideoDetails()
        }
        return (
          <FailureDetailsContainer>
            <FailureImg src={failureImgUrl} alt="failure view" />
            <FailureHeading isDarkThemeActivated={isDarkThemeActivated}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription isDarkThemeActivated={isDarkThemeActivated}>
              We are having some trouble to complete your request. <br /> Please
              try again.
            </FailureDescription>
            <RetryButton type="button" onClick={onReRenderDetails}>
              Retry
            </RetryButton>
          </FailureDetailsContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )
}

export default FailureDetails
