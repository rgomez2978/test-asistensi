import React from 'react';
import { Link } from 'react-router-dom';
import { MenuLevel1, MenuLevel2 } from '../../data/FooterData';

export const FooterComp = () => {
    const arrayLevel1Products = MenuLevel1[0].products.filter(array => array);
    const arrayLevel1Developers = MenuLevel1[0].developers.filter(array => array);
    const arrayLevel1Company = MenuLevel1[0].company.filter(array => array);
    const arrayLevel1NewsLetter = MenuLevel1[0].newsletter.filter(array => array);
    const arrayLevel2Options = MenuLevel2[0].options.filter(array => array);
    const arrayLevel2Socilas = MenuLevel2[0].socials.filter(array => array);
    return (
        <section>
            <div className="footer_container level1">
                {
                    arrayLevel1Products.map((item) => {
                        return (
                            <div key={item.id} className="level1__subContainer">
                                <div className="subContainer_title">{item.title}</div>
                                <ul>
                                    {
                                        item.nodes.map((subItem) => {
                                            return (
                                                <li key={subItem.id}>
                                                    <Link className="link" to={subItem.url}> {subItem.title}</Link>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        );
                    })
                }

                {
                    arrayLevel1Developers.map((item) => {
                        return (
                            <div key={item.id} className="level1__subContainer">
                                <div className="subContainer_title">{item.title}</div>
                                <ul>
                                    {
                                        item.nodes.map((subItem) => {
                                            return (
                                                <li key={subItem.id}>
                                                    <Link className="link" to={subItem.url}> {subItem.title}</Link>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        );
                    })
                }

                {
                    arrayLevel1Company.map((item) => {
                        return (
                            <div key={item.id} className="level1__subContainer">
                                <div className="subContainer_title">{item.title}</div>
                                <ul>
                                    {
                                        item.nodes.map((subItem) => {
                                            return (
                                                <li key={subItem.id}>
                                                    <Link className="link" to={subItem.url}> {subItem.title}</Link>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        );
                    })
                }

                {
                    arrayLevel1NewsLetter.map((item) => {
                        return (
                            <div key={item.id} className="level1__subContainer">
                                <div className="subContainer_title">{item.title}</div>
                                <ul>
                                    <div className="inputForm">
                                        <form >
                                            <input className="inputText" placeholder="your@mail.com" />
                                            <button>
                                                <i className="icofont-send-mail"></i>
                                            </button>
                                        </form>
                                    </div>
                                </ul>
                            </div>
                        );
                    })
                }


            </div>

            <div className="footer_container level2">
                <div className="level2__logo">
                    <Link to='/'>
                        <i className="icofont-visa"></i>
                    </Link>
                </div>

                <div className="level2__menu">
                    {
                        arrayLevel2Options.map((item) => {
                            return (
                                <div key={item.id}>
                                    <ul>
                                        <li>{item.title}</li>
                                    </ul>
                                </div>
                            );
                        })
                    }

                </div>

                <div className="level2__socials">

                    {
                        arrayLevel2Socilas.map((item) => {
                            return (
                                <div key={item.id} className="">
                                    <ul>
                                        <li>
                                            <span dangerouslySetInnerHTML={{ __html: item.icon }} ></span>
                                        </li>
                                    </ul>
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        </section>
    )
}
