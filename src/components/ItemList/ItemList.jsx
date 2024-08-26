import { Link } from 'react-router-dom';

const ItemList = (props) => {
    return (
    <main>
        {props.items.map((item) => (
            <Link key={item._id} to={`/items/${item._id}`}>
                <article>
                    <header>
                        <h2>{item.name}</h2>
                        <p>
                            Owned by {item.owner.username}
                        </p>
                    </header>
                    <p>{item.description}</p>
                </article>
            
            </Link>
        ))}
    </main>
    );
  };
  
  export default ItemList;
  