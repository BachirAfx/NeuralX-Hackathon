import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import Groq from "groq-sdk";
import Tesseract from "tesseract.js";

// --------------------
// Setup
// --------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

console.log("KEY LOADED:", !!process.env.GROQ_API_KEY);

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// --------------------
// OCR Test
// --------------------
async function doOCR(filePath) {
  console.log("START OCR");

  const worker = await Tesseract.createWorker("eng");

  const result = await worker.recognize(filePath);

  await worker.terminate();

  console.log("OCR DONE");

  return result.data.text;
}

// --------------------
// Route
// --------------------
app.post("/analyze-report", upload.single("file"), async (req, res) => {
  console.log("REQUEST RECEIVED");

  try {
    if (!req.file) {
      console.log("NO FILE");
      return res.json({ error: "No file" });
    }

    const filePath = req.file.path;

    console.log("FILE:", filePath);

    // OCR
    const text = await doOCR(filePath);

    console.log("TEXT:", text.slice(0, 200));

    // AI
    console.log("SEND TO GROQ");

    const chat = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",

      messages: [
        {
          role: "user",
          content: "Summarize this:\n" + text,
        },
      ],
    });

    console.log("GROQ DONE");

    const output = chat.choices[0].message.content;

    console.log("AI OUTPUT:", output);

    fs.unlinkSync(filePath);

    res.json({
      ocr: text.slice(0, 200),
      ai: output,
    });

  } catch (err) {
    console.error("ERROR:", err);

    res.status(500).json({
      error: err.message,
    });
  }
});

// --------------------
app.listen(port, () => {
  console.log("SERVER ON http://localhost:5000");
});
