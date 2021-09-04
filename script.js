const gameBoard = (() => {
    let _tiles = [["", "", ""], ["", "", ""], ["", "", ""]];

    const _checkHorizontal = () => {

        for (let row = 0; row < 3; row++) {
            let tmp = _tiles[row][0];

            if (tmp == '') {
                continue
            }

            for (let col = 0; col < 3; col++) {
                if (_tiles[row][col] != tmp) {
                    break;
                }

                if (col == 2) {
                    return tmp;
                }
            }

        }

        return false;

    }

    const _checkVertical = () => {

        for (let col = 0; col < 3; col++) {
            let tmp = _tiles[0][col];

            if (tmp == '') {
                continue;
            }

            for (let row = 0; row < 3; row++) {
                if (_tiles[row][col] != tmp) {
                    break;
                }

                if (row == 2) {
                    return tmp;
                }
            }

        }

        return false;

    }

    const _checkDiagonal = () => {
        if (_tiles[1][1] == '') {
            return false
        }
        else if (_tiles[0][0] == _tiles[1][1] &&
                _tiles[1][1] == _tiles[2][2]) {
            return _tiles[0][0];
        }
        else if (_tiles[0][2] == _tiles[1][1] &&
                _tiles[1][1] == _tiles[2][0]) {
            return _tiles[0][2];
        }
        else {
            return false;
        }
    }
    
    const display = () => {
        let board = document.getElementById("board");
        board.innerHTML = "";

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {

                let tile = document.createElement("button");
                tile.textContent = ""; 
                tile.id = "tile";

                tile.onclick = () => {
                    game.play(tile, row, col);
                }

                board.appendChild(tile);
            }
        }
    }

    const placeTile = (row, col, sym) => {
        _tiles[row][col] = sym;
    }

    const checkTile = (row, col) => {
        return _tiles[row][col] == '';
    }

    const isFull = () => {
        for (const row of _tiles) {
            for (const col of row) {
                if (col == '') {
                    return false;
                }
            }
        }

        return true;
    }

    const gameOver = () => {
        console.log(_tiles);
        console.log(_checkVertical());
        return _checkDiagonal() || _checkHorizontal() || _checkVertical();
    }

    return {
        display,
        isFull,
        placeTile,
        checkTile,
        gameOver
    };
})();

const player = (sym) => {

    const play = (obj, row, col) => {
        obj.textContent = sym;
        gameBoard.placeTile(row, col, sym);
    }

    return Object.assign({}, {play});
}

let p1 = player("X");
let p2 = player("O")

const game = ((p1, p2) => {
    let turn = true;
    let done = false;
    const turnSign = document.getElementById("turn");

    const _gameStatus = () => {
        let status = gameBoard.gameOver();
        if (status) {
            alert(`${status} wins!`);
            done = true;
        }
        else if (gameBoard.isFull()) {
            alert("Tie Game!")
            done = true;
        }
    }

    const play = (obj, row, col) => {
        if (!done && gameBoard.checkTile(row, col)) {
            if (turn) {
                p1.play(obj, row, col)
                turnSign.textContent = "Player 2's Turn:"
            }
            else {
                p2.play(obj, row, col);
                turnSign.textContent = "Player 1's Turn:"
            }
            _gameStatus();
            turn = !turn;
        }
    } 


    return {
        play
    }
})(p1, p2);

gameBoard.display();