import { Link } from 'react-router-dom';

const CategoryList = (props) => {


    return (
        <div>

            <button id="Gear">Gear</button>
            <Link to="/items/Books"><button id="Books">Books</button></Link>
            <button id="Treasure">Treasure</button>
            <button id="Potions">Potions</button>

        </div>
    );
};

export default CategoryList;
