import React, { Component } from 'react';

class ProductItem extends Component {
     render() {
          let { samPham, xem } = this.props;
          return (
               <div className="card">
                    <img className="card-img-top" src={samPham.image} alt="" />
                    <div className="card-body">
                         <h5 className="card-title">{samPham.name}</h5>
                         <p className="card-text">{samPham.price}</p>
                         <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => {
                              xem(samPham);
                         }}> Them San Pham</button>
                    </div>
               </div >
          );
     }
}

export default ProductItem;