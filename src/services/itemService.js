const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/items`;

//Index Route - Items list
const index = async () => {
    try {
      const res = await fetch(BASE_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  //Show Route - Items Details
  const show = async (itemId) => {
    try {
        const res = await fetch(`${BASE_URL}/${itemId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`},
        });
        return res.json();
    } catch(error) {
        console.log(error);
    }
  };

  //Create New Item Route 
  const create = async (itemFormData) => {
    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  //Delete Item Route
  const deleteItem = async (itemId) => {
    try {
      const res = await fetch(`${BASE_URL}/${itemId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  export { 
    index,
    show,
    create,
    deleteItem
   };