import {useEffect, useState} from 'react';
import {Box, Card, CardMedia, Typography} from '@mui/material';
import {InfoRounded} from '@mui/icons-material';

function News() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		async function loadPosts() {
			const response = await fetch('http://localhost/turismo/wp-json/wp/v2/posts');
			if(!response.ok) {
				console.log("Error during getting post" + response.errored)
			}
		}
		loadPosts().then(response => {
			const posts = response.json();
			setPosts(posts);
		});
	}, []);

	return (
		<div className="App">
			<body className="App-header">
				{posts.map(employee => {
					return (
						<Card
							variant="outlined"
							sx={{
								display: 'flex',
								p: 1,
								flexDirection: {
									xs: 'column', // mobile
									sm: 'row', // tablet and up
								},
							}}
						>
							<CardMedia
								component="img"
								width="100"
								height="100"
								alt="123 Main St, Phoenix, AZ cover"
								src="/static/images/cards/real-estate.png"
								sx={{
									borderRadius: 0.5,
									width: { xs: '100%', sm: 100 },
									mr: { sm: 1.5 },
									mb: { xs: 1.5, sm: 0 },
								}}
							/>
							<Box sx={{ alignSelf: 'center', ml: 2 }}>
								<Typography variant="body2" color="text.secondary">
									123 Main St, Phoenix, AZ
								</Typography>
								<Typography component="div" fontWeight="bold">
									$280k - $310k
								</Typography>
								<Box
									sx={{
										ml: -1,
										mt: 0.75,
										px: 1,
										py: 0.5,
										borderRadius: 1,
										display: 'flex',
										typography: 'caption',
										bgcolor: (theme) =>
											theme.palette.mode === 'dark' ? 'primary.900' : 'primary.50',
										color: (theme) =>
											theme.palette.mode === 'dark' ? '#fff' : 'primary.700',
									}}
								>
									<InfoRounded sx={{ fontSize: 16, mr: 0.5, mt: '1px' }} />
									Confidence score of 85%
								</Box>
							</Box>
						</Card>
					);
				})}
			</body>
		</div>
	);
}

export default News;
