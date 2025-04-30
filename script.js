
function showTab(tabId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

// Idea submission
document.getElementById('ideaForm').onsubmit = function(e) {
    e.preventDefault();
    const input = document.getElementById('ideaInput');
    const idea = input.value.trim();
    if (idea) {
        const li = document.createElement('li');
        li.textContent = idea;
        document.getElementById('ideaList').appendChild(li);
        input.value = '';
    }
};

// Chatbot logic
function chat() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    let response = "I'm not sure, but try asking about food safety or ingredients.";

    if (userInput.includes("healthy")) {
        response = "Healthy foods are those low in processed sugars and additives. Fresh fruits, veggies, and whole grains are great!";
    } else if (userInput.includes("additives")) {
        response = "Additives like Red 40 and BHA are banned in Europe but used in the U.S. They may affect your health long-term.";
    } else if (userInput.includes("why unhealthy")) {
        response = "Because U.S. regulations are looser on food chemicals, and processed food is widely consumed.";
    }

    const messages = document.getElementById('messages');
    messages.innerHTML += "<p><strong>You:</strong> " + userInput + "</p>";
    messages.innerHTML += "<p><strong>Bot:</strong> " + response + "</p>";
    document.getElementById('userInput').value = '';
}

// Game logic
const foodPairs = [
    ["Apple", "Soda", 0],
    ["Grilled Chicken", "Fried Chicken", 0],
    ["Whole Grain Bread", "White Bread", 0],
    ["Water", "Energy Drink", 0],
    ["Salad", "Burger", 0]
];

let currentPair;

function choose(option) {
    const result = document.getElementById('result');
    if (option === currentPair[2]) {
        result.textContent = "Correct!";
    } else {
        result.textContent = "Wrong choice!";
    }
    setTimeout(newPair, 1000);
}

function newPair() {
    const i = Math.floor(Math.random() * foodPairs.length);
    currentPair = foodPairs[i];
    document.getElementById('option1').textContent = currentPair[0];
    document.getElementById('option2').textContent = currentPair[1];
    document.getElementById('result').textContent = '';
}
window.onload = () => {
    newPair();
    showTab('home');
};
