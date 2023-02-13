import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Route, Routes } from "react-router-dom";
import Npc from "./routes/Npc";

ReactDOM.render(
	<HashRouter basename={process.env.PUBLIC_URL}>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/npc/:name" element={<Npc />} />
		</Routes>
	</HashRouter>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
