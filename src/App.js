import Counter from './Counter';
import List from './List';
import TodoApp from './TodoApp';

const App = () => {
  const myFaveFoods = [ "Oatmeal", "Chicken", "Steak" ];
  const myFaveCryptos = [ "XRP", "XLM", "XDC" ];
  const msg1 = 'My favorite foods are'
  const msg2 = 'My favorite cryptos are'
  return (
    <>
      <TodoApp/>
      <Counter/>
      <List
        myString='Manny is cool'
        isHungry
        message={msg1}
        items={myFaveFoods}
        myObject={{
          name: 'Manny',
          lastName: 'jucaban'
        }}
        clickMe={() => console.log('I was clicked')}
      />
    </>
  );
};

export default App;
