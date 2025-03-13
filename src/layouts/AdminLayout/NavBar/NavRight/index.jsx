import { Link } from 'react-router-dom';

// react-bootstrap
import { ListGroup, Dropdown, Form } from 'react-bootstrap';

// third party
import FeatherIcon from 'feather-icons-react';

// assets
import avatar2 from 'assets/images/user/avatar-2.jpg';

// -----------------------|| NAV RIGHT ||-----------------------//

export default function NavRight() {  
  return (
    <ListGroup as="ul" bsPrefix=" " className="list-unstyled">
      <ListGroup.Item as="li" bsPrefix=" " className="pc-h-item">
        <Dropdown>
          <Dropdown.Toggle as="a" variant ="link" className="pc-head-link arrow-none me-0">
            {/* <i className="material-icons-two-tone">search</i> */}
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-end pc-h-dropdown drp-search">
            <Form className="px-3">
              <div className="form-group mb-0 d-flex align-items-center">
                <FeatherIcon icon="search" />
                <Form.Control type="search" className="border-0 shadow-none" placeholder="Search here. . ." />
              </div>
            </Form>
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup.Item>
      <ListGroup.Item as="li" bsPrefix=" " className="pc-h-item">
        <Dropdown className="drp-user">
          <Dropdown.Toggle as="a" variant="link" className="pc-head-link arrow-none me-0 user-name">
            {/* <img src={avatar2} alt="userimage" className="user-avatar" /> */}
            <span>
  <Link to="/login" className="dropdown-item" style={{ display: "flex", alignItems: "center" }}>
    <i 
      className="material-icons-two-tone" 
      style={{
        backgroundColor: "white",  // Circle background color
        color: "#3d4b54",          // Icon color to match the theme
        borderRadius: "50%",       // Makes it circular
        padding: "5px",            // Adjust padding to match the spacing
        fontSize: "20px",          // Adjust size to fit well
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "30px",             // Ensures it remains a circle
        height: "30px"             // Ensures it remains a circle
      }}
    >
     exit_to_app
    </i>
  </Link>
</span>

          </Dropdown.Toggle>
       
        </Dropdown>
      </ListGroup.Item>
    </ListGroup>
  );
}
