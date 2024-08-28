import { AuthedUserContext } from '../../App';
import { useContext } from 'react';

const Dashboard = (props) => {

  const user = useContext(AuthedUserContext);
 
  const userList = props.items.filter((item) => {
    return item.owner._id === user._id
  })

  const latestItems = userList.slice(-3)

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
        <ul>
      <h2>
        The last items you made were: 
        </h2>
        {latestItems.map((item) => {
          return (
            <li key={item._id}>{item.name}</li>
          )
        })}

        </ul>
    </main>
  );
};

export default Dashboard;
