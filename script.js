const gameBoard = (() => {
    let _tiles = [["", "", ""], ["", "", ""], ["", "", ""]];
    
    const display = () => {
        let board = document.getElementById("board");
        board.innerHTML = "";

        for (const row of _tiles) {
            for (const col of row) {

                let tile = document.createElement("button");
                tile.textContent = col; 
                tile.id = "tile";

                board.appendChild(tile);
            }
        }
    }

    return {
        display
    };
})();

const player = (sym) => {

    const play = (obj) => {
        obj.textContent = sym;
    }

    return {

    };
}

gameBoard.display();

let p1 = player("X");
let p2 = player("O")