const evtSource = new EventSource("http://localhost:5000");
const chatBox = document.getElementById('chat-box');

evtSource.onmessage = (event) => {
  console.log('res: ', event.data);
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message';
  messageDiv.innerHTML = event.data;
  chatBox.appendChild(messageDiv);
};
