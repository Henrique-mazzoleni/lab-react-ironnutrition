import { useState } from 'react';

import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import FoodBox from './components/FoodBox';

import './App.css';
import foods from './foods.json';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foods);

  const addFoodHandler = (foodObject) => {
    setFoodList(currState => [...currState, foodObject])
  }

  const searchHandler = (searchSting) => {
    setFilteredFoodList(foodList.filter(foodItem => foodItem.name.toLowerCase().includes(searchSting.toLowerCase())))
  }

  return (
    <div className="App">
      <AddFoodForm onSubmit={addFoodHandler} />
      <Search onSearch={searchHandler} />
      <h1>Food List</h1>
      <div className="food-list">
        {filteredFoodList.map((foodItem) => (
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
