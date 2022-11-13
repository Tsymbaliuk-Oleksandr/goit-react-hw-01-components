import user from '../data/user.json'; // виконуємо імпорт згідно д/з, перше завдання
import data from '../data/data.json'; // виконуємо імпорт згідно д/з, друге завдання
import friends from '../data/friends.json'; // виконуємо імпорт згідно д/з, третє завдання
import transactions from '../data/transactions.json';
// Імпортуємо (підключаємо) файли Profile, Statistics, FriendList, FriendListItem
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import {TransactionHistory} from './TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <div
      style={{
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* React homework template */}
      {/* Підключаємо файл "Profile" з першого завдання д/з */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* Підключаємо файл з другого завдання д/з */}
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      {/* Підключаємо файл з третього завдання д/з */}
      <FriendList friends={friends} />
       {/* Підключаємо файл з четвертого завдання д/з */}
      <TransactionHistory items={transactions} />
    </div>
  );
};