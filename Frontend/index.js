document.addEventListener('DOMContentLoaded', function () {
    class Chatbox {
        constructor() {
            this.args = {
                openButton: document.querySelector('.chatbox__icon'),
                chatBox: document.querySelector('.chatbox'),
                sendButton: document.querySelector('.chatbox__send--footer'),
                closeButton: document.querySelector('.chatbox__close'),
            };

            this.state = false;
            this.messages = [];
            this.greetingDisplayed = false; 
        }

        display() {
            const { openButton, chatBox, sendButton, closeButton } = this.args;

            if (openButton) openButton.addEventListener('click', () => this.toggleState());
            if (sendButton) sendButton.addEventListener('click', () => this.onSendButton(chatBox));

            const node = chatBox.querySelector('input');
            if (node) {
                node.addEventListener("keyup", ({ key }) => {
                    if (key === "Enter") {
                        this.onSendButton(chatBox);
                    }
                });
            }

            if (closeButton) closeButton.addEventListener('click', () => this.toggleState());
        }

        toggleState() {
            this.state = !this.state;
            if (this.state) {
                this.args.chatBox.style.display = 'block';
                this.args.chatBox.classList.add('chatbox--active');

                // AUTO-START: Triggers the Main Menu immediately on open
                if (!this.greetingDisplayed) {
                    this.sendPresetMessage("START"); 
                    this.greetingDisplayed = true;
                }
            } else {
                this.args.chatBox.classList.remove('chatbox--active');
                this.args.chatBox.style.display = 'none';
            }
        }

        // Helper function for button clicks
        sendPresetMessage(text) {
            let msg1 = { name: "User", message: text };
            this.messages.push(msg1);
            this.updateChatText(this.args.chatBox);

            this.getChatbotResponse(text, (responseText, options) => {
                let msg2 = { name: "Bot", message: responseText, options: options };
                this.messages.push(msg2);
                this.updateChatText(this.args.chatBox);
            });
        }

        onSendButton(chatbox) {
            const textField = chatbox.querySelector('input');
            let text1 = textField.value;
            if (text1 === "") return;

            let msg1 = { name: "User", message: text1 };
            this.messages.push(msg1);
            this.updateChatText(chatbox);
            textField.value = '';

            this.getChatbotResponse(text1, (responseText, options) => {
                let msg2 = { name: "Bot", message: responseText, options: options };
                this.messages.push(msg2);
                this.updateChatText(chatbox);
            });
        }

        updateChatText(chatbox) {
            var html = '';
            // We slice and reverse so the newest messages are rendered at the bottom
            this.messages.slice().reverse().forEach((item) => {
                if (item.name === "User") {
                    html += '<div class="messages__item messages__item--operator">' + item.message + '</div>';
                } else {
                    // Bot Message Container
                    html += '<div class="messages__item messages__item--visitor">';
                    
                    // 1. Top Part: Normal Text Response
                    html += '<div style="margin-bottom: 10px;">' + item.message + '</div>';
                    
                    // 2. Bottom Part: Vertical List of Same-Sized Buttons
                    if (item.options && item.options.length > 0) {
                        html += '<div class="button-list" style="display: flex; flex-direction: column; gap: 8px; align-items: flex-start;">';
                        
                        item.options.forEach(opt => {
                            html += `<button class="menu-btn" onclick="window.chatbox.sendPresetMessage('${opt}')" 
                                    style="background: #5833aa; color: white; border: none; padding: 10px; border-radius: 8px; 
                                    cursor: pointer; font-size: 13px; width: 200px; text-align: center; transition: 0.3s;">
                                    ${opt}</button>`;
                        });
                        html += '</div>';
                    }
                    html += '</div>';
                }
            });

            const chatmessage = chatbox.querySelector('.chatbox__messages');
            if (chatmessage) {
                chatmessage.innerHTML = html;
            }
        }

        getChatbotResponse(userMessage, callback) {
            fetch('http://localhost:5000/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage })
            })
            .then(response => response.json())
            .then(data => {
                // Pass both the text and the buttons back
                callback(data.response, data.options || []);
            })
            .catch(error => {
                console.error('Error:', error);
                callback("Connection error. Is app.py running?", ["Main Menu"]);
            });
        }
    }

    const chatbox = new Chatbox();
    chatbox.display();
    // Make it global so the button onclick events can find the function
    window.chatbox = chatbox; 
});