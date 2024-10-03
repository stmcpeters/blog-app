import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardBody from "react-bootstrap/esm/CardBody";


const Entry = ({ entry, user, toggleDetails, showDetails }) => {

  const handleShowDetails = () => {
    toggleDetails(entry.id);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{entry.title}</Card.Title>
          <Card.Text>{entry.content}</Card.Text>
        </Card.Body>
        <Button onClick={() => {handleShowDetails}}>Details</Button>
      </Card>

      {showDetails === entry.id && (
        <Card>
          <Card.Header>Details</Card.Header>
          <Card.Body>
            <Card.Text>
              <ul>
                <li>Posted by: {entry.author_username}</li>
                <li>Email: {user.email}</li>
                <li>User joined: {user.user_since.split('T')[0]}</li>
                <li>Published at: {entry.created_at.split('T')[0]}</li> 
                <li>Tags: {entry.tags}</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  )
}

export default Entry;