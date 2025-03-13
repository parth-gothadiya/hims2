import { useState } from 'react';
import { Form, Button, Card, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NewPassword.css';

export default function NewPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Submit new password logic here
      alert('Password reset successfully!');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="new-password-container">
      <h2 className="new-password-title">New <span className="password-highlight">PASSWORD</span></h2>
      <Card className="new-password-card">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="form-group">
              <Form.Label className="form-label">Enter a password *</Form.Label>
              <InputGroup>
                <Form.Control 
                  type="password" 
                  placeholder="Enter a password" 
                  className="form-input" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label className="form-label">Enter a confirm password *</Form.Label>
              <InputGroup>
                <Form.Control 
                  type="password" 
                  placeholder="Enter a confirm password" 
                  className="form-input" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </InputGroup>
            </Form.Group>
            <Button className="submit-button" type="submit">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
      {/* <Link to="/login" className="back-to-login">Back to <span className='text-danger'>login</span></Link> */}
    </div>
  );
}
