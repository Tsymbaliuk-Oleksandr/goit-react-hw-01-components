import PropTypes from 'prop-types';
import css from '../FriendList/FriendListItem.module.css'
import clsx from 'clsx';

export const FriendListItem = ({
  isOnline,
  avatar,
  name,
}) => {
  return <li className={css.item}>
  <span className={clsx(css.status, {
        [css.online]: isOnline,
        [css.offline]: !isOnline,
      })}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}
