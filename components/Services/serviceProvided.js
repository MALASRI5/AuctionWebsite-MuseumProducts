import React from "react";
import Advisory from './assets/Advisory.jpg'
import Restoration from './assets/Restoration-min.jpg'
import MuseumServices from './assets/Museum-Services.jpg'
import PostSale from './assets/Post-Sale-Services.jpg'
import Storage from './assets/Storage-min.jpg'
import privateServices from './assets/Us-min.jpg'
import CollectionServices from './assets/Collection-Service-1-min.jpg'
import Adhitya from './assets/Adithya.png'
import Aishwarya from './assets/Aishwarya.png'
import Yazhini from './assets/yazhini.jpg'
import './service.css'

const ServicesProvided = () => {
    return (
        <div className="service">
            <h1 style={{ textAlign: 'center', color: 'goldenrod' }}>Services</h1>
            <div className="service-types client">
                <img src={Advisory} alt="Client Advisory"></img>
                <div>
                    <h1>Client Advisory</h1>
                    <p>
                        At <strong>MuzeoLux</strong>, our Client Advisory service offers tailored guidance for collectors, whether novice or seasoned.
                        We assign a dedicated advisor to each client to understand their <strong>goals, vision, and aesthetic preferences</strong>.
                        With access to a global network of galleries, private sellers, and institutions, our team sources rare and meaningful pieces aligned with your collection.
                        We offer <strong>objective, research-backed insights</strong> to help clients make informed acquisition decisions across diverse collectible categories.
                        Whether you're building a personal gallery or expanding an institutional archive, we support your journey with integrity and discretion.
                        Our advisors also guide legacy planning, investment strategy, and collection management to ensure long-term value.
                    </p>

                </div>
            </div>
            <div className="service-types restoration">
                <div>
                    <h1>Restoration Services</h1>
                    <p>
                        At <strong>MuzeoLux</strong>, our Restoration Services are designed to preserve and revive the beauty of treasured objects.
                        We restore paintings, sculptures, vintage cars, rare books, textiles, and more using a blend of <strong>traditional craftsmanship and scientific techniques</strong>.
                        Every piece is carefully studied to ensure appropriate methods are applied—respecting its age, materials, and cultural significance.
                        We address issues caused by time, climate, or mishandling, such as fading, cracking, and warping, with utmost precision.
                        Our goal is not only to repair but to <strong>honor the original character</strong> of each artifact.
                        With our expertise, we help your historical treasures continue telling their stories for generations to come.
                    </p>

                </div>
                <img src={Restoration} alt="Restoration"></img>
            </div>
            <div className="service-types PostSale">
                <img src={PostSale} alt="PostSale"></img>
                <div>
                    <h1>Post Sale Services</h1>
                    <p>
                        Our <strong>Post Sale Services</strong> at MuzeoLux ensure seamless support after acquisition. From coordinating secure packaging and shipment to
                        offering expert installation and collection integration, we provide full-spectrum assistance. We help buyers manage documentation, valuation, and
                        insurance, and advise on care guidelines to preserve acquired pieces. Our specialists ensure that each item reaches you in pristine condition and is
                        displayed or stored properly. Beyond logistics, we also offer <strong>portfolio reviews and strategic planning</strong> for future purchases.
                        Whether for private clients or institutions, our commitment doesn’t end at the sale—we build enduring relationships to support your evolving collection.
                    </p>
                </div>
            </div>
            <div className="service-types Private">
                <div>
                    <h1>Private Services</h1>
                    <p>
                        Our <strong>Private Services</strong> at MuzeoLux are designed to offer discreet, one-on-one support for high-value clients. We work closely with individuals
                        and families to <strong>build, manage, and protect personal collections</strong> with the utmost confidentiality. This includes advisory on acquisition, legacy
                        planning, private exhibitions, and even bespoke sourcing of rare works. We tailor each experience to reflect the client’s tastes and long-term vision,
                        ensuring the collection evolves meaningfully. Our global connections and deep expertise allow us to deliver exclusive opportunities and culturally significant works.
                        Whether for passion, investment, or heritage, Muzeolux provides <strong>trusted and personal guidance</strong> every step of the way.
                    </p>
                </div>
                <img src={privateServices} alt="Private Services"></img>
            </div>
            <div className="service-types collection">
                <img src={CollectionServices} alt="collection"></img>
                <div>
                    <h1>Collection Services</h1>
                    <p>
                        At MuzeoLux, our <strong>Collection Services</strong> support the complete lifecycle of managing and growing your collection.
                        We help with cataloguing, valuation, conservation planning, and curatorial strategy.
                        Our team ensures every piece is <strong>documented, cared for, and aligned</strong> with your aesthetic and investment goals.
                        We also offer condition reporting, digital archiving, and inventory audits for private collectors, institutions, and estates.
                        Whether you're acquiring new works or reassessing your current holdings, MuzeoHub helps maximize the cultural and financial value of your collection.
                        With a focus on preservation, strategic planning, and seamless administration, our services are designed to <strong>elevate and safeguard your legacy</strong>.
                    </p>
                </div>
            </div>
            <div className="service-types Museum">
                <div>
                    <h1>Museum Services</h1>
                    <p>
                        Our <strong>Museum Services</strong> cater to institutions looking to preserve, expand, or professionally manage their collections.
                        We offer exhibition planning, conservation consultation, loan coordination, and <strong>curatorial support</strong> tailored to museum needs.
                        Our experienced team collaborates with directors and curators to enhance collection visibility and ensure compliance with international standards.
                        We also assist with acquisition strategy, provenance research, and educational programming to connect audiences with artworks in meaningful ways.
                        MuzeoHub is dedicated to supporting institutions in <strong>preserving cultural heritage</strong> and promoting knowledge through expertly managed museum partnerships.
                    </p>
                </div>
                <img src={MuseumServices} alt="Museum"></img>
            </div>
            <div className="service-types Storage">
                <img src={Storage} alt="Storage"></img>
                <div>
                    <h1>Storage Services</h1>
                    <p>
                        MuzeoHub offers secure, climate-controlled <strong>Storage Services</strong> to protect your valuable collectibles and artworks.
                        Our facilities are designed to maintain optimal environmental conditions to prevent deterioration caused by heat, humidity, or light.
                        Whether for short-term or long-term storage, we ensure <strong>maximum security, discretion, and accessibility</strong>.
                        Clients receive detailed inventory records, condition updates, and optional insurance coverage. We also provide custom crating, transport solutions, and white-glove handling services.
                        Whether you’re relocating, renovating, or simply expanding your collection, MuzeoHub delivers peace of mind with expert care and strategic storage management.
                    </p>
                </div>

            </div>
            <div className="experts-container">
                <h2 style={{ textAlign: 'center', color: 'goldenrod' }}>Talk to Our Experts</h2>
                <div className="experts-banner">
                    <p>Consult with our professionals</p>
                    <div className="experts-scroll">

                        <div className="expert-box">
                            <img src={Yazhini} alt="Restoration" />
                            <h4>Yazhini Pandian</h4>
                            <h5>MuzeoLux</h5>
                            <a
                                href="mailto:yazhinipandian.muzeolux@gmail.com?subject=Consultation%20Request&body=Hi%20Yazhini%2C%0A%0AI%20would%20like%20to%20discuss%20..."
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'inherit', textDecoration: 'none' }}
                            >
                                yazhinipandian.muzeolux@gmail.com
                            </a>
                        </div>

                        <div className="expert-box">
                            <img src={Adhitya} alt="Client" />
                            <h4>Aditiya Sharma</h4>
                            <h5>Sr. Vice President</h5>
                            <a
                                href="mailto:aditiyasharma.muzeolux@gmail.com?subject=Client%20Advisory&body=Hi%20Aditiya%2C%0A%0AI%20need%20assistance%20with%20..."
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'inherit', textDecoration: 'none' }}
                            >
                                aditiyasharma.muzeolux@gmail.com
                            </a>
                        </div>

                        <div className="expert-box">
                            <img src={Aishwarya} alt="Restoration" />
                            <h4>Aishwarya Chandurkar</h4>
                            <h5>Restoration Department</h5>
                            <a
                                href="mailto:aishwaryachandurkar.muzeolux@gmail.com?restoration%&body=Hi%20Aishwarya%2C%0A%0AI%20have%20a%20question%20about%20..."
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'inherit', textDecoration: 'none' }}
                            >
                                aishwaryachandurkar.muzeolux@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ServicesProvided;
