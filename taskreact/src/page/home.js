import React, { useState } from 'react';
import '../project.css';
  

function Home() {
   
        const [price, setPrice] = useState(0);
        const [qty, setQty] = useState(0);
        const [total, setTotal] = useState(0);
        const [users, setUsers] = useState([]);
        const [name, setName] = useState('');
        const [sum, setSum] = useState(0);
      
        const handlePriceChange = (e) => {
          const newPrice = parseFloat(e.target.value) || 0;
          setPrice(newPrice);
          calculateTotal(newPrice, qty);
        };
      
        const handleQuantityChange = (e) => {
          const newQuantity = parseInt(e.target.value) || 0;
          setQty(newQuantity);
          calculateTotal(price, newQuantity);
        };
      
        const calculateTotal = (price, qty) => {
          const newTotal = price * qty;
          setSum(newTotal);
        };
      
        const Calculation = () => {
          const newUser = { name, qty, price, sum };
          const updatedUsers = [...users, newUser];
          setUsers(updatedUsers);
      
          const totalSum = updatedUsers.reduce((total, user) => total + user.sum, 0);
          setTotal(totalSum);
      
          // Clear the input fields
          setName('');
          setQty(0);
          setPrice(0);
          setSum(0);
        };
      
        const resetInputs = () => {
          setUsers([]);
          setTotal(0);
        };
      
        return (
          <div>
           
            <div className="container-fluid bg-2 text-center">
              <h1>Inventory Management System</h1>
              <br />
              <div className="row">
                <div className="col-sm-8">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Amount</th>
                        <th>Option</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Item Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Price"
                            value={price}
                            onChange={handlePriceChange}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Qty"
                            value={qty}
                            onChange={handleQuantityChange}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Total"
                            value={sum}
                            disabled
                          />
                        </td>
                        <td>
                          <button className="btn btn-success" onClick={Calculation}>
                            Add
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h3 align="left">Products</h3>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((row, index) => (
                        <tr key={index}>
                          <td>{row.name}</td>
                          <td>{row.price}</td>
                          <td>{row.qty}</td>
                          <td>{row.sum}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
      
                <div className="col-sm-4">
                  <div className="form-group" align="left">
                    <h3>Total</h3>
                    <input
                      type="number"
                      className="form-control"
                      value={total}
                      disabled
                    />
                    <br />
                    <button className="btn btn-success" onClick={resetInputs}>
                      Complete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }

export default Home;
