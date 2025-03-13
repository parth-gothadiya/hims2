// react-bootstrap
import MainCard from 'components/Card/MainCard';
import { Row, Col } from 'react-bootstrap';

// -----------------------|| SAMPLE ||-----------------------//

export default function Sample() {
  return (
    <Row>
      <Col sm={12}>
        <MainCard title="Hello card">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
           
          </p>
        </MainCard>
      </Col>
    </Row>
  );
}
