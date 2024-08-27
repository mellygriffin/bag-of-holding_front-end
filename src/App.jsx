import { useState, createContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import * as authService from '../src/services/authService';
import ItemList from './components/ItemList/ItemList';
import * as itemService from './services/itemService';
import ItemDetails from './components/ItemDetails/ItemDetails';
import CategoryList from './components/CategoriesList/CategoriesList';

export const AuthedUserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(authService.getUser());

  const [items, setItems] = useState([]);

  const [category, setCategory] = useState(null);


  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  const handleCategory = (newCategory) => {
    setCategory(newCategory)
  };


  useEffect(() => {
    const fetchAllItems = async () => {
      const itemsData = await itemService.index();
      setItems(itemsData);
    };
    if (user) fetchAllItems();
  }, [user]);

  return (
    <>
      <AuthedUserContext.Provider value={user}>
        <NavBar user={user} handleSignout={handleSignout} />
        <Routes>
          {user ? (
            // Protected Routes
            <>
              <Route path="/" element={<Dashboard user={user} />} />
              
                <Route path="/items/:category" element={<ItemList items={items} />} />
                
                <Route path="/items" element={<CategoryList handleCategory={handleCategory} />} />
              
              <Route path="/items/:category/:itemId" element={<ItemDetails />} />
              <Route path="/items/new" element={<h1>New Item</h1>} />
            </>
          ) : (
            // Public Routes
            <Route path="/" element={<Landing />} />
          )}
          <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          <Route path="/signin" element={<SigninForm setUser={setUser} />} />
        </Routes>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;
