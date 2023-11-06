import { Routes, Route } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout";
import Main from "./components/Main";
import TestAndResult from "./components/TestAndResult";
import AboutUs from "./components/AboutUs";
import PageNotFound from "./components/PageNotFound";

const App = () => {
	return (
		<>
			<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Main />} />
				<Route path="/test" element={<TestAndResult />} />
				<Route path="/aboutUs" element={<AboutUs />} />
			</Route>
			<Route path="*" element={<PageNotFound />} />
			</Routes>
		</>
	);
}

export default App;
