const input = document.getElementById("input");
const composer = document.getElementById("composer");
const messages = document.getElementById("messages");
const welcome = document.getElementById("welcome");
const sidebar = document.getElementById("sidebar");
const menu = document.getElementById("menu");
const newChat = document.getElementById("newChat");

function addMessage(text, type){
  const row = document.createElement("div");
  row.className = "message " + type;
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  row.appendChild(bubble);
  messages.appendChild(row);
  messages.scrollIntoView({behavior:"smooth", block:"end"});
}

function sendMessage(text){
  text = text.trim();
  if(!text) return;
  welcome.style.display = "none";
  messages.style.display = "block";
  addMessage(text, "user");
  input.value = "";
  input.style.height = "auto";

  setTimeout(() => {
    addMessage("Sheri da 😄 I’m ready!\n\nIthu oru demo UI aanu. Connect a real AI API/backend to make Mallu AI generate actual answers. 🚀", "ai");
  }, 550);
}

composer.addEventListener("submit", e => {
  e.preventDefault();
  sendMessage(input.value);
});

input.addEventListener("input", () => {
  input.style.height = "auto";
  input.style.height = Math.min(input.scrollHeight, 120) + "px";
});

input.addEventListener("keydown", e => {
  if(e.key === "Enter" && !e.shiftKey){
    e.preventDefault();
    composer.requestSubmit();
  }
});

document.querySelectorAll(".suggestion").forEach(btn => {
  btn.addEventListener("click", () => {
    input.value = btn.dataset.prompt;
    input.focus();
  });
});

newChat.addEventListener("click", () => {
  messages.innerHTML = "";
  messages.style.display = "none";
  welcome.style.display = "block";
  input.value = "";
  input.focus();
  sidebar.classList.remove("open");
});

menu.addEventListener("click", () => sidebar.classList.toggle("open"));
