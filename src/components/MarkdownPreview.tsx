import { useCallback, useEffect, useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkImages from "remark-images";
import rehypeHighlight from "rehype-highlight";
import bnf from "highlight.js/lib/languages/bnf";

// store
import { useSelector } from "react-redux";
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
				.use(rehypeHighlight, { languages: { bnf } })
				.use(rehypeSanitize)
				.use(rehypeStringify)
				.process(editorInput),
		[editorInput]
	);

	useEffect(() => {
		file().then((res) => {
			setMarkdown(res.value as string);
		});
	}, [file]);

	return (
		<div className='border-2 border-solid p-4 min-w-11/12 min-h-300px mx-auto md:min-w-1/2 md:min-h-700px'>
			<p>Preview</p>
			<div dangerouslySetInnerHTML={{ __html: markdown }} />
		</div>
	);
};

export default MarkdownPreview;
