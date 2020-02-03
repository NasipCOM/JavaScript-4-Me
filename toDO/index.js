document.addEventListener('DOMContentLoaded', () => {


    const myForm = document.getElementById('myForm');
    const answer = document.querySelector('.answer');



    const createCard = event => {
        event.preventDefault();    
        const input = document.querySelector('.myInput').value;
        if(input){
            answer.appendChild(createTask(input));
        }
        myForm.reset();
    }

    function createTask(text) {

        const card = document.createElement('div');

        card.className = 'saved';
        card.innerHTML = `${text}`

        return card;
    };



    myForm.addEventListener('submit', createCard);




});