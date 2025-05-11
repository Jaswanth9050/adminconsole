import React from 'react';
import NavbarWithAsideBar from '../components/NavBar';

const Billing = () => {
  const transactions = [
    { date: '2025-04-15', description: 'Pro Plan Subscription', amount: '₹999' },
    { date: '2025-03-15', description: 'Pro Plan Subscription', amount: '₹999' },
    { date: '2025-02-15', description: 'Pro Plan Subscription', amount: '₹999' },
  ];

  return (
    <>
    <NavbarWithAsideBar/>
    <div className="container mt-5">
      <h1 className="text-center text-danger mb-4">Billing Dashboard</h1>

      {/* Summary Card */}
      <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <div className="card shadow-sm p-4 text-center">
            <h4 className="mb-3">Current Plan</h4>
            <p><strong>Plan:</strong> Pro</p>
            <p><strong>Next Billing Date:</strong> May 15, 2025</p>
            <p><strong>Monthly Cost:</strong> ₹999</p>
            <button className="btn btn-outline-primary">Manage Subscription</button>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="row mb-4">
        <div className="col-md-10 offset-md-1">
          <div className="card shadow-sm p-4">
            <h4 className="mb-3">Recent Transactions</h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, index) => (
                  <tr key={index}>
                    <td>{tx.date}</td>
                    <td>{tx.description}</td>
                    <td>{tx.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="row mb-5">
        <div className="col-md-6 offset-md-3">
          <div className="card shadow-sm p-4">
            <h4 className="mb-3">Payment Method</h4>
            <p><strong>Card:</strong> **** **** **** 1234</p>
            <p><strong>Expiry:</strong> 06/27</p>
            <button className="btn btn-outline-secondary">Update Payment Method</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Billing;
