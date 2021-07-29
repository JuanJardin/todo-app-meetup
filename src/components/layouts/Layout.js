import React from "react";
import Classes from "./Layout.module.css";
import MainNavegation from "./MainNavegation";

const Layout = (props) => {
  return <div>
            <MainNavegation />
            {/* props. children se usa de la misma forma que esta explicado en el archivo Card.js */}
            <main className={Classes.main}>{props.children}</main>
  </div>;
};

export default Layout;
