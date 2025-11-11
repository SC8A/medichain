import React, { useState } from "react";
import { Link } from "react-router-dom";

function Wallet({ wallet, user }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(wallet.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">🏥 Medichain</div>
        <div className="navbar-menu">
          <Link to="/dashboard" className="navbar-link">
            Dashboard
          </Link>
          <Link to="/wallet" className="navbar-link">
            Wallet
          </Link>
        </div>
      </nav>

      <div className="container" style={{ maxWidth: "800px" }}>
        <div className="card">
          <h2 style={{ color: "#667eea", marginBottom: "20px" }}>
            👛 Mi Wallet en Medichain
          </h2>

          <div className="alert alert-info">
            <strong>🔐 Wallet Medichain:</strong> Tu wallet es tu identidad en
            la blockchain de salud. La dirección pública te identifica y tu
            clave privada (simulada aquí) te permite firmar transacciones
            médicas de forma segura.
          </div>

          <div className="grid" style={{ marginBottom: "30px" }}>
            <div className="stat-card">
              <div className="stat-label">Balance Disponible</div>
              <div className="stat-value">${wallet.balance.toFixed(2)}</div>
              <small style={{ color: "#6c757d" }}>USD</small>
            </div>
            <div className="stat-card">
              <div className="stat-label">Estado de Medichain</div>
              <div className="stat-value">🟢</div>
              <small style={{ color: "#28a745" }}>Conectado</small>
            </div>
            <div className="stat-card">
              <div className="stat-label">Tipo de Cuenta</div>
              <div className="stat-value" style={{ fontSize: "20px" }}>
                {user.role === "Prestador" && "💰"}
                {user.role === "Prestatario" && "👤"}
                {user.role === "Validador" && "✅"}
              </div>
              <small>{user.role}</small>
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <h3 style={{ marginBottom: "15px" }}>
              Dirección Pública en Medichain
            </h3>
            <div className="wallet-address" style={{ position: "relative" }}>
              <div style={{ fontSize: "14px", marginBottom: "10px" }}>
                {wallet.address}
              </div>
              <button
                onClick={copyToClipboard}
                className="btn btn-secondary"
                style={{ fontSize: "14px", padding: "8px 16px" }}
              >
                {copied ? "✅ Copiado!" : "📋 Copiar Dirección"}
              </button>
            </div>
            <small
              style={{ color: "#6c757d", display: "block", marginTop: "10px" }}
            >
              Comparte esta dirección para recibir fondos médicos. Nunca
              compartas tu clave privada.
            </small>
          </div>

          <div style={{ marginTop: "30px" }}>
            <h3 style={{ marginBottom: "15px" }}>
              Información de Seguridad Médica
            </h3>
            <div
              style={{
                background: "#fff3cd",
                padding: "20px",
                borderRadius: "8px",
                border: "1px solid #ffc107",
              }}
            >
              <h4 style={{ color: "#856404", marginBottom: "15px" }}>
                ⚠️ Buenas Prácticas en Medichain
              </h4>
              <ul style={{ lineHeight: "2", color: "#856404" }}>
                <li>Nunca compartas tu clave privada con nadie</li>
                <li>Verifica siempre las direcciones antes de enviar fondos</li>
                <li>Mantén respaldos seguros de tus claves médicas</li>
                <li>Usa autenticación de dos factores cuando sea posible</li>
                <li>
                  Confirma los detalles de cada transacción médica antes de
                  firmar
                </li>
                <li>Protege tu historial médico en blockchain</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <h3 style={{ marginBottom: "15px" }}>
              Detalles Técnicos de Medichain
            </h3>
            <div
              style={{
                background: "#f8f9fa",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <p>
                <strong>Red:</strong> Medichain Testnet (Simulación Médica)
              </p>
              <p>
                <strong>Protocolo:</strong> ERC-20 Médico
              </p>
              <p>
                <strong>Gas Estimado:</strong> 0.002 ETH
              </p>
              <p>
                <strong>Bloque Actual:</strong> #
                {Math.floor(Math.random() * 1000000)}
              </p>
              <p>
                <strong>Nonce:</strong> {Math.floor(Math.random() * 100)}
              </p>
              <p>
                <strong>Tipo de Blockchain:</strong> Healthcare Blockchain
              </p>
            </div>
          </div>

          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <Link to="/dashboard" className="btn btn-primary">
              Volver al Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
