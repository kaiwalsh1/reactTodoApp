import Counter from './Counter';
import List from './List';

const App = () => {
  const myFaveFoods = [ "Oatmeal", "Chicken", "Steak" ];
  const myFaveCryptos = [ "XRP", "XLM", "XDC" ];
  const msg1 = 'My favorite foods are'
  const msg2 = 'My favorite cryptos are'
  return (
    <>
      <Counter/>
      <List
        message={msg1}
        items={myFaveFoods}
      />
      <List
        message={msg2}
        items={myFaveCryptos}
      />
    </>
  );
};

export default App;
