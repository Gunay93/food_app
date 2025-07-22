import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
function Header() {
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <ul className="d-flex gap-15">
            <li>
              <a href="">
                <FaPhone />
              </a>
              +99455 000 00 00
            </li>
            <li>
              <a href="">
                <MdEmail />
                h.gunay021093@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <img src="img/logo.png" alt="" />
            </div>
            <div className="col-md-9">
              <Nav activeKey="/home">
                <Link href="/home" passHref>
                  Home
                </Link>
                <Link href="/yttyu" passHref>
                  Indian
                </Link>
              </Nav>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
