import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';

const styles = theme => ({});

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                Home page
            </div>
        )
    }
}

export default withStyles(styles)(Home);
