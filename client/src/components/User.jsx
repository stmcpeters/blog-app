import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardBody from "react-bootstrap/esm/CardBody";
import ListGroup from 'react-bootstrap/ListGroup';


const User = ({ users }) => {

  return (
    <>
      <Card>
        <Card.Body>
          <ul className='display-users'>
            {users.map((user) => {
              return <li key={user.id}>
                {user.username}
              </li>
            })}
          </ul>
        </Card.Body>
      </Card>
    </>
  )
}

export default User;