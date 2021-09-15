import React from 'react';

function Portfolio() {
    const myProjects = [
        {
			name: 'Professional Portfolio',
			github: 'https://github.com/benmuchemi15/aboutme-web',
			deployed: 'https://benmuchemi15.github.io/aboutme-web/'
		},
		{
			name: 'Password Generator',
			github: 'https://github.com/benmuchemi15/password-generator',
			deployed: 'https://benmuchemi15.github.io/password-generator/'
		},
		{
			name: 'Work Day Scheduler',
			github: 'https://github.com/benmuchemi15/calendar-app',
			deployed: 'https://benmuchemi15.github.io/calendar-app/'
		},
		{
			name: 'Code Quiz',
			github: 'https://github.com/benmuchemi15/coding-quiz',
			deployed: 'https://benmuchemi15.github.io/coding-quiz/'
		},
		{
			name: 'Mix Master',
			github: 'https://github.com/J2021T/mix-master',
			deployed: 'https://j2021t.github.io/mix-master/'
		},
		{
			name: 'Local Machine',
			github: 'https://github.com/CrawleyJ2/local-machine',
			deployed: 'https://crawleyj2.github.io/local-machine'
		}
    ]

    return(
        <section>
            <h1>Portfolio</h1>
        </section>
    )
}


export default Portfolio;