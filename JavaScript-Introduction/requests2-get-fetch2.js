// Information to reach API
const url = ('https://api.datamuse.com/words')
const queryParams = '?sl='
//queryParams will be the start of your query string and will narrow your search to words that sounds like your word. 
// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
    const wordQuery = inputField.value;
    //You'll need wordQuery to store the value of what is being typed into the input field.
    const endpoint = `${url}${queryParams}${wordQuery}`;
    fetch(endpoint).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => {
        console.log(networkError.message);
    }
    );

}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }
    getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
