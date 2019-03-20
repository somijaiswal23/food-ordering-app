import React, { Component } from 'react';
import './Checkout.css';
import Header from '../../common/header/Header';

const styles = theme => ({});

class Checkout extends Component {
    render() {
        return (
            <div>
                <Header />
                Checkout page
            </div>
        )
    }
}

export default withStyles(styles)(Checkout);
