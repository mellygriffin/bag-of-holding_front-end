import './Landing.css';

const Landing = (props) => {

  const landingItems = props.items.map(item => <li id="item-name">{item.name}<p id="item-desc">{item.description}</p></li>)
  
  return (
    <main>
      <h1 id="page-title">Bag of Holding</h1>
      <p id="landing-desc">Welcome to your personal (and neverending) storage for loot, weaponry and cursed objects, alike! Enjoy an online, easy-to-view organization tool for all your adventuring needs without the hassle of parchment and ink.</p> 
      <p id="disclaimer">*Bag of Holding is not responsible for any living beings left inside containers that may or may not be able to survive in an environment without proper air flow.</p>
      <p id="landing-desc">See below the most recent treasures to grace our servers:</p> 
      <ul id="landing-list">
      {landingItems.slice(-3)}
      </ul>
    </main>
  );
};

export default Landing;
