import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

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
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <a href="https://www.facebook.com/groups/526136141221635/" target="_blank">
                                <header className="major">
                                    <h3>Facebook</h3>
                                    <p>Notre page est libre d'accès à chacun,<br />
                                        vous y trouverez des informations liées<br />
                                        à la communauté, vous pouvez aussi poster<br />
                                        librement tout type de contenue.</p>
                                </header>
                            </a>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <a href="https://discord.gg/fYRcubC" target="_blank">
                                <header className="major">
                                    <h3>Discord</h3>
                                    <p>Plateforme accessible sur votre navigateur ou via une application, cet outil<br/>
                                    vous permettra de rentrer en communication direct avec l'ensemble de nos<br/>
                                    membres très rapidement sur l'ensemble des sujets qui vous concernent.</p>
                                </header>
                            </a>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Les Assemblés générales</h3>
                                <p>Elles nous permettent de voter de façons collégiales des propositions,<br/>
                                qui peuvent émaner des ateliers participatifs, d'une recherche collective,<br/>
                                individuelle, ou autres, à vous d'être force de propositions!
                                </p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
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
