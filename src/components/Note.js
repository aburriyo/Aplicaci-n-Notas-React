import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id,tittle, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<div className='note-header'>
				<p className="tittle">{tittle}</p>
			</div>

			<span>{text}</span>

			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>

				
			</div>
		</div>
	);
};

export default Note;
