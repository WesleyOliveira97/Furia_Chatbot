const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
} else {
  // In development, serve the original static files
  app.use(express.static(path.join(__dirname)));
}

// Routes
app.get('/', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  } else {
    res.sendFile(path.join(__dirname, 'index.html'));
  }
});

// API endpoint for chatbot messages
app.post('/api/message', (req, res) => {
  const userMessage = req.body.message;

  // Simple response logic (replace with actual chatbot logic)
  const botResponses = [
    "Olá! Como posso ajudar você hoje?",
    "Estou aqui para responder suas perguntas!",
    "Isso é interessante! Pode me contar mais?",
    "Entendi. Deixe-me pensar sobre isso...",
    "Desculpe, não entendi completamente. Pode reformular?",
    "Claro, posso ajudar com isso!",
    "Essa é uma ótima pergunta!",
    "Estou processando sua solicitação...",
    "Obrigado por compartilhar isso comigo.",
    "Vou pesquisar isso para você."
  ];

  // Get a random response
  const randomIndex = Math.floor(Math.random() * botResponses.length);
  const botResponse = botResponses[randomIndex];

  // Send response with a slight delay to simulate thinking
  setTimeout(() => {
    res.json({
      message: botResponse,
      timestamp: new Date().toISOString()
    });
  }, 1000);
});

// Catch-all route to serve the React app for any unknown routes
app.get('*', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  } else {
    res.sendFile(path.join(__dirname, 'index.html'));
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API endpoint available at http://localhost:${PORT}/api/message`);
  if (process.env.NODE_ENV === 'production') {
    console.log(`Serving React app from client/build`);
  } else {
    console.log(`Serving static files from root directory`);
  }
});
