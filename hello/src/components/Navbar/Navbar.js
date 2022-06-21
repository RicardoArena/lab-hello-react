import Logo from "../../images/ironhack-logo-xs.png";
import MenuTop from "../../images/menu-top-xs.png";

function Navbar() {
  return (
    <nav id="nav-bar">
      <div>
        <img id="logo-nav" src={Logo} alt="logo" />
      </div>
      <div>
        <img id="logo-bar" src={MenuTop} alt="bar menu" />
      </div>
    </nav>
  );
}

export default Navbar;
