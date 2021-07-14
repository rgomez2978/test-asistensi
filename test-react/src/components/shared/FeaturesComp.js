import React from 'react';
import PropTypes from 'prop-types';
import { TitleComp } from "../index";

export const FeaturesComp = ({ data, title }) => {
    const miTitle = title.filter(array => array);
    const miData = data.filter(array => array);
    return (
        <section className="container_features">
            <TitleComp data={miTitle} />
            <div className="container_features__content">
                {
                    miData.map((item) => {
                        return (
                            <div key={item.id} className="container_card">
                                <div className="container_card__content">
                                    <div className="container_card__content__img">
                                        <span dangerouslySetInnerHTML={{ __html: item.icon }} ></span>
                                    </div>
                                    <div className="container_card__content__text">
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}



FeaturesComp.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.array.isRequired

}