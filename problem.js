(function() {

    "use strict";
  
    const responses = [
      "Hi User",
      "look behind you",
      "ask away",
      "Really?",
      "We are working on that problem",
      ":)",
      "Have nice day use",
      "2019 Henrey was areested for stealing info from Quitter archives and from users.",
      "...",
      "2011 Quitter was first concived by Jerald M fritz and Henrey Bolard ",
      "What is problem?",
      "Loading",
      "I don't know."
    ];
  
    const submit = document.querySelector(".chat-submit");
    const chatBox = document.querySelector(".chat-box");
    const chatInput = document.querySelector(".chat-input");
  
    // const aiThinking = false;
  
    function chatTemplate(aiOrPerson) {
      return (
        `
          <div class="ai-person-container">
            <div class="${aiOrPerson.class}">
              <p>${aiOrPerson.text}</p>
            </div>
            <span class="${aiOrPerson.class}-date">${aiOrPerson.date}</span>
          </div>
        `
      );
    }
  
    submit.addEventListener("click", function(e) {
      appendChatBox(true);
    });
  
    document.addEventListener("keypress", function(e) {
      if (e.keyCode == "13") {
        appendChatBox(true);
      }
    })
  
    function appendChatBox(fromPerson) {
      const date = new Date()
      if (!fromPerson){
        date.setSeconds(date.getSeconds() + 2)
      }
      if (fromPerson && !chatInput.value.trim()) {
        return;
      }
      const timestamp = date.toLocaleTimeString()
      const newChatDiv = chatTemplate({
        class: fromPerson ? "person" : "ai",
        text: fromPerson ? chatInput.value.trim() : aiResponse(),
        date: timestamp
      });
      if (!fromPerson) {
        // make it so it only responds once to multiple fast sentences
        setTimeout(function() {
          chatBox.innerHTML += newChatDiv;
          chatBox.scrollTop = chatBox.scrollHeight;
        }, 2000)
      } else {
        chatBox.innerHTML += newChatDiv;
        chatBox.scrollTop = chatBox.scrollHeight;
      }
      if (fromPerson) {
        chatInput.value = "";
        appendChatBox(false);
      }
    }
  
    function aiResponse() {
      const responseIndex = getRandomInt(0, responses.length - 1);
      const response = responses[responseIndex];
      return response;
    }
  
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
  }())


function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}