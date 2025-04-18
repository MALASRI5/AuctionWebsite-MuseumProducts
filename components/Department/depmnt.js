import React from "react";
import './dept.css'
import ClassicVintage from './assets/classicVintageAutomobiles.jpg'
import TimePieces from './assets/Timepieces.jpg'
import ContemporaryArts from './assets/Contemporary-Indian-Art.jpg'
import Numismatics from './assets/numismatics-and-philatelic.jpg'
import Textile from './assets/textiles.jpg'
import FineWriting from './assets/Fine-Writing-Instruments_1.jpg'
import FurnitureDecoratives from './assets/Furniture-&-decoratives.jpg'
import IndianAntiques from './assets/indian-antiques.jpg'
import InternationalArts from './assets/InternationalArt.jpg'
import JewellerySilver from './assets/jewellery-and-silver_2.jpg'
import Memorabilia from './assets/memorabilia.jpg'
import PrivateEstateSale from './assets/Private-estate-sales_2.jpg'
import Menuscripts from './assets/rare-books-&-menuscripts_1.jpg'
import ScienceHistory from './assets/Science-And-Natural-History.jpg'
const Departments = () => {
    return (
        <div className="department-section">
            <div>
                <h2>
                    Departments
                </h2>
                <div className="dept-details">
                    <p>
                        Founded in 2020, Muzeolux is a globally respected name in the art and luxury market.
                        Known for its expertise in curated live and online auctions, as well as discreet private
                        sales, Muzeolux offers a comprehensive suite of services tailored to the evolving needs of
                        collectors, investors, and enthusiasts. These include art appraisal, collection management,
                        luxury asset advisory, and educational programs.
                    </p>
                    <p>
                        With over 15 specialized departments, Muzeolux ensures a seamless, personalized experience for buying and selling fine art, high jewelry, timepieces, rare collectibles, and design objects beyond the conventional auction calendar. Every client engagement is guided by Muzeolux specialists, offering bespoke support at the client’s preferred pace and discretion.
                    </p>
                </div>
            </div>
            <div className="dept-imgContainer">
                <div className="dept-img">
                    <img src={ClassicVintage} alt="classic Vintage Automobiles"></img>
                    <p>classic and Vintage Automobiles</p>
                </div>
                <div className="dept-img">
                    <img src={FurnitureDecoratives} alt="Furniture and Decoratives"></img>
                    <p>Furniture and Decoratives Arts</p>
                </div>
                <div className="dept-img">
                    <img src={TimePieces} alt="Time Pieces"></img>
                    <p>Time Pieces</p>
                </div>
                <div className="dept-img">
                    <img src={Numismatics} alt="Numismatics" ></img>
                    <p>Numismatics</p>
                </div>
                <div className="dept-img">
                    <img src={FineWriting} alt="Fine Writing"></img>
                    <p>Fine Writing and Arts </p>
                </div>
                <div className="dept-img">
                    <img src={Memorabilia} alt="Memorabilia"></img>
                    <p>Memorabilia</p>
                </div>
                <div className="dept-img">
                    <img src={PrivateEstateSale} alt="Private Estate Sale"></img>
                    <p>Private Estate Sale</p>
                </div>
                <div className="dept-img">
                    <img src={JewellerySilver} alt="Jewellery and Silver"></img>
                    <p>Jewellery and Silver</p>
                </div>

                <div className="dept-img">
                    <img src={Menuscripts} alt="Menuscripts"></img>
                    <p>Menuscripts and Rare Books</p>
                </div>
                
                <div className="dept-img">
                    <img src={ContemporaryArts} alt="Contemporary Indian Arts"></img>
                    <p>Contemporary Indian Arts</p>
                </div>
                <div className="dept-img">
                    <img src={IndianAntiques} alt="Indian Antiques"></img>
                    <p>Indian Antiques</p>
                </div>
                <div className="dept-img">
                    <img src={Textile} alt="Textile"></img>
                    <p>Textile</p>
                </div>
                <div className="dept-img">
                    <img src={ScienceHistory} alt="Science and History"></img>
                    <p>Science and Natural History</p>
                </div>
                <div className="dept-img">
                    <img src={InternationalArts} alt="International Arts"></img>
                    <p>International Arts</p>
                </div>
            </div>


        </div>
    );
};

export default Departments;
