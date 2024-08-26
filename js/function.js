//funzione generazione celle
function createCell(level) {
    //creo la cella
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.classList.add(level);

    //restituisco la cella
    return cell;
}

//genero tot numeri casuali tutti diversi
const generateRandomNumbers = (max, tot) => {
    //array di tot numeri
    const array = [];

    while (array.length < tot) {
        //creo numero random tra min e max compresi
        const number = Math.floor(Math.random() * max) + 1;
        //verifico se già presente e nel caso diverso inserisco nell'array
        if (!array.includes(number)) array.push(number);
    }

    return array;
}
