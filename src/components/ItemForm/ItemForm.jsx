import { useState } from 'react';

const ItemForm = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
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
                <label htmlFor="name-input">Name</label>
                <input
                required
                type="text"
                name="name"
                id="name-input"
                value={formData.name}
                onChange={handleChange}
                />
                <label htmlFor="category-input">Category</label>
                <select
                required
                name="category"
                id="category-input"
                value={formData.category}
                onChange={handleChange}
                >
                <option value="Gear">Gear</option>
                <option value="Treasure">Treasure</option>
                <option value="Potions">Potions</option>
                <option value="Books">Books</option>
                </select>
                <label htmlFor="isMagical-input">Is it Magical?</label>
                <input
                type="checkbox"
                name="isMagical"
                id="isMagical-input"
                value={formData.isMagical}
                onChange={handleChange}
                />
                <label htmlFor="description-input">Description</label>
                <input
                required
                type="text"
                name="description"
                id="description-input"
                value={formData.description}
                onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
      );
};

export default ItemForm;