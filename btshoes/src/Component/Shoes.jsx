import React, { Component } from 'react'
export default class Shoes extends Component {

    render() {
        const { image, name, price, shortDescription, description, quantity } = this.props.item;
        return (
            <div>
                <div className="card container text-left shadow" style={{ width: '18rem'}}>
                    <img className="card-img-top" src={image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{name} - {price} $</h5>
                        <p className="card-text">
                            {shortDescription}
                        </p>
                        <a href="#" className="btn btn-primary" onClick={() => this.props.showDetails(`Description:  ${description}Quantity:  ${quantity}`)}>See Details</a>
                    </div>
                </div>
            </div>
        )
    }
}
