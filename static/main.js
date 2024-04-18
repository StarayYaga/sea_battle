const socket = new WebSocket('ws://192.168.1.66:8080').setAllowedOrigins("*")
const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');

function displayMessage(message) {
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
}

function sendMessage() {
    const message = messageInput.value;
    socket.send(message);
    displayMessage(`You: ${message}`);
    messageInput.value = '';
}

socket.addEventListener('message', (event) => {
    displayMessage(`Friend: ${event.data}`);
});

socket.addEventListener('open', () => {
    displayMessage('Connected to the Chat!');
});