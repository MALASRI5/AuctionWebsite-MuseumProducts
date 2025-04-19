import React, { useState } from 'react';
import SellImage from './assets/How_to_Sell_Art.jpg';
import Search from './assets/Search.jpg';
import HandShake from './assets/HandShake.jpg'
import Hammer from './assets/Hammer.jpg'
import Estimate from './assets/estimate.png'
import './sell.css'


const SellProducts = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    }; 
    const faqData = [
        {
            question: "How long does it take to submit my item for auction?",
            answer: "Submitting your item to MuzeoLux takes only 5–10 minutes. Simply fill out our submission form and upload images along with relevant details."
        },
        {
            question: "How far in advance of a sale should I submit my item?",
            answer: "We recommend submitting your item at least 4–6 weeks prior to the scheduled auction date to allow time for evaluation, cataloging, and marketing."
        },
        {
            question: "Is my estimate free of charge?",
            answer: "Yes, the estimate provided by MuzeoLux is completely free and without any obligation to sell."
        },
        {
            question: "Can I request an estimate even if I'm not ready to sell?",
            answer: "Absolutely! You're welcome to request an estimate for informational purposes, even if you're not ready to proceed with the sale."
        },
        {
            question: "How long does it take to receive an estimate?",
            answer: "Our team usually provides an estimate within 3–5 business days after receiving all necessary details and images."
        },
        {
            question: "What is an Estimate Price?",
            answer: "An Estimate Price is a suggested price range that reflects your item's potential market value, guiding both sellers and buyers during the auction."
        },
        {
            question: "How is the Estimate Price determined?",
            answer: "Our experts assess your item based on factors such as rarity, condition, artist/maker reputation, provenance, and market trends."
        },
        {
            question: "What information should I provide with my submission?",
            answer: "Include clear photos, dimensions, artist/maker name, historical background or provenance, certificates (if available), and any prior valuation or price expectations."
        },
        {
            question: "How do I sell my item through MuzeoLux?",
            answer: "Submit your item for evaluation, receive a professional estimate, and once approved, we handle cataloging, marketing, and selling. After a successful auction, you’ll receive your payout."
        },
        {
            question: "What types of items does MuzeoLux accept?",
            answer: "We accept museum-grade collectibles such as fine art, historical artifacts, rare books, sculptures, antique furniture, coins, and luxury collectibles."
        },
        {
            question: "How to bid in MuzeoLux auctions?",
            answer: "To participate in a MuzeoLux auction, you need to register on our website and complete the necessary verification steps. Once registered, you can place bids on a wide range of collectible items, including fine art, jewelry, timepieces, and more."
        }
    ];


    return (
        <div className='sell'>
            <h2>Sell</h2>
            <div className='Img-container'>
                <img src={SellImage} alt='Indian arts' width={1150}></img>
            </div>
            <p>
                As one of the most trusted auction houses in the country, MuzeoLux has been a market leader
                for the past 5 years.With a strong research-based curation and a vast, ever-growing network
                of over 5000 collectors, we’re committed to finding the right buyers for each item. We pride
                ourselves on our team of leading experts in over 15 diverse categories which include original
                paintings, jewellery, fine silver, timepieces, textiles, celebrity memorabilia, rare books,
                numismatic, philately and vintage cars. You can find more information about our different departments here.
            </p>
            <p>
                Selling paintings has never been easier. Whether you're an artist, collector or just someone
                who wants to sell, you can sell paintings online on AstaGuru. Our specialists ensure that your
                selling experience is convenient and easy, providing you with end-to-end services. From valuation
                and cataloguing to marketing to potential buyers, auctioning and shipping, we make sure you have
                the right guidance and assistance every step of the way.
            </p>

            <h2>Please Note</h2>
            <ul>
                <li>The valuation cannot be rushed since MuzeoLux is committed to providing the highest level of service.</li>
                <li>Our margin  will get deducted along with agreed-upon expenses from the hammer price.</li>
                <li>As the owner, you will have to bear packing, shipping, and insurance charges. </li>
                <li>An invoice for restoration, reframing, stretching, or any other steps undertaken to ready the
                    property for final presentation will be sent to you, irrespective of the auction's outcome.
                </li>
            </ul>


            <div className='Steps'>
                <h3>It works with 3 easy steps</h3>
                <div className='Three-steps'>
                    <div className='Step One'>
                        <figure>
                            <img src={Search} alt='search'></img>
                            <figcaption>
                                <h4>1. Evaluation</h4>
                                <p className='Step-List'> If you are interested in selling in auction with us, you can contact us
                                    through our listed numbers or e-mail and share relevant information about
                                    what you wish to sell. This will help specialists from the relevant department
                                    best examine your work for condition, age, provenance and other important
                                    information required for auction.</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className='Step Two'>
                        <figure>
                            <img src={HandShake} alt='search'></img>
                            <figcaption>
                                <h4>2. Estimation </h4>
                                <p className='Step-List'>
                                    Once the property is deemed appropriate for auction, we will contact you with an estimate based on our specialists’
                                    expertise and knowledge of the market. MuzeoLux will agree upon a lower and higher estimate with you after which you
                                    will be asked to sign an agreement. The estimates will then be shared with prospective buyers through our team, online
                                    platform and catalogue.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className='Step Three'>
                        <figure>
                            <img src={Hammer} alt='search'></img>
                            <figcaption>
                                <h4>3. Auction & Shipping</h4>
                                <p className='Step-List'>
                                    MuzeoLux can arrange for your paintings to be shipped to us for cataloguing and review.
                                    We will then present it at auction for bidding. Once your painting is sold, you will be
                                    informed of the price it achieved at auction and your proceeds post deductions that were
                                    agreed upon prior to the auction.We will then issue the payment to you after securing it from the buyer.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            <div className='estimate'>
                <div className='est-detls'>
                    <h3>
                        Sell with Us
                    </h3>
                    <p>
                        Wonder how much your art or object might be worth and how to sell it?
                        Simply follow the steps below and our specialists will review your submission
                        at no cost and provide preliminary estimates for items
                        that can be included in one of our sales channels in 5 to 7 business days.
                    </p>
                    <button>Get an estimate</button>
                </div>
                <div className='est-img'>
                    <img src={Estimate} alt='estimate price' width={500} height={400}></img>
                </div>
            </div>
            <div className='demo of Muzeolux'>
                <div className='demo-detls'>
                    <h3 style={{ color: 'goldenrod' }}>Its effortless to sell with MuzeoLux</h3>
                    <p>
                        Are you curious about the potential value of your artwork or object and how to sell it?
                        Just complete the steps listed above, and our experts will analyse your application at
                        no cost and offer rough estimates for goods that could be featured in one of our auctions.
                        To assist with this procedure, a member of our department will get in touch with you and
                        help facilitate this process.
                    </p>

                </div>
                <div className='demo-video'>
                    <img src={Hammer} alt='demo video' width={400} height={300} ></img>
                </div>
            </div>
            <h2>FAQs</h2>
            {faqData.map((faq, index) => (
                <div key={index} className="faq-container">
                    <div className="faq-item" onClick={() => toggleFaq(index)}>
                        <span className="faq-icon">{openFaq === index ? "−" : "+"}</span>
                        <span>{faq.question}</span>
                    </div>
                    {openFaq === index && (
                        <div className="faq-answer">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SellProducts; 
