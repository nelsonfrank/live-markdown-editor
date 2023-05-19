import { MdOutlinePublish } from "react-icons/md";
import { RiDraftLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
// State
import { AppDispatch, RootState } from "src/store";
import { publishPostAsync, saveToDraftAsync } from "src/store/features/editor";

const ActionButtons = () => {
	const editorState = useSelector((state: RootState) => state.editor);

	const dispatch = useDispatch<AppDispatch>();

	const handleSaveToDraft = () => {
		dispatch(saveToDraftAsync());
	};

	const handlePublish = () => {
		dispatch(publishPostAsync());
	};

	return (
		<div className='flex justify-end gap-4 my-4'>
			<button
				type='button'
				className='text-gray-900 bg-white py-2.5 px-5 shadow-md border-2 border-gray-400 rounded-md inline-flex items-center gap-2'
				onClick={handleSaveToDraft}
			>
				{editorState.savingToDraft && editorState.savingToDraft.loading ? (
					<AiOutlineLoading3Quarters className='animate-spin' />
				) : (
					<RiDraftLine className='text-xl' />
				)}
				<span>Save to Draft</span>
			</button>
			<button
				type='button'
				className='text-gray-200 bg-gray-900 py-2.5 px-5 rounded-md inline-flex items-center gap-2'
				onClick={handlePublish}
			>
				{editorState.publishPost && editorState.publishPost.loading ? (
					<AiOutlineLoading3Quarters className='animate-spin' />
				) : (
					<MdOutlinePublish className='text-xl' />
				)}

				<span>Publish</span>
			</button>
		</div>
	);
};

export default ActionButtons;
