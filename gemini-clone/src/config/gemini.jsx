const apiKey = "AIzaSyB-quvQwr2hZ-8iN9vaZfmjaKRg7Za98aw"; // Your API key
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(apiKey); // Pass your API key directly

// ...

const model = genAI.getGenerativeModel({ model: "v1beta/projects/My 20Project 2042606/models/gemini-pro:generateContent" });

// ...

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

  // try {
  //   // Update the fetch request to point to your proxy server
  //   const response = await fetch('http://localhost:3001/generateContent', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ prompt })
  //   });

  //   if (!response.ok) {
  //     throw new Error(`Error fetching data: ${response.status}`);
  //   }

    const result = await response.json();
    const responseText = result.response.text();
    console.log(responseText);
    return responseText;
  } catch (error) {
    console.error('Error:', error);
    // Handle errors gracefully
    return null;
  }
}

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

export default run;
