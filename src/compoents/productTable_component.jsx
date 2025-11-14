import React, { Component } from 'react';

export default class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products : this.props.init_table_prop,
      newProductName: ''
    }; 
  }

  handleAddProduct = () => {
    const maxId = Math.max(...this.state.products.map((product) => product.id));
    this.setState({
      products: [...this.state.products, {id: maxId + 1, name: this.state.newProductName}]
    })
  }

  render() {
    return <div>
      {/* {Product Section} */}
      <div>
        <input type="text"
        placeholder="Product Name"
        value={this.state.newProductName}
        onChange={(e) => this.setState({newProductName: e.target.value})}/>
        <button onClick={this.handleAddProduct}>Add Product</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  }
}
