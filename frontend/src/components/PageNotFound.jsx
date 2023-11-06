import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <h2>Этой страницы не существует. Пожалуйста, вернитесь на <Link to="/">главную</Link>.</h2>
    );
}

export default PageNotFound;