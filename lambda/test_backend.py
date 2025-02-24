from flask import Flask
from flask_cors import CORS, cross_origin
from flask import request


app = Flask(__name__)
CORS(app)
global board
global player


@app.route('/init', methods = ['POST'])
# @cross_origin()
def initGame():
    global board, player
    player = 1
    content = request.json
    
    board = []
    board_size = content['board_size']
    print(f"board size is {board_size}")

    for i in range(board_size):
        row = []
        for i in range(board_size):
            row.append('.')
        board.append(row)

    return { "board": board }



@app.route('/move', methods = ['POST'])

def makeMove():

    global board, player
    content = request.json
    move_col = content['move'] - 1

    l = len(board)
    for i in range(l - 1, -1, -1):
        if (board[i][move_col] == '.'):
            if (player == 1):
                board[i][move_col] = 'x'
            else:
                board[i][move_col] = 'o'
            player = 0 - player
            break

    for line in board:
        print(line)

    return { "board": board }






if __name__ == "__main__":
    app.run()
