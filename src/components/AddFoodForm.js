import { Divider, Input } from 'antd';
import { useState } from 'react';

export default function AddFoodForm(props) {
    const [nameInput, setNameInput] = useState('')
    const [imageInput, setImageInput] = useState('')
    const [caloriesInput, setCaloriesInput] = useState('')
    const [servingsInput, setServingsInput] = useState('')
    
    const nameHandler = (event) => {
        setNameInput(event.target.value)
    }

    const imageHandler = (event) => {
        setImageInput(event.target.value)
    }

    const caloriesHandler = (event) => {
        setCaloriesInput(event.target.value)
    }

    const servingsHandler = (event) => {
        setServingsInput(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        props.onSubmit({
            name: nameInput,
            image: imageInput,
            calories: caloriesInput,
            servings: servingsInput,
        })
        setNameInput('')
        setImageInput('')
        setCaloriesInput('')
        setServingsInput('')
    }

  return (
    <form onSubmit={submitHandler}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={nameInput} type="text" onChange={nameHandler} />

      <label>Image</label>
      <Input value={imageInput} type='text' onChange={imageHandler} />

      <label>Calories</label>
      <Input value={caloriesInput} type='text' inputMode='number' onChange={caloriesHandler} />

      <label>Servings</label>
      <Input value={servingsInput} type='text' inputMode='number' onChange={servingsHandler} />

      <button type="submit">Create</button>
    </form>
  );
}
