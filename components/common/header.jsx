import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { GrBasket } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
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
          <div className="row align-items-center">
            <div className="col-md-2">
              <img src="img/logo.png" alt="" />
            </div>
            <div className="col-md-7">
              <Nav activeKey="/home" className="justify-content-center">
                <Link href="/home" passHref>
                  Home
                </Link>
                <Link href="/yttyu" passHref>
                  Indian
                </Link>
                <Link href="/yttyu" passHref>
                  Italian
                </Link>
                <Link href="/yttyu" passHref>
                  Thai
                </Link>
                <Link href="/yttyu" passHref>
                  Chinese
                </Link>
                <Link href="/yttyu" passHref>
                  Shop
                </Link>
                <Link href="/yttyu" passHref>
                  Pages
                </Link>
              </Nav>
            </div>
            <div className="col-md-3">
              <div className="header-icons">
                <a href="">
                  <FaRegUserCircle />
                </a>
                <a href="">
                  <GrBasket />
                </a>
                <a href="">
                  <FaRegHeart />
                </a>
                <button>
                  <IoSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
