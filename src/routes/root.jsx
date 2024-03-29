import { Link, Outlet, useLocation } from "react-router-dom";
import "../index.css";
import Logo from "../assets/shared/logo.svg";

export default function Root() {
  const { pathname } = useLocation();
  const homePath = "/";

  return (
    <div>
      <header className="primary-header flex">
        <div>
          <img src={Logo} alt="space tourism logo" className="logo" />
        </div>
        <nav>
          <ul className="primary-navigation underline-indicators flex">
            <li>
              <Link
                className="uppercase text-white letter-spacing-2"
                active={pathname === homePath}
                to={homePath}
              >
                <span>00</span>Home
              </Link>
            </li>

            <li>
              <Link
                className="uppercase text-white letter-spacing-2"
                active={pathname === homePath}
                to={homePath}
              >
                <span>01</span>Destination
              </Link>
            </li>

            <li>
              <Link
                className="uppercase text-white letter-spacing-2"
                active={pathname === homePath}
                to={homePath}
              >
                <span>02</span>Crew
              </Link>
            </li>

            <li>
              <Link
                className="uppercase text-white letter-spacing-2"
                active={pathname === homePath}
                to={homePath}
              >
                <span>03</span>Technology
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
