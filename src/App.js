import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from '../../aplicacion-notas/src/components/Search';
import Header from '../../aplicacion-notas/src/components/Header';

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
      title: 'Primera nota',
			text: 'Esto es una nueva nota',
			date: '19/07/2022',
		},
		{
			id: nanoid(),
      title: 'Segunda nota',
			text: 'Esta es la segunda nota',
			date: '19/07/2022',
		}
	]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text, NoteTittle) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
      tittle: NoteTittle,
			text: text,
			date: date.toLocaleDateString(),
  
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};


	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;