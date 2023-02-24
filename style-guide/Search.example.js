// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Col, Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
  const searchHandler = (event) => {
    props.onSearch(event.target.value)
  }
  
  return (
    <Col>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input type="text" onChange={searchHandler} />
    </Col>
  );
}

export default Search;
