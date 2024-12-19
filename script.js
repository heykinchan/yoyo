// document.addEventListener('DOMContentLoaded', () => {
//     const messages = [
//         "Hey,",
//         "How is your day?",
//         "Every story you say,",
//         "Always brightens my day."
//         " ",
//         "I may not know every thought in your head,",
//         "And I may not always well articulate.",
//         "But I love you more than words can say.",
//         "You are the sunshine in my everyday.",
//         " ",
//         "We've been through the highs and lows,",
//         "Moments of happiness and sadness.",
//         "Especially the journey to Australia,",
//         "It's not easy and we've made it to where we are so far.",
//         "I am so proud of you for what you've challenged yourself and how much effort you've put in,",
//         "And I am so grateful that our relationship strengthens with all the steps we take."
//         "The laughter we made,",
//         "The tears we drop,",
//         "The quarrels we had,",
//         "The impossibles that we make possible,",
//         "Will be the forever source of trust and faith for the future.".
//         " ",
//         "Thank you for two amazing years of love and laughter.",
//         "I can't wait to spend forever with you.",
//         "You make every moment magical.",
//         " ",
//         "Happy anniversary, my love. ❤️",
//         "Forever and always, you’re my heart."
//     ];

//     const messageList = document.getElementById('message-list');

//     // Add messages dynamically with a delay
//     messages.forEach((message, index) => {
//         setTimeout(() => {
//             const li = document.createElement('li');
//             li.textContent = message;
//             messageList.appendChild(li);
//         }, index * 1000); // Delay each message by 1 second
//     });
// });

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

