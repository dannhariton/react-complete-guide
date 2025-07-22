import { NavLink } from "react-router-dom";
import classes from "./MenuNavigation.module.css";

function MenuNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MenuNavigation;
