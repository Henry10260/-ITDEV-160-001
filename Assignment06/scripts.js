
// Array to store messages
var messages = [];

// Message type lookup object. Similar to enum.
var messageType = {
  out: 'out-message',
  in: 'in-message',
  unknown: 'unknown-message'
};

// Seed data
var data = [
  {
    type: messageType.out,
    user: 'Mike',
    message: 'Hey, do you have lunch plans?'
  },
  {
    type: messageType.in,
    user: 'Joe',
    message: 'Hi Mike! No, how about QDoba?'
  },
  {
    type: messageType.out,
    user: 'Mike',
    message: "Ok, let's go"
  }
];

// Message constructor function
function Message(type, user, message) {
  this.type = type;
  this.user = user;
  this.message = message;
}

// Create and return an element for the supplied message
function createMessageElement(message) {
  // Create text element for the message
  var messageText = document.createTextNode(
    message.user + ': ' + message.message
  );

  // Create the element and add the message text.
  var messageEl = document.createElement('div');
  messageEl.appendChild(messageText);

  // Add a class using the message type.
  messageEl.className = message.type;

  return messageEl;
}

// Button click event handler to add a new message
function addMessageHandler(event) {
  var user, type;
  var messageInputEl = document.getElementById('message-input');
  var messageContainerEl = document.getElementById('message-container');

  // Determine message type and set message variables accordingly.
  switch (event.target.id) {
    case 'send-button':
      user = 'Mike';
      type = messageType.out;
      break;
    case 'reply-button':
      user = 'Joe';
      type = messageType.in;
      break;
    default:
      user = 'unknown';
      type = messageType.unknown;
      break;
  }

  // Create a new message.
  if (messageInputEl.value != '') {
    // Construct a message and add it to the array
    var message = new Message(type, user, messageInputEl.value);
    messages.push(message);

    // Create a message element.
    var messageEl = createMessageElement(message);

    // Add the message element to the document.
    messageContainerEl.appendChild(messageEl);

    // Reset input.
    messageInputEl.value = '';
  }
}

function init() {
  // Wire event handlers
  document.getElementById('send-button').onclick = addMessageHandler;
  document.getElementById('reply-button').onclick = addMessageHandler;

  var messageContainerEl = document.getElementById('message-container');

  // Load seed data
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    var message = new Message(item.type, item.user, item.message);
    messages.push(message);

    var messageEl = createMessageElement(message);
    messageContainerEl.appendChild(messageEl);
  }
}

init();