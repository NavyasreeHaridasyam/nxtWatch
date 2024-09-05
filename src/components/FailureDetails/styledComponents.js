import styled from 'styled-components'

export const FailureDetailsContainer = styled.div`
  display: flex;
  height: 70vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  margin-bottom: 2%;
`
export const FailureImg = styled.img`
  height: 40vh;
  @media screen and (max-width: 576px) {
    height: 20vh;
  }
`

export const FailureHeading = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#e2e8f0' : '#1e293b'};
`
export const FailureDescription = styled.p`
  font-size: 15px;
  text-align: center;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#e2e8f0' : '#1e293b'};
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
