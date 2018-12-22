import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Gilets jaunes - Pays basque"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" style={{ backgroundColor: '#FFFF6B', color: '#000' }}>
                        <div className="inner">
                            <header className="major">
                                <h2 style={{ color: '#000' }} >Le forum de gilets jaunes</h2>
                            </header>
                            <p>Notre forum est un espace de discussion libre. Il est organisé en fonction des sujets que vous souhaitez aborder.</p>
                            <ul className="actions">
                                <li><a style={{ color: '#000' }} className="button" href="http://forum.giletsjaunes-paysbasque.org/" target="_blank" rel="noopener noreferrer">Rejoindre le forum</a></li>
                            </ul>
                        </div>
                    </section>
                    <section id="two" className="tiles">
                        <article style={{ backgroundColor: '#3b5998' }}>
                            <a href="https://www.facebook.com/groups/526136141221635/" target="_blank" rel="noopener noreferrer">
                                <header className="major">
                                    <h3>Facebook</h3>
                                    <p>Notre page est libre d'accès à chacun,<br />
                                        vous y trouverez des informations liées<br />
                                        à la communauté, vous pouvez aussi poster<br />
                                        librement tout type de contenue.</p>
                                </header>
                            </a>
                        </article>
                        <article style={{ backgroundColor: '#7289da' }}>
                            <a href="https://discord.gg/fYRcubC" target="_blank" rel="noopener noreferrer">
                                <header className="major">
                                    <h3>Discord</h3>
                                    <p>Plateforme accessible sur votre navigateur ou via une application, cet outil<br/>
                                    vous permettra de rentrer en communication direct avec l'ensemble de nos<br/>
                                    membres très rapidement sur l'ensemble des sujets qui vous concernent.</p>
                                </header>
                            </a>
                        </article>
                        <article style={{ backgroundColor: '#FFFF84' }}>
                            <header className="major">
                                <h3>Les Assemblés générales</h3>
                                <p>Elles nous permettent de voter de façons collégiales des propositions,<br/>
                                qui peuvent émaner des ateliers participatifs, d'une recherche collective,<br/>
                                individuelle, ou autres, à vous d'être force de propositions!
                                </p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundColor: '#B5FFC8' }}>
                            <header className="major">
                                <h3>Les Ateliers participatifs</h3>
                                <p>Ils permettent de réfléchir en profondeur<br/>
                                sur des sujets précis, aller au bout des choses,<br/>
                                découvrir de nouvelles problématiques, se creuser<br/>
                                la tête!
                                </p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
