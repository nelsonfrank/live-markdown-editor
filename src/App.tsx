import { Tooltip } from "react-tooltip";
import BlogEditor from "./components/BlogEditor";

function App(): JSX.Element {
	return (
		<>
			<BlogEditor />
			<Tooltip id='my-tooltip' />
		</>
	);
}

export default App;
