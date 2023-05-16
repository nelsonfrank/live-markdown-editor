import { useState } from "react";
import ToolBar from "./ToolBar";

export interface EditorInputPropType {
	onInputChange: (value: string) => string;
}
const EditorInput = ({ onInputChange }: EditorInputPropType) => {
	const [textInput, setTextInput] = useState("");

	const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const inputValue = event.target.value;
		setTextInput(inputValue);

		onInputChange(inputValue);
	};

	return (
		<>
			<div className='border-2 border-solid p-4 min-w-1/2 min-h-700px'>
				<ToolBar />
				<textarea
					className='w-full h-600px border-2 focus:border-2 focus:border-gray-500 outline-none'
					value={textInput}
					onChange={(e) => handleInputChange(e)}
				/>
			</div>
		</>
	);
};

export default EditorInput;
