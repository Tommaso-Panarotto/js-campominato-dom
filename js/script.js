/*
0.recupero gli elementi dal DOM
1. genero le celle al click del bottone
2. inserisco le celle nel DOM
3. riempo le celle con il contenuto
4. reagisco al click sulla cella
*/

//FASE PREPARATORIA
//recupero gli elementi dal DOM
const grid = document.getElementById('grid');
const button = document.querySelector('button');
const level = document.querySelector('select');
const score = document.getElementById('score');
const maxScore = document.getElementById('max-score');
const result = document.getElementById('result');



//reagisco al click
button.addEventListener('click', function () {
    //inizializzo
    grid.innerText = '';
    result.innerText = '';
    score.innerText = 0;
    const bombs = 16;

    //raccolta dati
    const typeOfLevel = level.value;

    //numero righe e colonne
    let rows = 7;
    let cols = 7;

    switch (typeOfLevel) {
        case 'easy':
            rows = 10;
            cols = 10;
            break;
        case 'medium':
            rows = 9;
            cols = 9;
            break;
    }

    //calcolo il numero di celle
    totalCells = rows * cols;

    //mostro max score
    maxScore.innerText = totalCells - bombs;

    //array di numeri casuali per bombe
    const bombArray = generateRandomNumbers(totalCells, bombs);
    console.table(bombArray);

    //genero il numero corretto di celle
    for (let i = 0; i < totalCells; i++) {
        const cell = createCell(typeOfLevel);

        //aggiungo il numero della cella
        cell.append(i + 1);

        //reagisco al click sulla cella
        cell.addEventListener('click', function () {
            //verifico se ha già la classe clicked
            if (cell.classList.contains('clicked')) return;

            cell.classList.add('clicked');
            console.log(cell.innerText);

            //verifico se bomba
            if (bombArray.includes(parseInt(cell.innerText))) {
                cell.classList.add('end');
                result.innerText = `HAI PERSO! ma avevi totalizzato ${score.innerText} punti su ${maxScore.innerText} punti`;
                return
            }
            //incremento il punteggio
            score.innerText++;

            if (score.innerText === maxScore.innerText) {
                result.innerText = `HAI VINTO! totalizzando ${score.innerText} punti su ${maxScore.innerText} punti`;
            }
        }
        )

        //la aggiungo in pagina
        grid.appendChild(cell);
    }
}
)


