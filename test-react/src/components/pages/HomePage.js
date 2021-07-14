import React, { useState } from 'react';
import { FeaturesComp, BenefitsComp, CardComp, HeaderComp, NavbarComp } from "../index";


export const HomePage = () => {

    const [titleFeatures] = useState([
        {
            id: 1,
            order: 1,
            title: 'Get your Card',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolores error cupiditate reiciendis Dolorum dolores error cupiditate reiciendis tetur?',
        }
    ]);

    const [features] = useState([
        {
            id: 1,
            order: 1,
            icon: "<i class=\"icofont-edit\"></i>",
            title: "application online",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur mollitia incidunt culpa. Magnam dolorum ea sit vero. accusamus dolor sint.",
        },
        {
            id: 2,
            order: 2,
            icon: "<i class=\"icofont-file-text\"></i>",
            title: "get an approval",
            description: "Lorem ipsum dolor sit amet conspa. Magnam  accusamus dolor sint.",

        },
        {
            id: 3,
            order: 3,
            icon: "<i class=\"icofont-ui-v-card\"></i>",
            title: "card delivery",
            description: "Lorem psum dolor sit amet c psum dolor sit amet cipsum dolor sit amet conspa. Magnam  accusamus dolor sint.",

        }

    ]);

    const [titleBenefits] = useState([
        {
            id: 1,
            order: 1,
            title: 'Our Benefits',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolores error cupiditate reiciendis Dolorum dolores error cupiditate reiciendis tetur?',
        }
    ]);
    const [benefits] = useState([
        {
            id: 1,
            order: 1,
            position: "left",
            url: "./assets/img/celular2.png",
            title: "Purchase anytime",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur mollitia incidunt culpa. Magnam dolorum ea sit vero. accusamus dolor sint.",
            btn_title: "apply to card"

        },
        {
            id: 2,
            order: 2,
            position: "right",
            url: "./assets/img/punto2.png",
            title: "Purchase anytime",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur mollitia incidunt culpa. Magnam  accusamus dolor sint.",
            btn_title: "Apply",

        }

    ]);

    const [titleProducts] = useState([
        {
            id: 1,
            order: 1,
            title: 'Chose Your Card',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum  Dolorum dolores error cupiditate reiciendis tetur?',
        }
    ]);
    const [products] = useState([
        {
            id: 1,
            order: 1,
            icon: "<i class=\"icofont-visa\"></i>",
            number_id: '2671 5345 0969 3243',
            cvv: '347',
            valid: '06/22',
            name: 'david guetta',
            cName: 'card_purple',
        }, {
            id: 2,
            order: 2,
            icon: "<i class=\"icofont-visa\"></i>",
            number_id: '1234 3225 0898 1123',
            cvv: '666',
            valid: '01/20',
            name: 'antonio perez',
            cName: 'card_aqua',
        }, {
            id: 3,
            order: 3,
            icon: "<i class=\"icofont-visa\"></i>",
            number_id: '4467 5899 4157 8992',
            cvv: '119',
            valid: '09/21',
            name: 'annabella diaz',
            cName: 'card_pink',
        }
    ]);

    return (
        <div className="animate__animated animate__fadeIn">
            <FeaturesComp data={features} title={titleFeatures} />
            <BenefitsComp data={benefits} title={titleBenefits} />
            <CardComp data={products} title={titleProducts} />
        </div>
    )
}
