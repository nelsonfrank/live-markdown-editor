import { Tooltip } from "react-tooltip";
import Home from "./pages/Home";

function App(): JSX.Element {
	return (
		<>
			<Home />
			<Tooltip id='my-tooltip' />
		</>
	);
}

export default App;
