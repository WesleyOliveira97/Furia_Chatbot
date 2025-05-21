/**
 * Chatbot functionality for Furia Chatbot
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');

    // Bot responses (for demo purposes)
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

    // Get current time formatted as HH:MM
    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    // Create a message element
    function createMessageElement(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = isUser ? 'message user-message' : 'message bot-message';

        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'message-avatar';

        const avatarImg = document.createElement('img');
        avatarImg.src = isUser ? 'assets/images/user-avatar.png' : 'assets/images/bot-avatar.png';
        avatarImg.alt = isUser ? 'User Avatar' : 'Bot Avatar';

        avatarDiv.appendChild(avatarImg);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';

        const messageP = document.createElement('p');
        messageP.textContent = message;

        const timeSpan = document.createElement('span');
        timeSpan.className = 'message-time';
        timeSpan.textContent = getCurrentTime();

        contentDiv.appendChild(messageP);
        contentDiv.appendChild(timeSpan);

        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);

        return messageDiv;
    }

    // Add a message to the chat
    function addMessage(message, isUser = false) {
        const messageElement = createMessageElement(message, isUser);
        chatMessages.appendChild(messageElement);
        window.chatUtils.scrollToBottom();
    }

    // Get a random bot response (for demo purposes)
    function getRandomBotResponse() {
        const randomIndex = Math.floor(Math.random() * botResponses.length);
        return botResponses[randomIndex];
    }

    // Show typing indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <img src="assets/images/bot-avatar.png" alt="Bot Avatar">
            </div>
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;

        chatMessages.appendChild(typingDiv);
        window.chatUtils.scrollToBottom();
        return typingDiv;
    }

    // Remove typing indicator
    function removeTypingIndicator(typingDiv) {
        if (typingDiv && typingDiv.parentNode) {
            typingDiv.parentNode.removeChild(typingDiv);
        }
    }

    // Send message to server and get response
    async function sendMessageToServer(message) {
        try {
            const typingIndicator = showTypingIndicator();

            const response = await fetch('/api/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });

            const data = await response.json();

            // Remove typing indicator and add bot response
            removeTypingIndicator(typingIndicator);
            addMessage(data.message, false);
        } catch (error) {
            console.error('Error communicating with the server:', error);
            // Fallback to random response if server communication fails
            const typingIndicator = document.getElementById('typing-indicator');
            removeTypingIndicator(typingIndicator);
            addMessage("Desculpe, estou tendo problemas de comunicação. Tente novamente mais tarde.", false);
        }
    }

    // Handle form submission
    if (chatForm) {
        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const message = userInput.value.trim();

            if (message !== '') {
                // Add user message to chat
                addMessage(message, true);

                // Clear input
                userInput.value = '';

                // Send message to server and get response
                sendMessageToServer(message);
            }
        });
    }

    // Also trigger send on button click (for mobile users)
    const sendButton = document.querySelector('.btn-send');
    if (sendButton) {
        sendButton.addEventListener('click', function() {
            const event = new Event('submit', {
                'bubbles': true,
                'cancelable': true
            });
            chatForm.dispatchEvent(event);
        });
    }
});
