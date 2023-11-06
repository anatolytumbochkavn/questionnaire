import { Outlet } from "react-router-dom";

import "../App.css";

const Layout = () => {
    return (
        <>
            <div className="navigation">
                <div className="navigationContainer">
                    <img src={require("../images/rst.png")} className="logo" onClick={() => {window.open("/", "_self")}} />
                    <div>
                        <h2 id="navButton" onClick={() => {window.open("/test", "_self")}}>Пройти тест</h2>
                        <h2 id="navButton" onClick={() => {window.open("/aboutUs", "_self")}}>О нас</h2>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Layout;