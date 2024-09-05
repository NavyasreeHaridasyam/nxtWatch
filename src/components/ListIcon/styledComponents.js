import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  @media screen and (min-width: 576px and max-width:756px) {
    display: none;
  }
`

export const Icon = styled.h1`
  color: ${props =>
    props.isDarkThemeActivated === true ? '#f1f5f9' : '#383838'};

  color: ${props => (props.iconColor === true ? '#ff0b37' : '')};
`

export const IconText = styled.p`
  font-family: Roboto;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#f1f5f9' : '#383838'};
  color: ${props => (props.textColor === true ? '#00306e' : '')};
  font-weight: bold;
  padding-top: 10px;
  padding-left: 20px;
  text-decoration: none;
`
