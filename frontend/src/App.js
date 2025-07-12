import React, { useEffect, useState } from "react";
import ToolCard from "./components/ToolCard";
import "./App.css";
import { fetchTools, refreshTools } from "./api";

function App() {
  const [tools, setTools] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredTools, setFilteredTools] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch tools from Render backend
  useEffect(() => {
    setLoading(true);
    fetch("https://devtools-backend-8yww.onrender.com/tools")
      .then((res) => res.json())
      .then((data) => {
        setTools(data.tools);
        setFilteredTools(data.tools);
      })
      .finally(() => setLoading(false));
  }, []);

  // Filter tools by search
  useEffect(() => {
    const lower = search.toLowerCase();
    setFilteredTools(
      tools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(lower) ||
          tool.description.toLowerCase().includes(lower) ||
          tool.category.toLowerCase().includes(lower) ||
          tool.price.toLowerCase().includes(lower)
      )
    );
  }, [search, tools]);

  // Refresh handler
  const handleRefresh = async () => {
    setLoading(true);
    await refreshTools();
    await loadTools();
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>🛠️ DevTool Hub</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1.5rem",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Search by name, description, category, or price..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "0.5rem", minWidth: 250 }}
        />
        <button
          onClick={handleRefresh}
          style={{ padding: "0.5rem 1rem" }}
          title="Refresh"
          disabled={loading}
        >
          {loading ? (
            "Refreshing..."
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-clockwise"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 3.5a.5.5 0 0 1 .5.5v2.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 6.793V4a.5.5 0 0 1 .5-.5z"
              />
              <path
                fillRule="evenodd"
                d="M8 0a8 8 0 1 0 8 8A8.009 8.009 0 0 0 8 0zm0 15a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7z"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="tool-grid">
        {filteredTools.length === 0 ? (
          <p
            style={{
              gridColumn: "1/-1",
              textAlign: "center",
              color: "#888",
            }}
          >
            {loading ? "Loading..." : "No tools found."}
          </p>
        ) : (
          filteredTools.map((tool, idx) => <ToolCard key={idx} tool={tool} />)
        )}
      </div>
    </div>
  );
}

export default App;
