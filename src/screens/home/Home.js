import React, { Component } from 'react';
import './Home.css';
import { withStyles } from '@material-ui/core/styles';
import Header from '../../common/header/Header';

const styles = theme => ({});

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Home page</h1>
            </div>
        )
    }
}

export default withStyles(styles)(Home);
