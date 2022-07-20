import Note from './Note';
import AddNote from '../../../aplicacion-notas/src/components/AddNote';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					id={note.id}
					tittle={note.tittle}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}/>
			))}
			<AddNote handleAddNote={handleAddNote} />
			
		</div>
	);
};

export default NotesList;

/* <select className='selector'>
				<option value="rojo">rojo</option>
				<option value="amarillo">amarillo</option>
				<option value="azul">azul</option>
			</select> */