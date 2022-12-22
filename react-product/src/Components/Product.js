import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import Rating from './Rating';

class Product extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                width={150}
                height={150}
                className="mr-3"
                src={this.props.data.imageUrl}
                alt="Image"
              />
              <Card.Body>
                <Card.Text>
                  <h5>{this.props.data.productName}</h5>
                  {this.props.data.releasedDate}
                  <Rating
                    rating={this.props.data.rating}
                    numOfReviews={this.props.data.numOfReviews}
                  />
                  <p>{this.props.data.description}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
    }
}
export default Product;