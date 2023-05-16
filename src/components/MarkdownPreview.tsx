import { useCallback, useEffect, useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

export interface MarkdownPreviewProps {
	textInput: string;
}
const MarkdownPreview = ({ textInput }: MarkdownPreviewProps) => {
	const [markdown, setMarkdown] = useState<string>("");
	const file = useCallback(
		async () =>
			await unified()
				.use(remarkParse)
				.use(remarkRehype)
				.use(rehypeSanitize)
				.use(rehypeStringify)
				.process(textInput),
		[textInput]
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
