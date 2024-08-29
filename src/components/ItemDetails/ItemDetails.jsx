import { useParams } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import * as itemService from '../../services/itemService';
import './ItemDetails.css';

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
            <div id="item-details">
            <header>
                <h2 id="item-title">{item.name}</h2>
                <h3 id="item-type">{item.category}</h3>
            </header>
            <section>
            <p id="item-description">{item.description}</p>
            <p id="item-magical">
                {item.isMagical ? "This item is magical!" : "This item isn't magical..."}
            </p>
            <div id="edit-del-buttons">
            {item.owner._id === user._id && (
                <>
                <Link id="edit-button" to={`/items/${itemId}/edit`}>Edit</Link>
                <button id="delete-button" onClick={() => props.handleDeleteItem(itemId)}>Delete</button>
                </>
            )}
            </div>

            </section>
            </div>
        </main> 
    )
  };
  
  export default ItemDetails;