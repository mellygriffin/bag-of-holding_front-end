import { Link } from 'react-router-dom';
import './Categories.css';

const CategoryList = (props) => {


    return (
        <main>
        <h2 id="page-title">Select which category to explore:</h2>
        <div id="category-buttons">

            <Link to="/items/Gear"><button id="Gear">Gear</button></Link>
            <Link to="/items/Books"><button id="Books">Books</button></Link>
            <Link to="/items/Treasure"><button id="Treasure">Treasure</button></Link>
            <Link to="/items/Potions"><button id="Potions">Potions</button></Link>

        </div>
        </main>
    );
};

export default CategoryList;
