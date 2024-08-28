import ItemList from "../ItemList/ItemList";



const Landing = (props) => {
  
  return (
    <main>
      <h1>Welcome!</h1>
        {props.items.map((item) => (
          <p key={item._id}>{item.title}</p>
        ))}
    </main>
  );
};

export default Landing;
