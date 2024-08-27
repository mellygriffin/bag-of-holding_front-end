import { Link } from 'react-router-dom';

const CategoryList = (props) => {


    return (
        <div>

            <Link to="/items/Gear"><button id="Gear">Gear</button></Link>
            <Link to="/items/Books"><button id="Books">Books</button></Link>
            <Link to="/items/Treasure"><button id="Treasure">Treasure</button></Link>
            <Link to="/items/Potions"><button id="Potions">Potions</button></Link>

        </div>
    );
};

export default CategoryList;
