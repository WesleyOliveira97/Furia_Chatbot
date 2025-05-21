/**
 * Main JavaScript file for Furia Chatbot
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Chat window minimize/expand functionality
    const btnMinimize = document.querySelector('.btn-minimize');
    const btnExpand = document.querySelector('.btn-expand');
    const chatContainer = document.querySelector('.chat-container');
    
    if (btnMinimize && chatContainer) {
        btnMinimize.addEventListener('click', function() {
            chatContainer.classList.toggle('minimized');
        });
    }
    
    if (btnExpand && chatContainer) {
        btnExpand.addEventListener('click', function() {
            chatContainer.classList.toggle('expanded');
            if (chatContainer.classList.contains('expanded')) {
                btnExpand.innerHTML = '<i class="fas fa-compress"></i>';
            } else {
                btnExpand.innerHTML = '<i class="fas fa-expand"></i>';
            }
        });
    }
    
    // Handle emoji button click (placeholder for emoji picker)
    const btnEmoji = document.querySelector('.btn-emoji');
    if (btnEmoji) {
        btnEmoji.addEventListener('click', function() {
            alert('Emoji picker will be implemented here!');
        });
    }
    
    // Handle attachment button click
    const btnAttachment = document.querySelector('.btn-attachment');
    if (btnAttachment) {
        btnAttachment.addEventListener('click', function() {
            alert('Attachment functionality will be implemented here!');
        });
    }
    
    // Auto-scroll chat to bottom when new messages arrive
    function scrollToBottom() {
        const chatMessages = document.getElementById('chat-messages');
        if (chatMessages) {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }
    
    // Call scrollToBottom on page load
    scrollToBottom();
    
    // Expose functions to global scope for use in other scripts
    window.chatUtils = {
        scrollToBottom: scrollToBottom
    };
});
