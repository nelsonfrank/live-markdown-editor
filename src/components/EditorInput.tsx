import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// store
import { inputChange } from "src/store/features/editor";
import { AppDispatch, RootState } from "src/store";

// Components
import ToolBar from "./ToolBar";

const EditorInput = () => {
	const editorInput = useSelector(
		(state: RootState) => state.editor.inputValue
	);

	const [textInput, setTextInput] = useState(editorInput);

	const dispatch = useDispatch<AppDispatch>();

	const inputRef = useRef(null);

	const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const inputValue = event.target.value;
		setTextInput(inputValue);

		dispatch(inputChange(inputValue));
	};

	const handleInputFormating = (formattedInput: string) => {
		setTextInput(formattedInput);
		dispatch(inputChange(formattedInput));
	};
	return (
		<>
			<div className='border-2 border-solid p-4 min-w-11/12 min-h-300px mx-auto md:min-w-1/2 md:min-h-700px'>
				<ToolBar
					onInputFormating={handleInputFormating}
					editorInput={textInput}
				/>
				<textarea
					className='w-full h-270px md:h-620px border-2 focus:border-2 focus:border-gray-500 outline-none'
					value={textInput}
					ref={inputRef}
					onChange={(e) => handleInputChange(e)}
				/>
			</div>
		</>
	);
};

export default EditorInput;
