const container = document.querySelector('#container')
const formDivs = container.querySelectorAll('#formDiv')

const loginBtn = container.querySelector('button')


// ----------------Active Input funtionality----------//


const checkAllFields = () => {

    let allFieldsHaveValue = true;

    formDivs.forEach(e => {
        const inputDiv = e.querySelector('input');
        if (inputDiv.value.trim() === '') {
            allFieldsHaveValue = false;
            e.classList.remove('border-[orange]', 'border');
            // e.classList.add('border-[red]', 'border');

            // return alert('Fill all inputs');
        } else {
            e.classList.add('border-[orange]', 'border');
            // e.classList.remove('border-[red]', 'border');

        }
    });

    if (allFieldsHaveValue) {
        loginBtn.classList.add('bg-[orange]', 'text-white', 'ring', 'ring-[orange]', 'ring-offset');
        loginBtn.removeAttribute('disabled');
    } else {
        loginBtn.classList.remove('bg-[orange]', 'text-white', 'ring', 'ring-[orange]', 'ring-offset');
        loginBtn.setAttribute('disabled', 'true');
    }
}

formDivs.forEach(f => {
    const inputDiv = f.querySelector('input');
    inputDiv.addEventListener('input', checkAllFields);

});

checkAllFields();

// ----------- add href linking to the submit button--------//


container.addEventListener('submit', (e) => {
    e.preventDefault();
    let userData = {
        firstName:firstName = container.elements.firstName.value,
        lastName: container.elements.lastName.value,
        email: container.elements.email.value,
        password: container.elements.password.value,  
    }
    localStorage.setItem('userDatas', JSON.stringify(userData));
     window.location.href = 'email_confirm.html';
})