import { useState } from 'react';

import FoodBox from './components/FoodBox';

import './App.css';
import foods from './foods.json';

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
      <h1>Food List</h1>
      <div className="food-list">
        {foodList.map((foodItem) => (
          <FoodBox
            key={foodItem.name}
            food={{
              name: foodItem.name,
              calories: foodItem.calories,
              image: foodItem.image,
              servings: foodItem.servings,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
