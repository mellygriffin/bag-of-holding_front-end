import { Link, useParams } from 'react-router-dom';
import './ItemList.css';



const ItemList = (props) => {

    const { category } = useParams();
    if (!category) return (<h1>Loading...</h1>)

    const categoryList = props.items.filter(item => {
        return category === item.category
    })
    console.log(categoryList)

    return (
        <main>
            <h1 id="page-title">Inventory</h1>
            <p id="inventory-desc">Select which item you'd like to see.</p>
            <div id="inventory-list">
                {categoryList.map((item) => (
                    <Link key={item._id} to={`/items/${category}/${item._id}`}>
                        <article id="item-box">
                            <header>
                                <h2 id="item-name">{item.name}</h2>
                                <p id="item-owner">
                                    Owned by {item.owner.username}
                                </p>
                            </header>
                        </article>
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default ItemList;
