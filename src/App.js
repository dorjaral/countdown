import CountDownContainer from "./countdown-container/countdown-container.component";

import "./App.css";

const App = () => {
	return (
		<div className="App">
			<CountDownContainer
				targetDate={{ date: "1 dec 2022", name: "Año nuevo" }}
			/>
			<CountDownContainer
				targetDate={{ date: "24 dec 2022", name: "Navidad" }}
			/>
			<CountDownContainer
				targetDate={{ date: "31 dec 2022", name: "New year" }}
			/>
		</div>
	);
};

export default App;
