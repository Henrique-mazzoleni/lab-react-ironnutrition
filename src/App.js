import { useState } from 'react';
import './App.css';
import foods from './foods.json';

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
      <h1>Food List</h1>
      {foodList.map((foodItem) => (
        <div>
          <p> {foodItem.name} </p>
          <img src={foodItem.image} width={150} alt={foodItem.name} />
        </div>
      ))}
    </div>
  );
}

export default App;
