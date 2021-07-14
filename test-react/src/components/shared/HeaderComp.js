import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { NavbarComp, CardComp, TitleComp } from '../index';

export const HeaderComp = ({ type }) => {
    // const miData = data.filter(array => array);
    const [cards] = useState([
        {
            id: 1,
            order: 1,
            icon: "<i class=\"icofont-visa\"></i>",
            number_id: '2671 5345 0969 3243',
            cvv: '347',
            valid: '06/22',
            name: 'david guetta',
            cName: 'card_purple',
        }
    ]);

    const [titleCard] = useState([
        {}
    ]);


    return (
        <>
            {
                type === 'home' &&
                <div >
                    <div className="header_curve">
                        <div className="header_curve__title">
                            <h1>
                                Be Smart Take Card
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consectetur inventore dolorum, esse aut accusantium enim quos voluptates nesciunt nisi repudiandae rem?
                            </p>
                            <div>
                                <button>
                                    Apply for card
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="header_card">
                        <CardComp data={cards} title={titleCard} />
                    </div>
                </div>
            }
            {
                type !== 'home' &&
                <div >
                    <div className="header_curve">
                        <div className="header_curve__title">
                            <h1>
                                Be Smart Take Card
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consectetur inventore dolorum, esse aut accusantium enim quos voluptates nesciunt nisi repudiandae rem?
                            </p>
                            <div>
                                <button>
                                    Apply for card
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

HeaderComp.propTypes = {
    type: PropTypes.string.isRequired
}

// export default HeaderComp

