import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardBody from "react-bootstrap/esm/CardBody";


const Entry = ({ entry }) => {

  return (
    <>
      <Card>
        <Card.Header className='card-header'>
          Posted by: {entry.author_username} <br></br>
          Published at: {entry.created_at.split('T')[0]}
        </Card.Header>
        <Card.Body>
          <Card.Title>{entry.title}</Card.Title>
          <Card.Text>{entry.content}</Card.Text>
        </Card.Body>
        <Button>
          Details
        </Button>
      </Card>
    </>
  )
}

export default Entry;