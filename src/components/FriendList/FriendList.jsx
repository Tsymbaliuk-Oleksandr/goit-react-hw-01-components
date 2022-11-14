import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css'
import { FriendListItem } from '../FriendList/FriendListItem';

export const FriendList = ({
  friends,
}) => {
  return (
<ul className={css.friendList}>

  {friends.map(({id, isOnline, avatar, name}) => {
    return <FriendListItem key={id} isOnline={isOnline} avatar={avatar} name={name}/>
  })}
</ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }))
};
