import React, { useState } from "react";
import buyImage from "./assets/How_to_Buy_Art.jpg";
import "./buy.css";

function BuyProducts() {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqData = [
        {
            question: "How to bid in MuzeoLux auctions?",
            answer: "To participate in a MuzeoLux auction, you need to register on our website and complete the necessary verification steps. Once registered, you can place bids on a wide range of collectible items, including fine art, jewelry, timepieces, and more."
        },
        {
            question: "How soon before the auction does a prospective bidder need to register?",
            answer: "If you are not previously registered with us, we recommend starting the registration process at least 4 business days before the auction date to ensure your account is verified in time."
        },
        {
            question: "What steps does the registration process entail?",
            answer: (
                <ol>
                    <li>Create an account on our platform.</li>
                    <li>Submit identification documents for verification.</li>
                    <li>Agree to our auction terms and conditions.</li>
                    <li>Receive confirmation once your account is approved.</li>
                </ol>
            )
        },
        {
            question: "Which documents do I need to submit?",
            answer: "For identity verification, we require a government-issued ID for individuals or business registration documents for companies."
        },
        {
            question: "Can I change my contact details after registering?",
            answer: "Yes, you can update your contact details in your MuzeoLux account settings. Some changes may require additional verification."
        },
        {
            question: "How is the bid increment determined?",
            answer: "Bid increments are pre-defined and depend on the current bid value. The increment structure will be displayed on the bidding page for each item."
        },
        {
            question: "What is an absentee/proxy bid?",
            answer: "A proxy bid allows you to set a maximum amount you’re willing to pay for an item. The system will automatically increase your bid (within your limit) if another bidder places a higher offer."
        },
        {
            question: "How do I pay for my purchase?",
            answer: "If you win a bid, you will receive an invoice with the final amount and payment instructions. MuzeoLux accepts payments via bank transfer, credit/debit cards, and approved digital payment methods."
        }
    ];

    return (
        <div className="buyProducts">
            <h2>Buy</h2>
            <div className="img-container">
                <img src={buyImage} alt="Buy Art" />
            </div>

            <div className="Buy-Details">
                <p>
                    As one of India’s premium auction houses, we offer collectors an opportunity to bid on a range of categories
                    including modern and contemporary art, jewellery, fine silver, timepieces, textiles, celebrity memorabilia,
                    rare books, numismatic, philately, and vintage cars online. We aim to provide every client with the best buying experience possible.
                </p>

                <ul className="Reason-to-buy">
                    <h3>Why MuzeoLux:</h3>
                    <li>With round-the-year auctions encompassing our vast range of categories and private sales services, MuzeoLux provides you with multiple opportunities to buy with us.</li>
                    <li>Each of our categories is represented by a team of specialists with in-depth market insights and years of experience.</li>
                    <li>Our dedicated team of experts and our commitment to a research-based approach ensure that you can bid with the utmost confidence in our auctions.</li>
                    <li>We provide a quick and convenient bidding process in our auctions through our website, allowing you a hassle-free experience.</li>
                </ul>

                <ul className="Reason-to-buy">
                    <h3>Our Process:</h3>
                    <li>Our team of specialists thoroughly examine objects to ensure authenticity before making them available for auction.</li>
                    <li>We examine ownership history, supporting documentation, and relevant databases to allow for a smooth transfer of ownership.</li>
                    <li>We determine each item's market worth and establish an estimate range based on our expertise to provide you with insight while participating in live bidding.</li>
                </ul>

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
        </div>
    );
}

export default BuyProducts;
