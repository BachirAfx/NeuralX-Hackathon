import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Fix path issues (important on Windows + ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Force load .env
dotenv.config({ path: path.join(__dirname, ".env") });

console.log("KEY:", process.env.GEMINI_API_KEY);
