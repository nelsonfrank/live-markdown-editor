// dependencies
import { useSelector } from "react-redux";

// components
import EditorInput from "./EditorInput";
import MarkdownPreview from "./MarkdownPreview";
import Header from "./Header";

// store
import { RootState } from "src/store";

const BlogEditor = () => {
	const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

	return (
		<section className={`${isDarkMode ? "dark" : ""} min-h-screen`}>
			<Header />
			<div className='max-w-7xl mx-auto mt-40'>
				<div className='flex items-center w-full gap-4'>
					<EditorInput />
					<MarkdownPreview />
				</div>
			</div>
		</section>
	);
};

export default BlogEditor;
