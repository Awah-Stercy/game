let b = ["","","","","","","","",""], p = "X", active = true;
let win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function play(i) {
    if (b[i] || !active) return;
    b[i] = p;
    let cells = document.querySelectorAll(".board button");
    cells[i].textContent = p;

    if (win.some(w => w.every(n => b[n] == p))) {
        document.getElementById("status").textContent = p + " Wins!";
        active = false;
    } else if (!b.includes("")) {
        document.getElementById("status").textContent = "Draw!";
        active = false;
    } else {
        p = p == "X" ? "O" : "X";
        document.getElementById("status").textContent = "Player " + p + "'s turn";
    }
}

function restart() {
    b = ["","","","","","","","",""];
    p = "X";
    active = true;
    document.querySelectorAll(".board button").forEach(c => c.textContent = "");
    document.getElementById("status").textContent = "Player X's turn";
}