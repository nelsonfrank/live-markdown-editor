import { useState } from "react";
import EditorInput from "./EditorInput";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";

import MarkdownPreview from "./MarkdownPreview";

const BlogEditor = () => {
	const [editorInputValue, setEditorInputvalue] = useState("");
	const [darkMode, setDarkMode] = useState(false);

	const handleInputValue = (value: string) => {
		setEditorInputvalue(value);
		return "";
	};

	const handleToggleTheme = () => {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	};

	return (
		<section className={`${darkMode ? "dark" : ""} min-h-screen`}>
			<nav className='grid grid-cols-2 place-content-between items-center w-full px-8'>
				<h4>home</h4>
				<button
					onClick={handleToggleTheme}
					className='self-left justify-self-end'
				>
					{darkMode ? <MdOutlineDarkMode /> : <MdOutlineWbSunny />}
				</button>
			</nav>
			<div className='max-w-7xl mx-auto mt-40'>
				<div className='flex items-center w-full gap-4'>
					<EditorInput onInputChange={handleInputValue} />
					<MarkdownPreview textInput={editorInputValue} />
				</div>
			</div>
		</section>
	);
};

export default BlogEditor;
