import React from 'react';
import PropTypes from 'prop-types';
import { TitleComp } from "../index";

export const BenefitsComp = ({ data, title }) => {
    const miTitle = title.filter(array => array);
    const miData = data.filter(array => array);

    return (
        <section className="container_benefits">
            <TitleComp data={miTitle} />
            <div className="container_benefits__content">
                {
                    miData.map((item) => {
                        return (
                            <div key={item.id} className={`container_benefits__content__item ${item.position === 'left' ? 'item-left' : 'item-right'}`}>
                                <div className="container_benefits__content__item__img">
                                    <img src={item.url} alt="" />
                                </div>
                                <div className="container_benefits__content__item__text">
                                    <h2>{item.title}</h2>
                                    <p >{item.description}</p>
                                    <button>{item.btn_title}</button>
                                </div>
                            </div>
                        );
                    })
                }


            </div>
        </section>

    )
}


BenefitsComp.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.array.isRequired
}