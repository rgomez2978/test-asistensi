import React from 'react';
import { TitleComp } from "../index";
import PropTypes from 'prop-types';

export const CardComp = ({ data, title }) => {
    const miTitle = title.filter(array => array);
    const miData = data.filter(array => array);


    return (
        <div className="card_container">
            <TitleComp data={miTitle} />
            <div className="card_container__content">
                {
                    miData.map((item) => {
                        return (
                            <div key={item.id} className={`card_container__content__item ${item.cName}`}>
                                <div>
                                    <div className="card_container__content__item__icon">
                                        <span dangerouslySetInnerHTML={{ __html: item.icon }} ></span>
                                    </div>
                                    <div className="card_container__content__item__chip">
                                        <img src="./assets/img/chip.png" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="card_container__content__item__numberid">
                                        {item.number_id}
                                    </div>
                                    <div className="card_container__content__item__date">
                                        <span className="cvv">
                                            {item.cvv}
                                        </span>
                                        <div className="valid">
                                            <div className="valid__text">
                                                <span>valid thru</span>
                                                <i className="icofont-caret-right"></i>
                                            </div>
                                            <div className="valid__year">
                                                <span>month / year</span>
                                                <p>{item.valid}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card_container__content__item__name">
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}


CardComp.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.array.isRequired

}