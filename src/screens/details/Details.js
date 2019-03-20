import React, { Component } from 'react';
import './Details.css';
import Header from '../../common/header/Header';

const styles = theme => ({});

class Details extends Component {
    render() {
        return (
            <div>
                <Header />
                Details page
            </div>
        )
    }
}

export default withStyles(styles)(Details);
