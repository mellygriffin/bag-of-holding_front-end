import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as itemService from '../../services/itemService';
import './ItemForm.css'

const ItemForm = (props) => {
  const { itemId } = useParams();

    const [formData, setFormData] = useState({
        name: '',
        category: 'Gear',
        isMagical: false,
        description: '',
    });

    useEffect(() => {
      const fetchItem = async () => {
        const itemData = await itemService.show(itemId);
        setFormData(itemData);
      };
      if (itemId) fetchItem();
    }, [itemId]);

    const handleChange = (evt) => {
      if (evt.target.name === "isMagical") {
        setFormData({ ...formData, [evt.target.name]: evt.target.value === "true" ? false : true });
        console.log(evt.target.value)
      } else {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
      }
      };
    
      const handleSubmit = (evt) => {
        evt.preventDefault();
        if (itemId) {
          props.handleUpdateItem(itemId, formData);
        } else {
          props.handleAddItem(formData);
        }
      };

      return (
        <main>
            <form className="wholeform" onSubmit={handleSubmit}>
              <div id="newform">
              <h1 id="page-title">{itemId ? 'Edit Item' : 'New Item'}</h1>
                <label htmlFor="name">Name</label>
                <input
                required
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                />
                <p></p>
                <label htmlFor="category">Category</label>
                <select
                required
                name="category"
                id="category"
                value={formData.category}
                onChange={handleChange}
                >
                <option value="Gear">Gear</option>
                <option value="Treasure">Treasure</option>
                <option value="Potions">Potions</option>
                <option value="Books">Books</option>
                </select>
                <p></p>
                <label id="magical" htmlFor="isMagical">Is it Magical?</label>
                <p></p>
                <input
                type="checkbox"
                name="isMagical"
                id="isMagical"
                value={formData.isMagical}
                checked={formData.isMagical ? true : false}
                onChange={handleChange}
                />
                <p></p>
                <label htmlFor="description">Description</label>
                <textarea
                required
                type="text"
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                // style={{ width: '200px', height: '100px' }}
                />
                <p></p>
                <button type="submit">Submit</button>
                </div>
            </form>
        </main>
      );
};

export default ItemForm;