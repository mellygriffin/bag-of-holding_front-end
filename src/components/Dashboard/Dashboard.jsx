import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import './Dashboard.css';

const Dashboard = (props) => {

  const user = useContext(AuthedUserContext);
 
  const userList = props.items.filter((item) => {
    return item.owner._id === user._id
  })

  const latestItems = userList.slice(-3)

  return (
    <main>
      <h1 id="page-title">Welcome, {user.username}</h1>
      <h2 id="dashboard-desc">
        The last items you created were: 
        </h2>
        <ul id="dashboard-list">
        <p></p>
        {latestItems.map((item) => {
          return (
            <li id="item-name" key={item._id}>{item.name}<p id="item-desc">{item.description}</p></li>
          )
        })}

        </ul>
    </main>
  );
};

export default Dashboard;
