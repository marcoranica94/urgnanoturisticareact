import {useEffect, useState} from 'react';
import logo from '../logo.svg';

function Bar() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		async function loadPosts() {
			const response = await fetch('http://localhost/turismo/wp-json/wp/v2/posts');
			if(!response.ok) {
				return;
			}
			const posts = await response.json();
			setPosts(posts);
			console.log(posts)
		}

		loadPosts();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default Bar;
