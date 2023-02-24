import { Col, Card, Button } from 'antd'

export default function FoodBox(props) {
  const { name, calories, image, servings } = props.food;

  const deleteHandler = (itemName) => {
    props.onDelete(itemName)
  }

  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt={name} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {servings * calories} </b> kcal
        </p>
        <Button type="primary" onClick={deleteHandler.bind(null, name)}> Delete </Button>
      </Card>
    </Col>
  );
}
