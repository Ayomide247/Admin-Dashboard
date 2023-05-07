const container = document.querySelector('#container')
const formDivs = container.querySelectorAll('#formDiv')
const confirmBtn = container.querySelector('button')


// ----------------Active Input funtionality----------//


const checkAllFields = () => {

    let allFieldsHaveValue = true;

    formDivs.forEach(e => {
        const inputDiv = e.querySelector('input');
        if (inputDiv.value.trim() === '') {
            allFieldsHaveValue = false;
            e.classList.remove('border-[orange]');
        } else {
            e.classList.add('border-[orange]');
            // e.classList.remove('border-[red]', 'border');

        }
    });

    if (allFieldsHaveValue) {
        confirmBtn.classList.add('bg-[orange]', 'text-white', 'ring', 'ring-[orange]', 'ring-offset-1');
        confirmBtn.removeAttribute('disabled');
    } else {
        confirmBtn.classList.remove('bg-[orange]', 'text-white', 'ring', 'ring-[orange]', 'ring-offset-1');
        confirmBtn.setAttribute('disabled', 'true');
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
    window.location.href = 'confirmed.html';
})