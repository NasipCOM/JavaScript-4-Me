document.addEventListener('DOMContentLoaded', () => {


    const myForm = document.getElementById('myForm');
    const answer = document.querySelector('.answer');
    const deleteBtn = document.getElementById('deleteBtn');


    const createCard = event => {
        event.preventDefault();
        const input = document.querySelector('.myInput').value;
        if (input) {
            answer.appendChild(createTask(input));
        }
        myForm.reset();
    }

    function createTask(text) {

        const card = document.createElement('div');

        card.className = 'saved';
        card.innerHTML = `${text} <button id = "deleteBtn">❌</button>`;

        return card;
    };



    myForm.addEventListener('submit', createCard);
    
    deleteBtn.addEventListener('click', () => {
        answer.style.display = 'none';
    });
});