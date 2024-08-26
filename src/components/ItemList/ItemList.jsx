import { Link, useParams } from 'react-router-dom';


const ItemList = (props) => {
    
    const {category} = useParams();
    if(!category) return(<h1>Loading...</h1>)

    const categoryList = props.items.filter(item => {
       return category === item.category
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
  