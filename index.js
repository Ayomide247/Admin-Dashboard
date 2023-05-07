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
            // return alert('Fill all inputs');
        } else {
            e.classList.add('border-[orange]', 'border');
        }
    });

    if (allFieldsHaveValue) {
        loginBtn.classList.add('bg-[orange]', 'text-white', 'ring', 'ring-[orange]', 'ring-offset-1');
        loginBtn.removeAttribute('disabled');
    } else {
        loginBtn.classList.remove('bg-[orange]', 'text-white', 'ring', 'ring-[orange]', 'ring-offset-1');
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


    window.location.href = 'dashboard.html';


})



