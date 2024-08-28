import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);
  return (
    <>
      {user ? (
        <nav>
          
              <Link to="/">Home </Link>           
              <Link to="/items">Inventory </Link>          
              <Link to="/items/new">Add Item </Link>
              <Link to="" onClick={handleSignout}>
                Sign Out
              </Link>
          
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
