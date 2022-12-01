import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SideBar from "../SideBar/SideBar";


function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      bg="red"
      className="text-dark container"
    >
        <Navbar.Brand className="acc w-25  ">
          <Image src="logo192.png" width={60} />
        </Navbar.Brand>
        <Nav>

            <button>
                <SideBar/>
            </button>
        </Nav>
      
       
    </Navbar>
  );
}

export default NavBar;
