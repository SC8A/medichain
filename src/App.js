import React, { useState } from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Transaction from "./components/Transaction";
import Validation from "./components/Validation";
import History from "./components/History";
import Wallet from "./components/Wallet";

function App() {
  const [user, setUser] = useState(null);
  const [wallet, setWallet] = useState({
    address: "0x0000000000000000000000000000000000000000",
    balance: 0,
  });
  const [transactions, setTransactions] = useState([]);

  const handleLogin = (userData) => {
    setUser(userData);
    // Simular creación de wallet
    const address = "0x" + Math.random().toString(16).substr(2, 40);
    setWallet({
      address: address,
      balance: userData.role === "Prestador" ? 10000 : 1000,
    });
  };

  const handleLogout = () => {
    setUser(null);
    setWallet({
      address: "0x0000000000000000000000000000000000000000",
      balance: 0,
    });
  };

  const addTransaction = (transaction) => {
    setTransactions([
      ...transactions,
      {
        ...transaction,
        id: Date.now(),
        timestamp: new Date().toISOString(),
        status: "pending",
      },
    ]);
  };

  const updateTransactionStatus = (id, status) => {
    setTransactions(
      transactions.map((tx) => (tx.id === id ? { ...tx, status } : tx))
    );
  };

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/dashboard"
            element={
              user ? (
                <Dashboard
                  user={user}
                  wallet={wallet}
                  onLogout={handleLogout}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/transaction"
            element={
              user ? (
                <Transaction
                  user={user}
                  wallet={wallet}
                  onTransaction={addTransaction}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/validation"
            element={
              user ? (
                <Validation
                  user={user}
                  transactions={transactions}
                  onUpdateStatus={updateTransactionStatus}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/history"
            element={
              user ? (
                <History transactions={transactions} user={user} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/wallet"
            element={
              user ? (
                <Wallet wallet={wallet} user={user} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
