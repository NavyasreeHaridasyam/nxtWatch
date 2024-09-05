import styled from 'styled-components'

export const NotFoundBgContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props =>
    props.isDarkThemeActivated === true ? ' #0f0f0f' : '#f9f9f9 '};
`
export const NotFoundContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
`

export const NotFoundContent = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 576px) {
    justify-content: flex-start;
    padding: 6%;
  }
`

export const NotFoundImg = styled.img`
  height: 50vh;
  @media screen and (max-width: 576px) {
    height: 20vh;
  }
`

export const NotFoundHeading = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#ffffff ' : '#0f0f0f'};
`
export const NotFoundDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-top: 0px;
  color: #64748b;
`
