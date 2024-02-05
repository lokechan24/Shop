import React from "react";
import MainCarousel from "../../component/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../component/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/mens_kurta";
import { mens_shoes } from "../../../Data/mens_shoes";
import { mens_shirt } from "../../../Data/mens_shirt";
import { womens_saree } from "../../../Data/womens_saree";
import { womens_dress } from "../../../Data/womens_dress";
import { womens_kurta } from "../../../Data/womens_kurta";


const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <div className="spce-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
                <HomeSectionCarousel data={mens_shoes} sectionName={"Men's Shoes"}/>
                <HomeSectionCarousel data={mens_shirt} sectionName={"Men's Shirt"}/>
                <HomeSectionCarousel data={womens_saree} sectionName={"Women's Saree"}/>
                <HomeSectionCarousel data={womens_dress} sectionName={"Women's Dress"}/>
                <HomeSectionCarousel data={womens_kurta} sectionName={"Women's kurta"}/>
            </div>
        </div>
    );
}

export default HomePage;
