import { useState } from 'react';
import { Form, Button, Card, InputGroup } from 'react-bootstrap';
import './ForgotPassword.css';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [otpSent, setOtpSent] = useState(false);

  return (
    <div className="forgot-password-container">
      {!otpSent ? (
        <>
          <h2 className="forgot-password-title">Forgot your password?</h2>
          <Card className="forgot-password-card">
            <Card.Body>
              <Form.Group className="form-group">
                <Form.Label className="form-label">Enter your email *</Form.Label>
                <InputGroup>
                  <Form.Control type="email" placeholder="Enter your email" className="form-input" />
                </InputGroup>
              </Form.Group>
              <Button className="send-otp-button" onClick={() => setOtpSent(true)}>Send OTP</Button>
            </Card.Body>
          </Card>
          <Link to="/login" className="back-to-login">Back to <span className='text-danger'>login</span></Link>
        </>
      ) : (
        <>
          <h2 className="forgot-password-title">Verify your OTP</h2>
          <Card className="otp-card">
            <Card.Body>
              <Form.Group className="form-group">
                <Form.Label className="form-label">Enter your OTP *</Form.Label>
                <div className="otp-inputs">
                  {[...Array(6)].map((_, i) => (
                    <input key={i} type="text" maxLength="1" className="otp-box" />
                  ))}
                </div>
              </Form.Group>
              <Button className="verify-otp-button">Verify OTP</Button>
            </Card.Body>
          </Card>
          <Link to="/login" className="back-to-login">Back to <span className='text-danger'>login</span></Link>
        </>
      )}
    </div>
  );
}
