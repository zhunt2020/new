const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    const fName = document.getElementById('FirstName').value;
    const lName = document.getElementById('LastName').value;
    const email = document.getElementById('email').value;

    const male = document.getElementById('male');
    const female = document.getElementById('Female');
    const nonBinary = document.getElementById('Non-Binary');
    const p = document.querySelector('.S');

    if(male.checked) {
        p.textContent = `Hello Mr.${lName} we got your message and we will be emailing at ${email} about your conserns`;
    } else if (female.checked) {
        p.textContent = `Hello Mrs/Ms.${lName} we got your message and we will be emailing at ${email} about your conserns.`;

    } else if (nonBinary.checked){
        p.textContent = `Hello Mx.${lName} we got your message and we will be emailing at ${email} about your conserns.`;

    } else {
        p.textContent = `Hello ${fName} ${lName} we got your message and we will be emailing at ${email} about your conserns.`;
    }
});