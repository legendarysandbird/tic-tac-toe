const gameBoard = () => {
    let tiles = [["", "", ""], ["", "", ""], ["", "", ""]];
    
    const display = () => {
        let board = document.getElementById("board");
        board.innerHTML = "";

        for (const row of tiles) {
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
}

const player = (sym) => {

    const play = (obj) => {
        obj.textContent = sym;
    }

    return {

    };
}

let g1 = gameBoard();
let p1 = player("X");
let p2 = player("O")

g1.display();