import React from 'react';

function myResume() {
    return(
        <section>
            <div>
                <h1> Resume </h1>
            </div>
            <div>
                <h6>FRONT-END PROFICIENCIES</h6>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>React</li>
                    <li>Frameworks (boostrap, materialize)</li>
                    
                </ul>

                <br></br>

                <h6>BACK-END PROFICIENCIES</h6>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>NoSQL(MongoDB, Mongoose)</li>
                    <li>APIs (restfull, third-party, web, server-side)</li>
                    
                </ul>

                <br></br>
            </div>
        </section>
    )
}

export default myResume;