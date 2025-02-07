/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* Adewale Joshua Portfolio (AJP)
*/


/**
* author: OTechCup
* copyright: &copy; 2022 - new Date().getFullYear() All Rights Reserved | Exfac
* credits: ["Mr. O"]
* version: v0.1.0
* maintainer: OTechCup
* email: support@exfac.info
*/


// import modules
import { select, on } from "./App.js";


/**
 * Porfolio isotope and filter
 */
function initPortfolioJS() {
    let portfolioContainer = select(".portfolio-container");

    if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: ".portfolio-item",
            layoutMode: "fitRows",
        });

        let portfolioFilters = select("#portfolio-flters li", true);

        on("click", "#portfolio-flters li", function (e) {
            e.preventDefault();

            portfolioFilters.forEach(function (el) {
                el.classList.remove("filter-active");
            });

            this.classList.add("filter-active");

            portfolioIsotope.arrange({
                filter: this.getAttribute("data-filter"),
            });
        }, true);
    };

    /**
     * Initiate portfolio lightbox 
     */
    const portfolioLightbox = GLightbox({
        selector: ".portfolio-lightbox",
    });

    /**
     * Initiate portfolio details lightbox 
     */
    const portfolioDetailsLightbox = GLightbox({
        selector: ".portfolio-details-lightbox",
        width: "90%",
        height: "90vh",
    });

    /**
     * Portfolio details slider
     */
    new Swiper(".portfolio-details-slider", {
        speed: 400,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
    });
};


export default initPortfolioJS;
