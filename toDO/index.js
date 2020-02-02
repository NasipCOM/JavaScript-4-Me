document.addEventListener('DOMContentLoaded', () => {



    const saveBtn = document.querySelector('.btn');
    const answer = document.querySelector('.answer');

    function createCard(event) {
        event.preventDefault();
        console.log(event.target);
        const input = document.querySelector('.myInput').value;
        answer.appendChild(createTask(input));
    }

    function createTask(text) {

        const card = document.createElement('div');

        card.className = 'saved';
        card.innerHTML = `${text}`

        return card;
    };



    saveBtn.addEventListener('click', createCard);




});