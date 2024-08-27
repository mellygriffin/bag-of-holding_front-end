import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as itemService from '../../services/itemService';

const ItemDetails = (props) => {
    
    const { itemId } = useParams();

    const [item, setItem] = useState(null);

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
                <h3>{item.category.toUpperCase()}</h3>
            </header>
            <section>
            <p>{item.description}</p>
            <p>
                {item.isMagical ? "This item is magical!" : "This item isn't magical..."}
            </p>

            </section>
        </main> 
    )
  };
  
  export default ItemDetails;