import { Link } from 'react-router-dom';

const ItemList = (props) => {
    
    if(!props.items.length) return(<h1>Nothing here.</h1>)

    const categoryList = props.items.filter(item => {
       return props.category === item.category
    })
    console.log(categoryList)

    return (
    <main>

        {categoryList.map((item) => (
            <Link key={item._id} to={`/items/${item._id}`}>
                <article>
                    <header>
                        <h2>{item.name}</h2>
                        <p>
                            Owned by {item.owner.username}
                        </p>
                    </header>
                </article>
            </Link>
        ))}
    </main>
    );
  };
  
  export default ItemList;
  