import React from 'react';


const About = () => {
	return (
		<div className='bckg'
			style={{
				backgroundImage: 'url("../bg/bg.jpg")',
				backgroundSize: 'contain',
				backgroundPosition: 'right',
				backgroundRepeat: 'no-repeat',
				display: 'flex',
				flexDirection: 'column',

				height: '100vh',
				width: '100vw',
				zIndex: '-1',
				position: 'fixed',
				textAlign: 'left',

			}}
		>


			<h1
				style={{
					color: 'white',


					padding: '4px 4px',
					fontSize: '70px',
					position: 'left',
					textAlign: 'left',
					marginLeft: '30px',
					marginTop: '50px',
				}}>
				Celeb-X
			</h1>

			<h2
				style={{

					color: 'white',
					padding: '4px 4px',
					marginLeft: '30px',
					marginRight: '650px',

				}}>
				{'\n'}When you're watching movies, News or TV shows, do you ever have difficulties recognising the celebrities? <br /> <br /> Meet Celeb-X, an app that recognises famous personalities.
				When we are watching a game or a movie on TV, we frequently fail to recognise the celebrities who are featured in it. As a result, we either go online or ask our pals. However, this does not appear to be a practical approach because a significant amount of time is lost reading through many websites in search of relevant information. What if we told you there's an app that can match you to any celebrity on the planet? Yes, you read that correctly. If you frequently encounter similar issues, Celeb-X is the app for you. In seconds, you'll be able to recognise any star from across the world with this celebrity face matching software. The app is easy to use and can be fun to play with and explore!
			</h2>
		</div>
	);
};

export default About;
