//funzione generazione celle
function createCell(level) {
    //creo la cella
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.classList.add(level);

    //restituisco la cella
    return cell;
}