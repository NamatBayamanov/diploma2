import Logo from "../ui/Logo/Logo";
import "./Nav.css";
import Navitem from "./Navitem/Navitem";


function Nav() {
  return (
    <nav className="Nav">
      <div className="container">
        <Logo/>

        <ul>
          <Navitem url="/" active>
            Home
          </Navitem>
          <Navitem url="/product">
          Products
          </Navitem>
          <Navitem url="/contacts">
          Contacts
          </Navitem>


        </ul>
      </div>
    </nav>
  );
}

export default Nav;