const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// Serve the static frontend from the public folder.
app.use(express.static(path.join(__dirname, "public")));

// Small health route that is useful for cloud platforms and container checks.
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Humanitarian Aid Directory is running on port ${PORT}`);
});
