import { useParams } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import * as itemService from '../../services/itemService';

const ItemDetails = (props) => {
    
    const { itemId } = useParams();

    const [item, setItem] = useState(null);

    const user = useContext(AuthedUserContext);

    useEffect(() => {
        const fetchItem = async () => {
            const itemData = await itemService.show(itemId);
            setItem(itemData);
        };
        fetchItem();
    }, [itemId]);

    
    if (!item) return <main>Loading...</main>;
    return (
        <main>
            <header>
                <h2>{item.name}</h2>
                <h3>{item.category}</h3>
            </header>
            <section>
            <p>{item.description}</p>
            <p>
                {item.isMagical ? "This item is magical!" : "This item isn't magical..."}
            </p>

            {item.owner._id === user._id && (
                <>
                <Link to={`/items/${itemId}/edit`}>Edit</Link>
                <button onClick={() => props.handleDeleteItem(itemId)}>Delete</button>
                </>
            )}

            </section>
        </main> 
    )
  };
  
  export default ItemDetails;