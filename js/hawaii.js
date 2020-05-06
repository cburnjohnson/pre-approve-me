const form = document.getElementById('response-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const alertType = document.querySelector('input[name="alertType"]:checked')
        .value;
    const alertMessage = document.getElementById('alertMessage').value;

    alert(`${alertType.toUpperCase()} ALERT: ${alertMessage}`);
});
