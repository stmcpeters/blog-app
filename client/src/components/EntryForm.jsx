import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useState} from 'react';

const EntryForm = ({ entries, onSaveEntry }) => {

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

  const handleTagsInputChange = (event) => {
    const tags = event.target.value;
    setValuesForm((valuesForm) => ({ ...valuesForm, tags}));
    if(tags === "") {
      setError((error) => ({ ...error, errorTags: true}));
    } else {
      setError((error) => ({ ...error, errorTags: false}));
    }
  }

    //A function to handle the post request
    const postEntry = (newEntry) => {
        const updatedEntry ={
          ...newEntry,
          author_username: valuesForm.username
        };

      return fetch("http://localhost:5001/api/entries", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedEntry),
      })
          .then((response) => {
              if(!response.ok) {
                throw new Error('Network response was not ok')
              }
              return response.json();
          })
          .then((data) => {
              onSaveEntry(data);
              //this line just for cleaning the form
              clearForm();
          })
          .catch((error) => {
            if (error.message.includes('foreign key constraint')){
              alert('Uh oh! You have to be a Pawesome user to post. Please login/sign up </3');
            } else {
            alert('Your post is live!');
            }
          })
  };

// event.preventDefault() stops the form from being submitted normally
// Object.values(valuesForm) gets all form values
// checks if every value is truthy (not empty)
// shows an alert if any fields are empty
// postEntry(valuesForm) sends form data

  const onSubmit = (event) => {
    // console.log('submit called');
    event.preventDefault();
    if (Object.values(valuesForm).every(value => value.trim() === '')) {
      alert('Please fill out all fields.');
      return;
    }
    postEntry(valuesForm);
  };  

  const clearForm = () => {
    setValuesForm({
      username: "",
      title: "",
      content: "",
      tags: ""
    });
  };
  

  return (
    <Card className='form-entries'>
      <Card.Body>
        <Card.Title>Create New Entry</Card.Title>
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control 
                  data-testid='username'
                  id="username"
                  type="text"
                  name="username"
                  required
                  value={valuesForm.username}
                  onChange={handleUsernameInputChange}
                />
              <Form.Label>Title</Form.Label>
                <Form.Control 
                  type="text"
                  name="title"
                  required
                  value={valuesForm.title}
                  onChange={handleTitleInputChange}
                />
              <Form.Label>Entry Body</Form.Label>
                <Form.Control 
                  type="text"
                  name="text"
                  required
                  value={valuesForm.content}
                  onChange={handleContentInputChange}
                />
              <Form.Label>Tags</Form.Label>
                <Form.Control 
                  type="text"
                  name="tags"
                  value={valuesForm.tags}
                  onChange={handleTagsInputChange}
                />
            </Form.Group>
            <Form.Group>
              <Button type="submit">Create Post</Button>
            </Form.Group>
            <div id="error-message">Please fill out all fields.</div>
          </Form>
      </Card.Body>
    </Card>
    )
  }

  export default EntryForm;
