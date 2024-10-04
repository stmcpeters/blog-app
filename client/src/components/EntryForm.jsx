import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useState} from 'react';

const EntryForm = () => {

  // sets initial state of values inside the form
  const [valuesForm, setValuesForm] = useState({
    username: "",
    title: "",
    content: "",
    tags: ""
  });

  // creates a state for managing errors
  const [error, setError] = useState({
    errorUsername: false,
    errorTitle: false,
    errorContent: false,
    errorTags: false
  });

  // creates functions that handle user typing into fields
  const handleUsernameInputChange = (event) => {
    const username = event.target.value;
    setValuesForm((valuesForm) => ({ ...valuesForm, username}));
    if(username === "") {
      setError((error) => ({ ...error, errorUsername: true}));
    } else {
      setError((error) => ({ ...error, errorUsername: false}));
    }
  }

  const handleTitleInputChange = (event) => {
    const title = event.target.value;
    setValuesForm((valuesForm) => ({ ...valuesForm, title }));
    if(title === "") {
      setError((error) => ({ ...error, errorTitle: true }));
    } else {
      setError((error) => ({ ...error, errorTitle: false }));
    }
  }

  const handleContentInputChange = (event) => {
    const content = event.target.value;
    setValuesForm((valuesForm) => ({ ...valuesForm, content }));
    if(content === "") {
      setError((error) => ({ ...error, errorContent: true }));
    } else {
      setError((error) => ({ ...error, errorContent: false }));
    }
  }

  // const handleTagsInputChange = (event) => {
  //   const tags = event.target.value;
  //   setValuesForm((valuesForm) => ({ ...valuesForm, tags}));
  //   if(tags === "") {
  //     setError((error) => ({ ...error, errorTags: true}));
  //   } else {
  //     setError((error) => ({ ...error, errorTags: false}));
  //   }
  // }

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Create New Entry</Card.Title>
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
                <Form.Control 
                  type="text"
                  name="username"
                  required
                  onChange={handleUsernameInputChange}
                />
              <Form.Label>Title</Form.Label>
                <Form.Control 
                  type="text"
                  name="title"
                  required
                  onChange={handleTitleInputChange}
                />
              <Form.Label>Entry Body</Form.Label>
                <Form.Control 
                  type="text"
                  name="text"
                  required
                  onChange={handleContentInputChange}
                />
              <Form.Label>Tags</Form.Label>
                <Form.Control 
                  type="text"
                  name="tags"
                />
            </Form.Group>
            <Form.Group>
              <Button>Create Post</Button>
            </Form.Group>
          </Form>
      </Card.Body>
    </Card>
    )
  }

  export default EntryForm;
