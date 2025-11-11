import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "Prestatario",
  });
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de login/registro
    const userData = {
      email: formData.email,
      role: formData.role,
      name: formData.email.split("@")[0],
    };

    onLogin(userData);
    navigate("/dashboard");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="container"
      style={{ maxWidth: "500px", paddingTop: "50px" }}
    >
      <div className="card">
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1 style={{ fontSize: "36px", marginBottom: "5px" }}>🏥</h1>
          <h2 style={{ color: "#667eea", marginBottom: "10px" }}>
            Healthchain
          </h2>
        </div>

        <h3
          style={{ textAlign: "center", color: "#333", marginBottom: "30px" }}
        >
          {isRegister ? "📝 Registro" : "🔑 Iniciar Sesión"}
        </h3>

        <div className="alert alert-info">
          <strong>ℹ️ Simulación:</strong> Este es un login simulado. Puedes usar
          cualquier email y contraseña para acceder a Healthchain.
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
            />
          </div>

          <div className="form-group">
            <label>Rol en Healthchain</label>
            <select
              name="role"
              className="form-control"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="Prestatario">
                Prestatario (Paciente - Solicita préstamos médicos)
              </option>
              <option value="Prestador">
                Prestador (Institución - Otorga préstamos médicos)
              </option>
              <option value="Validador">
                Validador (Auditor - Valida transacciones médicas)
              </option>
            </select>
            <small
              style={{ color: "#6c757d", display: "block", marginTop: "5px" }}
            >
              {formData.role === "Prestatario" &&
                "👤 Puedes solicitar préstamos para tratamientos médicos"}
              {formData.role === "Prestador" &&
                "💰 Puedes otorgar préstamos para servicios de salud"}
              {formData.role === "Validador" &&
                "✅ Puedes validar transacciones médicas en blockchain"}
            </small>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "20px" }}
          >
            {isRegister ? "Registrarse en Healthchain" : "Iniciar Sesión"}
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            onClick={() => setIsRegister(!isRegister)}
            style={{
              background: "none",
              border: "none",
              color: "#667eea",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {isRegister
              ? "¿Ya tienes cuenta? Inicia sesión"
              : "¿No tienes cuenta? Regístrate"}
          </button>
        </div>

        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <Link to="/" style={{ color: "#6c757d" }}>
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
