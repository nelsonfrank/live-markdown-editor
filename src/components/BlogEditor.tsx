// dependencies
import { useSelector } from "react-redux";

// components
import EditorInput from "./EditorInput";
import MarkdownPreview from "./MarkdownPreview";
import Header from "./Header";
import ActionButtons from "./ActionButtons";

// store
import { RootState } from "src/store";

const BlogEditor = () => {
	const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

	return (
		<section className={`${isDarkMode ? "dark" : ""} min-h-screen mb-6`}>
			<Header />
			<div className='flex justify-center mt-10 mb-16'>
				<h1 className='text-5xl'>Markdown Editor</h1>
			</div>
			<div className='max-w-7xl mx-auto'>
				<ActionButtons />
				<div className='flex flex-col md:flex-row items-center w-full gap-4 mx-2'>
					<EditorInput />
					<MarkdownPreview />
				</div>
			</div>
		</section>
	);
};

export default BlogEditor;
