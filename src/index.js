// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

// Home layout
import InteractiveAgency from './home/InteractiveAgency';

// Element Layout
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";
import Portfolio from "./elements/Portfolio";
import error404 from "./elements/error404";


// Blocks Layout
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component {
    render() {
        return (
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={InteractiveAgency} />

                        {/* Element Layot */}
                        <Route exact path={`${process.env.PUBLIC_URL}/service`} component={ServiceDetails} />
                        <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} />
                        <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={Portfolio} />
                        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />

                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
                        <Route component={error404} />

                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();