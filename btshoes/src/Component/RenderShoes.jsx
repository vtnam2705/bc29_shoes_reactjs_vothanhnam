import React, { Component } from 'react';
import data from "./../Data/data.json"
import Shoes from './Shoes';


export default class RenderShoes extends Component {
    renderShoes = () => {
        return data.map((item) => {
            return (
                <div className='col-2 mb-4'>
                    <Shoes
                        renderShoes={this.renderShoes}
                        item={item}
                        showDetails={this.showDetails}
                    >
                    </Shoes>
                </div>
            )
        })
    }

    showDetails(item) {
        alert(item);
    }

    render() {
        return (
            <>
                <h1>NIKE</h1>
                <div className='d-flex flex-wrap'>
                    {this.renderShoes()}
                </div>
            </>
        )
    }
}
