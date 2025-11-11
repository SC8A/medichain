import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Transaction({ user, wallet, onTransaction }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    amount: "",
    interest: "",
    duration: "",
    description: "",
  });
  const [step, setStep] = useState(1);
  const [signature, setSignature] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSign = () => {
    // Simular firma digital
    const sig = "SIG_" + Math.random().toString(36).substring(2, 15);
    setSignature(sig);
    setStep(3);
  };

  const handleSendToBlockchain = () => {
    const transaction = {
      ...formData,
      signature,
      from: wallet.address,
      userRole: user.role,
      userName: user.name,
      type:
        user.role === "Prestador"
          ? "Otorgar Préstamo Médico"
          : "Solicitar Préstamo Médico",
    };

    onTransaction(transaction);
    setStep(4);

    setTimeout(() => {
      navigate("/history");
    }, 3000);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">🏥 Healthchain</div>
        <div className="navbar-menu">
          <Link to="/dashboard" className="navbar-link">
            Dashboard
          </Link>
          <Link to="/history" className="navbar-link">
            Historial
          </Link>
        </div>
      </nav>

      <div className="container" style={{ maxWidth: "800px" }}>
        <div className="card">
          <h2 style={{ color: "#667eea", marginBottom: "20px" }}>
            {user.role === "Prestador"
              ? "💰 Otorgar Préstamo Médico"
              : "📝 Solicitar Préstamo Médico"}
          </h2>

          {/* Indicador de pasos */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "30px",
            }}
          >
            <div style={{ flex: 1, textAlign: "center" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: step >= 1 ? "#667eea" : "#e1e8ed",
                  color: "white",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                1
              </div>
              <div style={{ fontSize: "12px", marginTop: "5px" }}>Datos</div>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: step >= 2 ? "#667eea" : "#e1e8ed",
                  color: "white",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                2
              </div>
              <div style={{ fontSize: "12px", marginTop: "5px" }}>Firmar</div>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: step >= 3 ? "#667eea" : "#e1e8ed",
                  color: "white",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                3
              </div>
              <div style={{ fontSize: "12px", marginTop: "5px" }}>Enviar</div>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: step >= 4 ? "#28a745" : "#e1e8ed",
                  color: "white",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                ✓
              </div>
              <div style={{ fontSize: "12px", marginTop: "5px" }}>
                Completado
              </div>
            </div>
          </div>

          {/* Paso 1: Formulario */}
          {step === 1 && (
            <form onSubmit={handleSubmit}>
              <div className="alert alert-info">
                <strong>📋 Paso 1:</strong> Ingresa los detalles del préstamo
                médico
              </div>

              <div className="form-group">
                <label>Monto del préstamo (USD)</label>
                <input
                  type="number"
                  name="amount"
                  className="form-control"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                  min="100"
                  max={wallet.balance}
                  placeholder="1000"
                />
                <small style={{ color: "#6c757d" }}>
                  Balance disponible: ${wallet.balance}
                </small>
              </div>

              <div className="form-group">
                <label>Tasa de interés anual (%)</label>
                <input
                  type="number"
                  name="interest"
                  className="form-control"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  min="1"
                  max="30"
                  step="0.1"
                  placeholder="12.5"
                />
              </div>

              <div className="form-group">
                <label>Duración (meses)</label>
                <input
                  type="number"
                  name="duration"
                  className="form-control"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  min="1"
                  max="60"
                  placeholder="12"
                />
              </div>

              <div className="form-group">
                <label>Descripción del tratamiento médico</label>
                <textarea
                  name="description"
                  className="form-control"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="3"
                  placeholder="Describe el tratamiento médico o procedimiento..."
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                Continuar →
              </button>
            </form>
          )}

          {/* Paso 2: Firma digital */}
          {step === 2 && (
            <div>
              <div className="alert alert-warning">
                <strong>✍️ Paso 2:</strong> Firma digital de la transacción
                médica
              </div>

              <div
                style={{
                  background: "#f8f9fa",
                  padding: "20px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              >
                <h4>Resumen de la transacción:</h4>
                <ul style={{ lineHeight: "2" }}>
                  <li>
                    <strong>Monto:</strong> ${formData.amount} USD
                  </li>
                  <li>
                    <strong>Interés:</strong> {formData.interest}% anual
                  </li>
                  <li>
                    <strong>Duración:</strong> {formData.duration} meses
                  </li>
                  <li>
                    <strong>Tratamiento:</strong> {formData.description}
                  </li>
                  <li>
                    <strong>De:</strong> {wallet.address}
                  </li>
                </ul>
              </div>

              <div className="alert alert-info">
                <strong>🔐 Simulación:</strong> Al firmar, se genera una firma
                criptográfica única que autentica tu identidad y autoriza la
                transacción médica en Healthchain.
              </div>

              <button
                onClick={handleSign}
                className="btn btn-success"
                style={{ width: "100%" }}
              >
                🖊️ Firmar Transacción Médica
              </button>
            </div>
          )}

          {/* Paso 3: Enviar a blockchain */}
          {step === 3 && (
            <div>
              <div className="alert alert-success">
                <strong>✅ Paso 3:</strong> Transacción firmada correctamente
              </div>

              <div className="wallet-address" style={{ marginBottom: "20px" }}>
                <strong>Firma digital:</strong>
                <br />
                {signature}
              </div>

              <div className="alert alert-info">
                <strong>⛓️ Healthchain Blockchain:</strong> La transacción
                médica será enviada a la red Healthchain donde los validadores
                la verificarán antes de añadirla al registro permanente e
                inmutable.
              </div>

              <button
                onClick={handleSendToBlockchain}
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                📤 Enviar a Healthchain
              </button>
            </div>
          )}

          {/* Paso 4: Completado */}
          {step === 4 && (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "80px", marginBottom: "20px" }}>🎉</div>
              <h2 style={{ color: "#28a745" }}>¡Transacción Médica Enviada!</h2>
              <div
                className="alert alert-success"
                style={{ marginTop: "20px" }}
              >
                Tu transacción ha sido enviada a Healthchain y está pendiente de
                validación médica.
              </div>
              <p style={{ color: "#6c757d" }}>
                Redirigiendo al historial en 3 segundos...
              </p>
            </div>
          )}

          {step < 4 && (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <Link to="/dashboard" style={{ color: "#6c757d" }}>
                ← Cancelar
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Transaction;
