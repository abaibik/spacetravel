import { Link, Outlet, useLocation } from "react-router-dom";
import "../index.css";

export default function Root() {
  const { pathname } = useLocation();
  const homePath = "/";

  //   <nav>
  //                         <ul class="primary-navigation underline-indicators flex">
  //                             <li class="active"><a class="uppercase text-white letter-spacing-2" href="#"><span>01</span>Active</a>
  //                             <li><a class="uppercase text-white letter-spacing-2" href="#"><span>02</span>Hovered</a>
  //                             <li><a class="uppercase text-white letter-spacing-2" href="#"><span>03</span>Idle</a>
  //                         </ul>
  //                     </nav>

  return (
    <>
      <div>
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

        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}
