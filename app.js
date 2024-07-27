let slide_content = document.querySelector('#slide-content');
let signin_form = document.querySelector('#signin-form');
let signin_btn = document.querySelector('#signin-btn');
let darkmode_toggle = document.querySelector('#darkmode-toggle');

let slide_index = 0;

slide = () => {
    let slide_items = slide_content.querySelectorAll('img');
    slide_items.forEach(e => e.classList.remove('active'));
    slide_index = slide_index + 1 === slide_items.length ? 0 : slide_index + 1;
    slide_items[slide_index].classList.add('active');
}

setInterval(slide, 2000);

// animate input
document.querySelectorAll('.animate-input').forEach(e => {
    let input = e.querySelector('input');
    let button = e.querySelector('button');

    input.onkeyup = () => {
        if (input.value.trim().length > 0) {
            e.classList.add('active');
        } else {
            e.classList.remove('active');
        }

        console.log('Input value:', input.value); // Debugging statement

        if (checkSigninInput()) {
            signin_btn.removeAttribute('disabled');
        } else {
            signin_btn.setAttribute('disabled', 'true');
        }
    }

    // show password button
    if (button) {
        button.onclick = () => {
            if (input.getAttribute('type') === 'text') {
                input.setAttribute('type', 'password');
                button.innerHTML = 'Show';
            } else {
                input.setAttribute('type', 'text');
                button.innerHTML = 'Hide';
            }
        }
    }
})

checkSigninInput = () => {
    let username = signin_form.querySelector('input[type="text"]').value.trim();
    let password = signin_form.querySelector('input[type="password"]').value.trim();
    let usernameValid = username.length >= 4;
    let passwordValid = password.length >= 8;

    console.log('Username valid:', usernameValid); // Debugging statement
    console.log('Password valid:', passwordValid); // Debugging statement

    return usernameValid && passwordValid;
}

// Handle form submission
signin_form.onsubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting the traditional way

    let username = signin_form.querySelector('input[type="text"]').value.trim();
    let password = signin_form.querySelector('input[type="password"]').value.trim();

    if (username.length < 4) {
        alert('Username must be at least 4 characters long.');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    alert('Form submitted successfully!');
}

// darkmode toggle
darkmode_toggle.onclick = (e) => {
    e.preventDefault();
    let body = document.querySelector('body');
    body.classList.toggle('dark');
    darkmode_toggle.innerHTML = body.classList.contains('dark') ? 'Lightmode' : 'Darkmode';
}
