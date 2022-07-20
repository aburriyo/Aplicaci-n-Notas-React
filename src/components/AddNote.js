import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const [noteTittle, setNoteTittle] = useState('');
	const characterLimit = 200;
	const characterLimitTittle= 50

	const handleChangeText = (event) => {
		if (characterLimitTittle - event.target.value.length >= 0 ) {
			setNoteText(event.target.value);
	
		}
	};

	const handleChangeTittle = (event) => {
		if (characterLimitTittle - event.target.value.length >= 0) {
			setNoteTittle(event.target.value);
	
		}
	};

	const handleSaveClickText = () => {
		if (noteText.trim().length > 0 && noteTittle.trim().length > 0) {
			handleAddNote(noteText);
			handleAddNote(noteTittle);
			setNoteText('');
			setNoteTittle('');
		}
	};


	

	return (
		<div className='note new'>
			<textarea
			rows="1"
			cols="50"
			placeholder='Escribe Título Acá'
			value={noteTittle}
			onChange={handleChangeTittle}>

			</textarea>

			<textarea
				rows='8'
				cols='10'
				placeholder='Escribe acá tu nueva nota...'
				value={noteText}
				onChange={handleChangeText}
			></textarea>
			<div className='note-footer'>
				<small>
					Quedan {characterLimit - noteText.length} carácteres restantes
				</small>
				<button className='save' onClick={handleSaveClickText}>
					Guardar
				</button>
			</div>
		</div>
	);
};

export default AddNote;
