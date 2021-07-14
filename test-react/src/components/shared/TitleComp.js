import React from 'react';
import PropTypes from 'prop-types';

export const TitleComp = ({ data }) => {
    const miData = data.filter(array => array);

    return (
        <div>
            {
                miData.map((item, index) => {
                    return (
                        <div key={index} className="container_title">
                            <div className="container_title__content">
                                <h1>
                                    {item.title}
                                </h1>
                                <p>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}


TitleComp.propTypes = {
    data: PropTypes.array.isRequired
}