import { useContext } from 'react';

// project imports
import NavLeft from './NavLeft';
import NavRight from './NavRight';
import Breadcrumb from '../Breadcrumb';
import { ConfigContext } from 'contexts/ConfigContext';

// -----------------------|| NAV BAR ||-----------------------//

export default function NavBar() {
  const configContext = useContext(ConfigContext);
  const { collapseTabMenu, collapseHeaderMenu } = configContext.state;

  let headerClass = ['pc-header'];
  if (collapseHeaderMenu) {
    headerClass.push('mob-header-active');
  }

  let mobDrpClass = ['me-auto pc-mob-drp'];
  if (collapseTabMenu) {
    mobDrpClass.push('mob-drp-active');
  }

  return (
    <header 
    className={headerClass.join(' ')} 
    style={{ backgroundColor: '#3d4b54', borderTop: "none", padding: "0px" }} // Remove top border
  >
    <div className="header-wrapper">
      <div className={mobDrpClass.join(' ')} style={{ marginTop: "-1px" }}> {/* Adjust alignment */}
        <NavLeft />
        {/* <BreadCrumb /> */}
      </div>
      <div className="ms-auto">
        <NavRight />
      </div>
    </div>
    {(collapseTabMenu || collapseHeaderMenu) && <div className="pc-md-overlay" />}
  </header>
  
  );
}
