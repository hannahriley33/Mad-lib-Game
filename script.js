const submit = document.getElementById('submit');
const tryAgain = document.getElementById('tryAgain');
const hidePart = document.getElementById('hide');
const showPart = document.getElementById('show');
const adj1Input = document.getElementById('adj1Input');
const adj1Output = document.getElementById('adj1Output');
const adj2Input = document.getElementById('adj2Input');
const adj2Output = document.getElementById('adj2Output');
const adj3Input = document.getElementById('adj3Input');
const adj3Output = document.getElementById('adj3Output');
const adj4Output = document.getElementById('adj4Output');
const adj4Input = document.getElementById('adj4Input');
const adj5Input = document.getElementById('adj5Input');
const adj5Output = document.getElementById('adj5Output');
const adj6Input = document.getElementById('adj6Input');
const adj6Output = document.getElementById('adj6Output');
const adj7Input = document.getElementById('adj7Input');
const adj7Output = document.getElementById('adj7Output');
const noun1Input = document.getElementById('noun1Input');
const noun1Output = document.getElementById('noun1Output');
const noun2Input = document.getElementById('noun2Input');
const noun2Output = document.getElementById('noun2Output');
const noun3Input = document.getElementById('noun3Input');
const noun3Output = document.getElementById('noun3Output');
const noun4Input = document.getElementById('noun4Input');
const noun4Output = document.getElementById('noun4Output');
const verb1Input = document.getElementById('verb1Input');
const verb1Output = document.getElementById('verb1Output');
const verb2Input = document.getElementById('verb2Input');
const verb2Output = document.getElementById('verb2Output');
const verb3Input = document.getElementById('verb3Input');
const verb3Output = document.getElementById('verb3Output');
const verb4Input = document.getElementById('verb4Input');
const verb4Output = document.getElementById('verb4Output');

function fillInBlanks() {
    adj1Output.textContent = adj1Input.value;
    adj2Output.textContent = adj2Input.value;
    adj3Output.textContent = adj3Input.value;
    adj4Output.textContent = adj4Input.value;
    adj5Output.textContent = adj5Input.value;
    adj6Output.textContent = adj6Input.value;
    adj7Output.textContent = adj7Input.value;
    noun1Output.textContent = noun1Input.value;
    noun2Output.textContent = noun2Input.value;
    noun3Output.textContent = noun3Input.value;
    noun4Output.textContent = noun4Input.value;
    verb1Output.textContent = verb1Input.value;
    verb2Output.textContent = verb2Input.value;
    verb3Output.textContent = verb3Input.value;
    verb4Output.textContent = verb4Input.value;
    showResult();
}

function clearInputs() {
    adj1Input.value = '';
    adj2Input.value = '';
    adj3Input.value = '';
    adj4Input.value = '';
    adj5Input.value = '';
    adj6Input.value = '';
    adj7Input.value = '';
    noun1Input.value = '';
    noun2Input.value = '';
    noun3Input.value = '';
    noun4Input.value = '';
    verb1Input.value = '';
    verb2Input.value = '';
    verb2Input.value = '';
    verb3Input.value = '';
    verb4Input.value = '';
}

function showResult() {
    hidePart.style.display = 'none';
    showPart.style.display = 'block';
}

function retry () {
    clearInputs();
    hidePart.style.display = 'block';
    showPart.style.display = 'none';
}

submit.addEventListener('click', fillInBlanks);

tryAgain.addEventListener('click', retry);