import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Projet participatif</h2>
                    </header>
                    <p>Nous vous invitons à proposer vos idées concernant les nouvelles fonctionnalités que vous aimeriez, n'hésitez pas à envoyer un mail sur contact@giletsjaunes-paysbasque.org (sujet du mail: site internet)</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic05} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Bibliothèque de document</h3>
                            </header>
                            <p>C'est l'objectif de la prochaine version, vous proposer des documents triés selon leur type: documents internes, articles, vidéos, etc...</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button">En savoir plus</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="#" className="image">
                        <img src={pic06} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Calendrier</h3>
                            </header>
                            <p>Objectif à plus long terme, nous souhaitons mettre à votre disposition sur ce site un calendrier recense l'ensemble de nos activités.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button">En savoir plus</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
