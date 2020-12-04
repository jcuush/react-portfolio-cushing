
import React from 'react'

const About = () => {
    return (
        <main class="container">
            <section class="row">
                <div class="col-md-8">
                    <article class="block">
                        <h1 class="block-header">About Me</h1>
                        <hr />
                        <img src="./headshot.JPG" alt="" id="about-image" />
                        <p className="about">I am a 2020 graduate of DePauw University with a Bachelor of Arts degree in Economics.  While at DePauw I was a member of the Management Fellows Program, a prestigous business program at our small liberal arts school.  From January to August of 2019 I was the Business Development Intern at DoubleMap, a start-up located in Indianapolis, and worked directly under the owner and handled the due diligence process while the company was being acquired by Ford.</p>

                        <p className="about">After graduation I decided to enroll in the Northwestern Coding Bootcamp to pursue my passion of web development.  Since enrolling I have learned skills in: JavaScript, React, HTML, CSS, mySQL and MongoDB.  I look forward to continue growing those skills and learning more while pursuing a career as a Full Stack Developer.</p>
                    </article>
                </div>
            </section>
        </main>

    )
};

export default About;