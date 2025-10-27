// Import d'Express
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Config nécessaire pour __dirname en module ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Sert les fichiers statiques depuis le dossier "public"
app.use(express.static(path.join(__dirname, "public")));

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
