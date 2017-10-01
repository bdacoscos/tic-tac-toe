## Minimum Reqs

* Display an empty tic-tac-toe board when the page is initially displayed.

* A player can click on the nine cells to make a move.

* Every click will alternate between marking an X and O.

* Once occupied with an X or O, the cell cannot be played again.

* Provide a Reset Game button that will clear the contents of the board.


## App logic

- Initialize state (game ready for click)
    - set vars to initial values
      - user: 1
      - board: [0,0,0,0,0,0,0,0,0];
      - score: 0
- Add event listener to ```.board```
- When ```.board`` clicked:
    - Update board array
      - Track which cell has been clicked
      - If player X: value of 1
      - If player O: value of -1
