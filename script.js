document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "I love you more than words can say.",
        "You are the sunshine in my life.",
        "Thank you for two amazing years of love and laughter.",
        "I can't wait to spend forever with you.",
        "You make every moment magical.",
        "Happy anniversary, my love. ❤️",
        "Forever and always, you’re my heart."
    ];

    const messageList = document.getElementById('message-list');

    // Add messages dynamically with a delay
    messages.forEach((message, index) => {
        setTimeout(() => {
            const li = document.createElement('li');
            li.textContent = message;
            messageList.appendChild(li);
        }, index * 1000); // Delay each message by 1 second
    });
});
