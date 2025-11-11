import React from "react";
import { Link } from "react-router-dom";

function History({ transactions, user }) {
  const userTransactions = transactions.filter(
    (tx) => tx.userName === user.name || user.role === "Validador"
  );

  const getStatusBadge = (status) => {
    const badges = {
      pending: { class: "badge-pending", text: "⏳ Pendiente" },
      validated: { class: "badge-validated", text: "✅ Validado" },
      rejected: { class: "badge-rejected", text: "❌ Rechazado" },
      completed: { class: "badge-completed", text: "🎉 Completado" },
    };
    return badges[status] || badges.pending;
  };

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
          <Link to="/history" className="navbar-link">
            Historial
          </Link>
        </div>
      </nav>

      <div className="container">
        <div className="card">
          <h2 style={{ color: "#667eea", marginBottom: "20px" }}>
            📊 Historial Médico en Healthchain
          </h2>

          <div className="alert alert-info">
            <strong>📝 Registro Blockchain:</strong> Todas las transacciones
            médicas quedan registradas permanentemente en Healthchain de forma
            inmutable, transparente y segura para el sector salud.
          </div>

          {userTransactions.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px" }}>
              <div style={{ fontSize: "60px", marginBottom: "20px" }}>📭</div>
              <h3>No hay transacciones médicas</h3>
              <p style={{ color: "#6c757d" }}>
                Aún no has realizado ninguna transacción en Healthchain.
              </p>
              <Link
                to="/transaction"
                className="btn btn-primary"
                style={{ marginTop: "20px" }}
              >
                Crear Primera Transacción Médica
              </Link>
            </div>
          ) : (
            <>
              <div className="grid" style={{ marginBottom: "30px" }}>
                <div className="stat-card">
                  <div className="stat-label">Total Transacciones</div>
                  <div className="stat-value">{userTransactions.length}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Validadas</div>
                  <div className="stat-value" style={{ color: "#28a745" }}>
                    {
                      userTransactions.filter((tx) => tx.status === "validated")
                        .length
                    }
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Pendientes</div>
                  <div className="stat-value" style={{ color: "#ffc107" }}>
                    {
                      userTransactions.filter((tx) => tx.status === "pending")
                        .length
                    }
                  </div>
                </div>
              </div>

              <h3 style={{ marginBottom: "15px" }}>
                Todas las Transacciones Médicas
              </h3>

              <ul className="transaction-list">
                {userTransactions
                  .sort((a, b) => b.id - a.id)
                  .map((tx) => {
                    const statusBadge = getStatusBadge(tx.status);
                    return (
                      <li key={tx.id} className="transaction-item">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "start",
                            flexWrap: "wrap",
                            gap: "10px",
                          }}
                        >
                          <div style={{ flex: 1, minWidth: "250px" }}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "10px",
                              }}
                            >
                              <h4 style={{ margin: 0 }}>{tx.type}</h4>
                              <span className={`badge ${statusBadge.class}`}>
                                {statusBadge.text}
                              </span>
                            </div>

                            <div
                              style={{ fontSize: "14px", lineHeight: "1.8" }}
                            >
                              <p>
                                <strong>Usuario:</strong> {tx.userName} (
                                {tx.userRole})
                              </p>
                              <p>
                                <strong>Monto:</strong> ${tx.amount} USD
                              </p>
                              <p>
                                <strong>Interés:</strong> {tx.interest}% anual
                              </p>
                              <p>
                                <strong>Duración:</strong> {tx.duration} meses
                              </p>
                              <p>
                                <strong>Tratamiento:</strong> {tx.description}
                              </p>
                              <p style={{ wordBreak: "break-all" }}>
                                <strong>Hash Healthchain:</strong>{" "}
                                <code>{tx.signature}</code>
                              </p>
                              <p style={{ color: "#6c757d", fontSize: "12px" }}>
                                📅 {new Date(tx.timestamp).toLocaleString()}
                              </p>
                            </div>
                          </div>

                          <div style={{ textAlign: "right" }}>
                            <div style={{ fontSize: "32px" }}>
                              {tx.status === "pending" && "⏳"}
                              {tx.status === "validated" && "✅"}
                              {tx.status === "rejected" && "❌"}
                              {tx.status === "completed" && "🎉"}
                            </div>
                          </div>
                        </div>

                        {tx.status === "validated" && (
                          <div
                            className="alert alert-success"
                            style={{ marginTop: "15px" }}
                          >
                            ⛓️ Esta transacción médica ha sido validada y
                            añadida a Healthchain blockchain. El registro es
                            inmutable y puede ser consultado por profesionales
                            autorizados del sector salud.
                          </div>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default History;
