import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardBody from "react-bootstrap/esm/CardBody";
import ListGroup from 'react-bootstrap/ListGroup';


const User = ({ users }) => {

  return (
    <>
      <Card>
        <Card.Body>
          <ListGroup>
            {users.map((user) => {
              return <ListGroup.Item key={user.id}>
                <span>{user.username}</span>
              </ListGroup.Item>
            })}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  )
}

export default User;