import { Fragment, useEffect, useState } from 'react';

import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import FoodBox from './components/FoodBox';

import './App.css';
import foods from './foods.json';

import { Row, Divider, Button } from 'antd';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foods);
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)

  useEffect(()=>{
    setFilteredFoodList(foodList.filter(foodItem => foodItem.name.toLowerCase().includes(search.toLowerCase())))
  },[search, foodList])

  const showFormHandler = () => {
    setShowForm(currState => !currState)
  }

  const addFoodHandler = (foodObject) => {
    setFoodList(currState => [...currState, foodObject])
  }

  const searchHandler = (searchSting) => {
    setSearch(searchSting)
  }

  const deleteItemHandler = (itemName) => {
    setFoodList(foodList.filter(foodItem => foodItem.name !== itemName))
  }

  return (
    <div className="App">
      {showForm ? 
        <Fragment>
          <AddFoodForm onSubmit={addFoodHandler} />
          <Button onClick={showFormHandler}> Hide Form </Button> 
        </Fragment>
        : <Button onClick={showFormHandler}> Add New Food </Button>
      }
      <Search onSearch={searchHandler} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFoodList.length !== 0 ? filteredFoodList.map((foodItem) => (
          <FoodBox
            key={foodItem.name}
            food={{
              name: foodItem.name,
              calories: foodItem.calories,
              image: foodItem.image,
              servings: foodItem.servings,
            }}
            onDelete={deleteItemHandler}
          />
        )) : <p>oops! There is no more content to show!</p> }
      </Row>
    </div>
  );
}

export default App;
