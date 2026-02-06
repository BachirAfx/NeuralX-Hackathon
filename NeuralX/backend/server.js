import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";

// ----------------------------------
// Fix __dirname (ES Modules + Windows)
// ----------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ----------------------------------
// Load .env
// ----------------------------------
dotenv.config({ path: path.join(__dirname, ".env") });

// ----------------------------------
// Express Setup
// ----------------------------------
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// ----------------------------------
// Multer (Temp Upload Folder)
// ----------------------------------
const upload = multer({ dest: "uploads/" });

// ----------------------------------
// Initialize Gemini Client (NEW SDK)
// ----------------------------------
const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ----------------------------------
// Analyze Blood Report Route
// ----------------------------------
app.post("/analyze-report", upload.single("file"), async (req, res) => {
  try {
    // Validate file
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // ----------------------------------
    // Read File
    // ----------------------------------
    const filePath = req.file.path;
    const fileBuffer = fs.readFileSync(filePath);

    // Convert to base64 for Gemini
    const imagePart = {
      inlineData: {
        data: fileBuffer.toString("base64"),
        mimeType: req.file.mimetype,
      },
    };

    // ----------------------------------
    // Prompt
    // ----------------------------------
    const prompt = `
You are an expert medical analyst.

Analyze the attached blood report image.

Extract the following data into STRICT JSON:

- Test Name
- Result Value
- Reference Range
- Interpretation (Low/Normal/High)

Also include:
- A short health summary

Rules:
- NO markdown
- NO explanation
- ONLY raw JSON
`;

    // ----------------------------------
    // Call Gemini (NEW API)
    // ----------------------------------
    const response = await client.models.generateContent({
      model: "gemini-pro-vision",

      contents: [
        {
          role: "user",
          parts: [
            { text: prompt },
            imagePart,
          ],
        },
      ],
    });

    // ----------------------------------
    // Get AI Text
    // ----------------------------------
    const text = response.text;

    // ----------------------------------
    // Cleanup Temp File
    // ----------------------------------
    fs.unlinkSync(filePath);

    // ----------------------------------
    // Send JSON
    // ----------------------------------
    res.json(JSON.parse(text));

  } catch (error) {
    console.error("Analyze Error:", error);

    res.status(500).json({
      error: "Failed to analyze report",
      details: error.message,
    });
  }
});

// ----------------------------------
// Start Server
// ----------------------------------
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
