# Furia Chatbot

A modern, responsive chatbot interface built with HTML, CSS, and JavaScript.

## Project Structure

```
Furia_Chatbot/
├── assets/
│   └── images/
│       ├── bot-avatar.png
│       ├── favicon.ico
│       ├── logo.png
│       ├── README.md
│       └── user-avatar.png
├── css/
│   ├── components/
│   │   └── chat.css
│   └── styles.css
├── js/
│   ├── components/
│   └── main.js
│   └── chatbot.js
├── index.html
└── README.md
```

## Features

- Responsive design that works on desktop and mobile devices
- Modern UI with clean, intuitive interface
- Chat message animations and typing indicators
- Expandable/minimizable chat window
- Placeholder for emoji picker and file attachments
- Demo bot responses for testing

## Getting Started

1. Clone this repository
2. Add your own images to the `assets/images/` directory (see README.md in that directory)
3. Open `index.html` in your browser to see the chatbot interface

## Customization

### Colors

You can easily customize the colors by modifying the CSS variables in the `:root` selector in `css/styles.css`:

```css
:root {
    --primary-color: #4a6fa5;
    --secondary-color: #166088;
    --accent-color: #4fc3f7;
    /* other variables */
}
```

### Bot Responses

For the demo, the bot responses are stored in the `botResponses` array in `js/chatbot.js`. You can modify these or replace the entire response mechanism with your own chatbot backend.

### Adding Real Chatbot Functionality

To connect this frontend to a real chatbot backend:

1. Modify the `simulateBotTyping()` function in `js/chatbot.js` to make API calls to your chatbot backend
2. Replace the random responses with actual responses from your API
3. Add any additional functionality needed for your specific use case

## Browser Compatibility

This interface is designed to work with modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is available for your use. Please provide attribution if you use it in your projects.

## Future Improvements

- Add actual emoji picker integration
- Implement file upload functionality
- Add user authentication
- Add chat history storage
- Implement real chatbot backend integration
