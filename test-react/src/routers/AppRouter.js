import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavbarComp, FooterComp, HomePage, AboutPage, CareerPage, CompanyPage, DevelopersPage, ProductsPage, SigninPage, SupportPage, TourPage, HeaderComp } from '../components/index';
export const AppRouter = () => {
    return (
        <Router>
            <div className="container animate__animated animate__fadeIn">

                <header className="container__header">
                    <HeaderComp type={'home'} />
                    < NavbarComp />
                </header>

                <main className="container__main ">
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route exact path='/aboutus' component={AboutPage} />
                        <Route exact path='/career' component={CareerPage} />
                        <Route exact path='/company' component={CompanyPage} />
                        <Route exact path='/developers' component={DevelopersPage} />
                        <Route exact path='/products' component={ProductsPage} />
                        <Route exact path='/signin' component={SigninPage} />
                        <Route exact path='/support' component={SupportPage} />
                        <Route exact path='/tour' component={TourPage} />
                    </Switch>
                </main>

                <footer className="container__footer">
                    <div className="footer_curve">
                        <FooterComp />
                    </div>
                </footer>
            </div>
        </Router>
    )
}
