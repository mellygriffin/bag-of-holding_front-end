import { Link } from 'react-router-dom';

const CategoryList = (props) => {


    const handleClick = (event) => {
        props.handleCategory(event.target.id)
    }

    return (
        <div>

            <button id="Gear" onClick={handleClick}>Gear</button>
            <button id="Books" onClick={handleClick}>Books</button>
            <button id="Treasure" onClick={handleClick}>Treasure</button>
            <button id="Potions" onClick={handleClick}>Potions</button>

        </div>
    );
};

export default CategoryList;
