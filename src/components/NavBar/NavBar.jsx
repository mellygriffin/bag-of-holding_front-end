import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import './NavBar.module.css';

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);
  return (
    <>
      {user ? (
        <nav>
          <ul>
              <li><Link to="/dashboard">Home </Link> </li>         
              <li><Link to="/items">Inventory </Link></li>          
              <li><Link to="/items/new">Add Item </Link></li>
              <li><Link to="" onClick={handleSignout}>
                Sign Out
              </Link>
              </li>
              </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li>
              <Link to="/signin">Sign In </Link>
            </li>
            <li>
              <Link to="/signup">Sign Up </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
export default NavBar;
