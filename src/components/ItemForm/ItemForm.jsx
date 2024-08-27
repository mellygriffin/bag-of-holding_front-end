import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemForm = (props) => {
  const { itemId } = useParams();

    const [formData, setFormData] = useState({
        name: '',
        category: 'Gear',
        isMagical: false,
        description: '',
    });

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
      };
    
      const handleSubmit = (evt) => {
        evt.preventDefault();
        props.handleAddItem(formData);
      };

      return (
        <main>
            <form onSubmit={handleSubmit}>
              <h1>{itemId ? 'Edit Item' : 'New Item'}</h1>
                <label htmlFor="name">Name</label>
                <input
                required
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                />
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
                <label htmlFor="isMagical">Is it Magical?</label>
                <input
                type="checkbox"
                name="isMagical"
                id="isMagical"
                value={formData.isMagical}
                onChange={handleChange}
                />
                <label htmlFor="description">Description</label>
                <input
                required
                type="text"
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
      );
};

export default ItemForm;