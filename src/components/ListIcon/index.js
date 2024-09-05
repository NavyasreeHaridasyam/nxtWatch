import {Link} from 'react-router-dom'
import {ListItem, Icon, IconText} from './styledComponents'
import NxtwatchContext from '../NxtwatchContext'

const ListIcon = props => {
  const {details, isActive} = props
  const {id, displayText, icon, path} = details

  return (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDarkThemeActivated, onChangeActiveOption} = value

        const onClickIcon = () => {
          onChangeActiveOption(id)
        }

        return (
          <Link to={path}>
            <ListItem onClick={onClickIcon}>
              <Icon
                isDarkThemeActivated={isDarkThemeActivated}
                iconColor={isActive}
              >
                {icon}
              </Icon>
              <IconText
                isDarkThemeActivated={isDarkThemeActivated}
                textColor={isActive}
              >
                {displayText}
              </IconText>
            </ListItem>
          </Link>
        )
      }}
    </NxtwatchContext.Consumer>
  )
}

export default ListIcon
