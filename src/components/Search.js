import { Col, Divider, Input } from "antd";

export default function Search (props) {
    const searchHandler = (event) => {
        props.onSearch(event.target.value)
    }
    
    return (
        <Col>
          <Divider>Search</Divider>
    
          <Input type="text" onChange={searchHandler} />
        </Col>
      );
}