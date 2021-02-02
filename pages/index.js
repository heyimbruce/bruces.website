import Head from 'next/head';
import React from 'react';
import styles from '../styles/index.module.css';

import Rank from '../components/rank.js';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { repos: [], starred: [] };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/heyimbruce/repos')
      .then(res => res.json())
      .then(repos => {
        this.setState({ repos });
      })
      .catch(console.error);

    fetch('https://api.github.com/users/heyimbruce/starred')
      .then(res => res.json())
      .then(starred => {
        this.setState({ starred });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className={ styles.home }>
        <Head>
          <title>Bruce Caldwell -- Web Developer</title>
          <link rel="icon" href="/favicon.ico" />
          <meta rel="description" value="Web Development and Marketing by Bruce Caldwell -- Contact Me Today!" />
        </Head>

        <header>
          <h1>Bruce Caldwell</h1>
          <h2>Senior-level Full Stack Developer for PHP and JAM Stack Applications</h2>
          <p>
            I make websites that load fast and increase sales. <a style={{ textDecoration: 'underline' }} href="#contact">Hire me!</a>
          </p>

          <nav>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#philosophy">Philosophy</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <section className={ styles.experience } id="experience">
            <div>
              <h3>Job Experience</h3>

              <div>
                <strong>Soloprenuer</strong>
                <em>Briine, LLC</em>
                <em>2020 - 2021</em>

                <span>My main responsibilites include:</span>
                <ul>
                  <li>Successfully organizing project materials and requirements while working closely with a small team of contracted developers and marketing professionals.</li>
                  <li>Increased bottom-line with more form conversions for clients while updating UI/UX elements and providing marketing consultation.</li>
                  <li>Engaging clients with cutting-edge web technologies including Accelerated Mobile Pages (AMP) and Progressive Web Apps (PWA) to lower pagespeed scores.</li>
                  <li>Consulting on usage of analytics and marketing tools to continue data-driven development.</li>
                </ul>
              </div>

              <div>
                <strong>Lead Web Developer</strong>
                <em>AMS Vans, LLC</em>
                <em>2017 - 2019</em>

                <span>My work at AMS included:</span>
                <ul>
                  <li>Establishing internal data structures and processing flows to keep members across the entire company running smoothly.</li>
                  <li>Multiple website redevelops and redesigns while decreasing pagespeed and lowering bounce rates.</li>
                  <li>Implementing flows to allow marketing professionals at the company to take on various goals for pushing conversions higher while increasing customer success.</li>
                </ul>
              </div>

              <div>
                <strong>Node.JS Financial Developer</strong>
                <em>BitPay</em>
                <em>2019-2019</em>

                <span>In my short time at BitPay I:</span>
                <ul>
                  <li>Worked with financial team to produce reporting tools that meet the ever-changing requirements of a payment processor.</li>
                  <li>Provided quality code QA and review for various members of the team.</li>
                  <li>Ensured proper server/client relationship in cases where API methods could cause server stresses.</li>
                </ul>
              </div>

              <div>
                <strong>Backend NodeJS Developer</strong>
                <em>NetJump Empathy, Ideas, and Innovation</em>
                <em>2016 - 2017</em>

                <span>While at NetJump I:</span>
                <ul>
                  <li>Worked closely with database modeling, project management, and became more comfortable with goal expectation and project timescale.</li>
                  <li>Began learning advanced DevOps with Express and various precursors to the JAM stack, which later would send me to React/NextJS.</li>
                </ul>
              </div>

              <div>
                <strong>Technical Support Representative</strong>
                <em>WebSharks, Inc.</em>
                <em>2014 - 2015</em>

                <span>WebSharks taught me to:</span>
                <ul>
                  <li>Provide quality technical feedback in the case of complicated installation requirements.</li>
                  <li>Track down inconsistencies within various server environments and implementations.</li>
                  <li>Use the linux command line as a main interface to most technical environments.</li>
                </ul>
              </div>
            </div>

            <div>
              <h3>Skill Breakdown</h3>

              <table>
                <tbody>
                  <tr>
                    <td>JavaScript</td>
                    <td><Rank i={ 10 } /></td>
                  </tr>
                  <tr>
                    <td>PHP</td>
                    <td><Rank i={ 10 } /></td>
                  </tr>
                  <tr>
                    <td>HTML 5</td>
                    <td><Rank i={ 9 } /></td>
                  </tr>
                  <tr>
                    <td>CSS 3</td>
                    <td><Rank i={ 9 } /></td>
                  </tr>
                  <tr>
                    <td>React</td>
                    <td><Rank i={ 9 } /></td>
                  </tr>
                  <tr>
                    <td>WordPress</td>
                    <td><Rank i={ 9 } /></td>
                  </tr>
                  <tr>
                    <td>MySQL</td>
                    <td><Rank i={ 8 } /></td>
                  </tr>
                  <tr>
                    <td>MongoDB</td>
                    <td><Rank i={ 8 } /></td>
                  </tr>
                  <tr>
                    <td>PostgreSQL</td>
                    <td><Rank i={ 7 } /></td>
                  </tr>
                  <tr>
                    <td>Bash / Zsh</td>
                    <td><Rank i={ 7 } /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className={ styles.projects } id="projects">
            <div>
              <h3>Projects I've Made</h3>

              {
                this.state.repos.length && this.state.repos.map((repo, i) => {
                  if (repo.fork) return;

                  return (
                    <div key={ i } className={ styles.repo }>
                      <strong>{ repo.name }</strong>
                      <em>{ repo.description }</em>
                      <a href={ repo.html_url } target="_blank">View on Github</a>
                    </div>
                  );
                })
              }
            </div>

            <div>
              <h3>Projects I Love</h3>

              {
                this.state.starred.length && this.state.starred.map((repo, i) => {
                  if (repo.fork) return;

                  return (
                    <div key={ i } className={ styles.repo }>
                      <strong>{ repo.name }</strong>
                      <em>{ repo.description }</em>
                      <a href={ repo.html_url } target="_blank">View on Github</a>
                    </div>
                  );
                })
              }
            </div>
          </section>

          <section className={ styles.about } id="about">
            <div>
              <h4>Code Specialty</h4>

              <div>
                My coding background comes from years of working with many companies and individuals
                promoting and selling subscriptions, physical products, software, and everything in-between.
                Because I work closely with clients my strengths lie in my ability to turn inspiration into reality,
                providing adequate user experience while nailing SEO and pagespeed factors through tools like SEM Rush,
                Google Analytics and Lighthouse, and various statistical averages across the world.
              </div>

              <p>
                A breakdown of my focuses is below:
              </p>

              <table>
                <tbody>
                  <tr><td>Backend</td><td><Rank i={ 10 } /></td></tr>
                  <tr><td>Frontend</td><td><Rank i={ 9 } /></td></tr>
                  <tr><td>SEO / Marketing</td><td><Rank i={ 8 } /></td></tr>
                  <tr><td>Management</td><td><Rank i={ 8 } /></td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <h4>Other Interests</h4>

              I have industry-relevant experience in the following demographics:

              <ul>
                <li>Ecommerce</li>
                <li>Cryptocurrency</li>
                <li>Automotive</li>
                <li>CRM Software</li>
                <li>Gaming</li>
                <li>Streaming and Video</li>
                <li>WebGL and in-browser graphics processing</li>
              </ul>

              <p>
                Have a project you need help with? <a href="#contact" style={{ color: 'blue', textDecoration: 'underline' }}>Let me know!</a>
              </p>
            </div>
          </section>

          <section className={ styles.philosophy } id="philosophy">
            <div>
              <h5>ICE Scoring</h5>

              <p>
                As a developer I prefer <a href="https://www.productplan.com/glossary/ice-scoring-model/" style={{ color: 'blue', textDecoration: 'underline' }}>ICE Scoring</a>,
                providing tasks with a measurable metric for priority. This is how I limit my intake of tasks and provide the most accurate timescales possible.
              </p>
            </div>

            <div>
              <h5>Issue Tracking and Task Management</h5>

              <p>
                GitHub Issues, JIRA, Confluence, Trello, Monday, and other platforms have been part of my journey as a developer, and I
                stand by any task management application that provides the same accountability. Story-driven development is nice, if not
                slightly outclassed by more modern approaches.
              </p>
            </div>

            <div>
              <h5>Markup-First Websites</h5>

              <p>
                The single biggest difference you'll find in my code compared to most developers is
                a simple, well-defined usage of HTML tags and core language functions, using specific standardized
                tags where applicable and relegating usage of frameworks and libraries to situations where there is no simpler choice.
              </p>
            </div>

            <div>
              <h5>Mobile-First CSS</h5>

              <p>
                With nearly 10 years of experience with media queries and modern CSS, I have accustomed to
                mobile-first development tactics to create beautiful responsive websites that benchmark well.
              </p>
            </div>

            <div>
              <h5>User Data Encryption</h5>

              <p>
                Security is at the top of my priority list as a developer, and I've worked with various encryption
                methodologies, including several independent custom integrations with low-level encryption support in
                many languages.
              </p>
            </div>

            <div>
              <h5>Headless CMS</h5>

              <p>
                Contentful, Strapi, and others are a mainstay in my development workflow, providing clients with easy access
                to updating content, products, images, and more for their sites with easy-to-understand flows through the JAM stack.
              </p>
            </div>

            <div>
              <h5>KISS Mentality</h5>

              <p>
                Following after the great minds of such as <a style={{ color: 'blue', textDecoration: 'underline' }} href="https://justinjackson.ca/words.html" target="_blank">Justin Jackson</a>,
                I believe that websites are only as good as their markup, and styles come second. I begin with the smallest possible
                deliverable and work out, following an Agile-esque MVP standard which helps me get more done faster.
              </p>
            </div>

            <div>
              <h5>Limiting Overhead</h5>

              <p>
                While many developers prefer to use prebuilt solutions such as WordPress plugins or a plethora of external NodeJS libraries,
                I prefer to keep things simple, with most websites not requiring much more than a static site generator and a small API server to
                perform at perfection.
              </p>
            </div>
          </section>
        </main>

        <aside className={ styles.contact } id="contact">
          <h6>Want to get in touch?</h6>
          <p>You can contact me using the form below.</p>

          <form method="post" action="/api/submit">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="text" name="company" placeholder="Company Name (optional)" />
            <input type="text" name="email" placeholder="Your Email" required />
            <textarea name="comments" placeholder="What would you like to say?" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </aside>

        <footer>
          Copyright &copy; { (new Date()).getFullYear() } Bruce Caldwell
        </footer>
      </div>
    )
  }
}

export default Home;
