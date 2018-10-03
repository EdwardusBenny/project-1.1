import React, { Component } from 'react';

class ProductDetail extends Component {
    render() {
        const { name, description, url, image } = this.props.product;
        return (
            <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" href={url}>
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                        <i className="	fa fa-shopping-cart fa-3x"></i>
                        <div>Add to Cart</div>
                        </div>
                    </div>
                    <img style={{ margin: "auto"}} className="img-responsive" src={image} alt="" />
                </a>
                <div className="portfolio-caption">
                    <h4>{name}</h4>
                    <p className="text-muted">{description}</p>
                </div>
            </div>
        );
    }
}

export default ProductDetail;