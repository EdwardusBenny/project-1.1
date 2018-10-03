import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import ProductDetail from './ProductDetail';
import { API_URL_1 } from '../supports/api-url/apiurl';

class ProductPage extends Component {
    state = { product: [] }

    componentWillMount() {
        axios.get(API_URL_1 + '/product')
        .then(product => {
            this.setState({ product: product.data });
        });
    }

    renderProductList = () => {
        return this.state.product.map(product => 
            <ProductDetail key={product.id} product={product} />
        );
    }

    render() {
        console.log(this.state.product);
        if(this.props.auth.cookieCheck === true) {
            if(this.props.auth.username !== "") {
                return (
                    <section className="bg-light" id="portfolio">
                        <div className="container">
                            <h1>Ini product List</h1>
                            <div className="row">
                                {this.renderProductList()}
                            </div>
                        </div>
                    </section>
                );
            }
            
            return <Redirect to="/login" />;
        }
        return <div>Authentication Checking</div>;
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(ProductPage);