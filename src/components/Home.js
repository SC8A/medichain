import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="container"
      style={{ textAlign: "center", paddingTop: "50px" }}
    >
      <div className="card">
        <h1
          style={{ color: "#667eea", marginBottom: "10px", fontSize: "48px" }}
        >
          🏥 Healthchain
        </h1>
        <p
          style={{
            fontSize: "20px",
            color: "#764ba2",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          Blockchain Healthcare Platform
        </p>
        <p style={{ fontSize: "18px", color: "#6c757d", marginBottom: "30px" }}>
          Plataforma descentralizada para gestión de préstamos médicos con
          validación blockchain
        </p>

        <div
          className="alert alert-info"
          style={{ textAlign: "left", marginBottom: "30px" }}
        >
          <h3>💡 ¿Cómo funciona Healthchain?</h3>
          <ol style={{ marginTop: "15px", lineHeight: "1.8" }}>
            <li>
              <strong>Registro:</strong> Crea tu cuenta como Prestador de
              Servicios Médicos, Paciente o Validador
            </li>
            <li>
              <strong>Wallet:</strong> Recibe una dirección blockchain simulada
              para transacciones seguras
            </li>
            <li>
              <strong>Transacciones:</strong> Solicita o aprueba préstamos para
              tratamientos médicos
            </li>
            <li>
              <strong>Validación:</strong> Firma digital y validación en
              blockchain de documentos médicos
            </li>
            <li>
              <strong>Historial:</strong> Consulta el historial médico inmutable
              y todas tus operaciones
            </li>
          </ol>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <img
            src={process.env.PUBLIC_URL + "/flow-diagram.png"}
            alt="Diagrama de Flujo Healthchain"
            style={{
              maxWidth: "100%",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            }}
            onError={(e) => (e.target.style.display = "none")}
          />
          <p style={{ fontSize: "14px", color: "#6c757d", marginTop: "10px" }}>
            Diagrama de flujo de la DApp Healthchain
          </p>
        </div>

        <Link
          to="/login"
          className="btn btn-primary"
          style={{ fontSize: "18px", padding: "15px 40px" }}
        >
          Comenzar con Healthchain →
        </Link>

        <div className="grid" style={{ marginTop: "40px", textAlign: "left" }}>
          <div className="stat-card">
            <h3>🔐 Seguridad</h3>
            <p>
              Simulación de firma digital y validación blockchain para datos
              médicos
            </p>
          </div>
          <div className="stat-card">
            <h3>⚡ Rápido</h3>
            <p>Aprobaciones instantáneas para emergencias médicas</p>
          </div>
          <div className="stat-card">
            <h3>👥 Roles Especializados</h3>
            <p>Prestador médico, Paciente y Validador de salud</p>
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
            padding: "20px",
            background: "#f8f9fa",
            borderRadius: "12px",
          }}
        >
          <h3 style={{ color: "#667eea", marginBottom: "15px" }}>
            🌟 Beneficios de Healthchain
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "15px",
              textAlign: "left",
            }}
          >
            <div>✅ Historial médico inmutable</div>
            <div>✅ Transparencia total</div>
            <div>✅ Acceso descentralizado</div>
            <div>✅ Privacidad garantizada</div>
            <div>✅ Aprobaciones rápidas</div>
            <div>✅ Registros permanentes</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
