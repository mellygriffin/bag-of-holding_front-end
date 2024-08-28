const Landing = (props) => {

  const landingItems = props.items.map(item => <li>{item.name}</li>)
  
  return (
    <main>
      <h1>Bag of Holding</h1>
      <ul id="landing-list">
      {landingItems.slice(-3)}
      </ul>
    </main>
  );
};

export default Landing;
