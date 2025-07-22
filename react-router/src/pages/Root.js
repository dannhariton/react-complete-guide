import { Outlet } from "react-router-dom";
import MenuNavigation from "../components/MenuNavigation";
import classes from "./Root.module.css";
function RootLayout() {
  return (
    <>
      <MenuNavigation />

      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
