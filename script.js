const button = document.getElementById("button");

function fillInBlanks() {
    console.log('test');
    const adj1Input = document.getElementById('adj1Input');
    const adj1Output = document.getElementById('adj1Output');
    adj1Output.textContent = adj1Input.value;
}

button.addEventListener('click', fillInBlanks);