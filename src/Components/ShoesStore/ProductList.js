import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {
     renderProduct = () => {
          let { mangSP, xemChitiet } = this.props;
          return mangSP.map((sp) => {
               return <div className="col-4 p-3" key={`sanPham${sp.id}`}>
                    <ProductItem samPham={sp} xem={xemChitiet} />
               </div>
          })
     }
     render() {
          return (
               <div className="row">
                    {this.renderProduct()}
               </div>
          );
     }
}

export default ProductList;