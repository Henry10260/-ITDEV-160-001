var messages = [];

var messageType = {
  out: 'out-message',
  in: 'in-message',
  unknown: 'unknown-message'
};

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

function Message(type, user, message) {
  this.type = type;
  this.user = user;
  this.message = message;
}

function createMessageElement(message) {

  var messageText = document.createTextNode(
    message.user + ': ' + message.message
  );

  var messageEl = document.createElement('div');
  messageEl.appendChild(messageText);

  messageEl.className = message.type;

  return messageEl;
}

function addMessageHandler(event) {
  var user, type;
  var messageInputEl = document.getElementById('message-input');
  var messageContainerEl = document.getElementById('message-container');

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
  if (messageInputEl.value !== '') {
    var message = new Message(type, user, messageInputEl.value);
    messages.push(message);
    var messageEl = createMessageElement(message);
    messageContainerEl.appendChild(messageEl);
    messageInputEl.value = '';
  }
}

function init() {
  document.getElementById('send-button').onclick = addMessageHandler;
  document.getElementById('reply-button').onclick = addMessageHandler;

  var messageContainerEl = document.getElementById('message-container');
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    var message = new Message(item.type, item.user, item.message);
    messages.push(message);

    var messageEl = createMessageElement(message);
    messageContainerEl.appendChild(messageEl);
  }
}

init();


