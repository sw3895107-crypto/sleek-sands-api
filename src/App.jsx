import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function App() {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Sleek Sands Web</h1>
      <p>API status: {status}</p>
    </div>
  );
}
