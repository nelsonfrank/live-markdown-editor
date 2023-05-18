import { useCallback, useEffect, useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkImages from "remark-images";
import { useSelector } from "react-redux";

// store
import { RootState } from "src/store";

const MarkdownPreview = () => {
	const [markdown, setMarkdown] = useState<string>("");

	const editorInput = useSelector(
		(state: RootState) => state.editor.inputValue
	);

	const file = useCallback(
		async () =>
			await unified()
				.use(remarkParse)
				.use(remarkRehype)
				.use(remarkImages)
				.use(rehypeSanitize)
				.use(rehypeStringify)
				.process(editorInput),
		[editorInput]
	);

	useEffect(() => {
		file().then((res) => {
			setMarkdown(res.value);
		});
	}, [file]);

	return (
		<div className='border-2 border-solid p-4 min-w-1/2 min-h-700px'>
			Preview
			<div dangerouslySetInnerHTML={{ __html: markdown }} />
		</div>
	);
};

export default MarkdownPreview;
