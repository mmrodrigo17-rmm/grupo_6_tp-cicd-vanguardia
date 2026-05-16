const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

// Si este archivo se ejecuta directamente, levanta el servidor.
// Si es importado (por ejemplo, desde un test), solo exporta la app.
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor web escuchando en http://localhost:${PORT}`);
  });
}

module.exports = app;