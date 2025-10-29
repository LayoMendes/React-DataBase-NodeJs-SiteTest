import { useState } from "react";
import clickSound from "./bubble.mp3"; // 👈 som que você vai adicionar na pasta src

function App() {
  const [contador, setContador] = useState(0);

  // cria um objeto de áudio
  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.4; // volume suave
    audio.play();
  };

  const incrementar = () => {
    setContador(contador + 1);
    playSound();
  };

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
      playSound();
    }
  };

  const resetar = () => {
    setContador(0);
    playSound();
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
        fontFamily: "Poppins, sans-serif",
        overflow: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "15px",
          padding: "40px 20px",
          width: "90%",
          maxWidth: "400px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "10px",
            color: "#333",
            fontSize: "1.8rem",
          }}
        >
          Clicker Counter
        </h1>

        <p style={{ color: "#000000ff" }}>Developed by Layo</p>

        <h2
          style={{
            fontSize: "3rem",
            color: "#4A90E2",
            margin: "20px 0",
            wordBreak: "break-word",
          }}
        >
          {contador}
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <button onClick={decrementar} style={estiloBotao("#ff7675", "white")}>
            - Diminuir
          </button>

          <button onClick={incrementar} style={estiloBotao("#55efc4", "#2d3436")}>
            + Aumentar
          </button>

          <button onClick={resetar} style={estiloBotao("#74b9ff", "white")}>
            🔁 Resetar
          </button>
        </div>
      </div>
    </div>
  );
}

const estiloBotao = (bg, color) => ({
  backgroundColor: bg,
  border: "none",
  color: color,
  padding: "12px 20px",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
  transition: "0.2s",
  flex: "1 1 100px",
});

export default App;
