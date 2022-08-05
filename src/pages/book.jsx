import {useEffect, useState} from 'react';
import logo from '../logo.svg';

function Book() {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		async function loadBooks() {
			const response = await fetch('http://localhost/turismo/wp-json/wp/v2/posts');
			if(!response.ok) {
				return;
			}
			const books = await response.json();
			setBooks(books);
		}

		loadBooks();
	}, []);

	return (
		<div className="App">
			<header className="App-header">

			</header>
			<body>

			</body>
		</div>
	);
}

export default Book;
