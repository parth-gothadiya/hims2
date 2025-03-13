import { Form, Button, Card, InputGroup } from 'react-bootstrap';
import './Login.css';
import { Link } from 'react-router-dom';

export default function HIMSLogin() {
  return (
    <div className="login-container">
      <h2 className="login-title">HIMS Login</h2>
      <Card className="login-card">
        <Card.Body>
          <Form.Group className="form-group">
            <Form.Label className="form-label">Enter your email *</Form.Label>
            <InputGroup>
              <Form.Control type="email" placeholder="Enter your email" className="form-input" />
            </InputGroup>
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label className="form-label">Enter your password *</Form.Label>
            <InputGroup>
              <Form.Control type="password" placeholder="Enter your password" className="form-input" />
            </InputGroup>
          </Form.Group>
          <Form.Group className="form-options">
  <Form.Check type="checkbox" label="Remember Me" className="form-checkbox" />
  <Link to="/forget" className="forgot-password">Forgot your password?</Link>
</Form.Group>
          <Button className="login-button">Login</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
