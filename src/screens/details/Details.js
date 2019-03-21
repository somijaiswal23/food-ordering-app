import React, { Component } from 'react';
import './Details.css';
import { withStyles } from '@material-ui/core/styles';
import Header from '../../common/header/Header';

const styles = theme => ({});

class Details extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Details page</h1>
            </div>
        )
    }
}

export default withStyles(styles)(Details);
