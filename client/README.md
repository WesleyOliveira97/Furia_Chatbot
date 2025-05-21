# Furia Chatbot React Frontend

This is the React frontend for the Furia Chatbot project.

## Project Structure

```
client/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   └── manifest.json
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── bot-avatar.png (you need to add this)
│   │       ├── logo.png (you need to add this)
│   │       └── user-avatar.png (you need to add this)
│   ├── components/
│   │   ├── ChatContainer.js
│   │   ├── ChatHeader.js
│   │   ├── ChatInput.js
│   │   ├── ChatMessages.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Message.js
│   │   └── TypingIndicator.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── ChatContainer.css
│   │   ├── ChatHeader.css
│   │   ├── ChatInput.css
│   │   ├── ChatMessages.css
│   │   ├── Footer.css
│   │   ├── Header.css
│   │   ├── index.css
│   │   ├── Message.css
│   │   └── TypingIndicator.css
│   ├── App.js
│   └── index.js
└── README.md
```

## Features

- Modern, responsive chatbot interface built with React
- Real-time communication with the Node.js backend
- Typing indicators and message animations
- Expandable/minimizable chat window
- Mobile-friendly design

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Running the Frontend

The frontend is designed to work with the Node.js backend. To run both together:

```
# From the root directory (Furia_Chatbot)
npm run dev
```

This will start both the Node.js server and the React development server.

### Building for Production

To build the React app for production:

```
# From the root directory (Furia_Chatbot)
npm run build
```

This will create a production build in the `client/build` directory, which will be served by the Node.js server.

## Customization

### Adding Images

Add the following images to the `src/assets/images` directory:

- `logo.png` - The logo of Furia Chatbot
- `bot-avatar.png` - The avatar image for the chatbot
- `user-avatar.png` - The default avatar image for users

Then uncomment the image import lines in the components.

### Customizing Colors

You can customize the colors by modifying the CSS variables in `src/styles/index.css`:

```css
:root {
  --primary-color: #4a6fa5;
  --secondary-color: #166088;
  --accent-color: #4fc3f7;
  /* other variables */
}
```
