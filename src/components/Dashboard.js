import React from "react";
import { Link } from "react-router-dom";

function Dashboard({ user, wallet, onLogout }) {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">🏥 Healthchain</div>
        <div className="navbar-menu">
          <Link to="/dashboard" className="navbar-link">
            Dashboard
          </Link>
          <Link to="/transaction" className="navbar-link">
            Nueva Transacción
          </Link>
          {user.role === "Validador" && (
            <Link to="/validation" className="navbar-link">
              Validar
            </Link>
          )}
          <Link to="/history" className="navbar-link">
            Historial
          </Link>
          <Link to="/wallet" className="navbar-link">
            Wallet
          </Link>
          <button
            onClick={onLogout}
            className="btn btn-secondary"
            style={{ padding: "8px 16px" }}
          >
            Salir
          </button>
        </div>
      </nav>

      <div className="container">
        <div className="card">
          <h1 style={{ color: "#667eea", marginBottom: "10px" }}>
            Bienvenido, {user.name}
          </h1>
          <p style={{ color: "#6c757d", marginBottom: "30px" }}>
            Rol: <strong>{user.role}</strong>
          </p>

          <div className="grid">
            <div className="stat-card">
              <div className="stat-label">Balance Wallet</div>
              <div className="stat-value">${wallet.balance.toFixed(2)}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Dirección</div>
              <div
                style={{
                  fontSize: "12px",
                  wordBreak: "break-all",
                  marginTop: "10px",
                }}
              >
                {wallet.address.substring(0, 10)}...
                {wallet.address.substring(wallet.address.length - 8)}
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Estado Red</div>
              <div className="stat-value">🟢</div>
              <small>Healthchain activa</small>
            </div>
          </div>

          <div className="alert alert-info" style={{ marginTop: "30px" }}>
            <h3>🎯 Acciones disponibles según tu rol:</h3>
            <ul style={{ marginTop: "15px", lineHeight: "2" }}>
              {user.role === "Prestatario" && (
                <>
                  <li>✅ Solicitar préstamos para tratamientos médicos</li>
                  <li>✅ Ver historial de solicitudes médicas</li>
                  <li>✅ Firmar documentos digitalmente</li>
                  <li>✅ Acceder a historial médico en blockchain</li>
                </>
              )}
              {user.role === "Prestador" && (
                <>
                  <li>✅ Otorgar préstamos para servicios de salud</li>
                  <li>✅ Ver solicitudes médicas pendientes</li>
                  <li>✅ Aprobar/Rechazar solicitudes de tratamiento</li>
                  <li>✅ Gestionar financiamiento de pacientes</li>
                </>
              )}
              {user.role === "Validador" && (
                <>
                  <li>✅ Validar transacciones médicas</li>
                  <li>✅ Verificar documentos de salud</li>
                  <li>✅ Enviar registros a Healthchain blockchain</li>
                  <li>✅ Auditar historial de transacciones</li>
                </>
              )}
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <Link to="/transaction" className="btn btn-primary">
              Nueva Transacción
            </Link>
            <Link to="/history" className="btn btn-secondary">
              Ver Historial
            </Link>
            {user.role === "Validador" && (
              <Link to="/validation" className="btn btn-success">
                Validar Pendientes
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
