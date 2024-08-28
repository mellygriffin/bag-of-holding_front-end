const Landing = (props) => {
  
  return (
    <main>
      <h1>Bag of Holding</h1>
      <ul>
      {props.items.map(item => <li>{item.name}</li>)}
      </ul>
    </main>
  );
};

export default Landing;
