def eval_score(connect_count, space_count):
    if (connect_count >= 4):
        return 100
    elif (connect_count == 3 and space_count == 2):
        return 50
    elif (connect_count == 3 and space_count == 1):
        return 15
    elif (connect_count == 2 and space_count == 2):
        return 25
    elif (connect_count == 1 and space_count == 2):
        return 10
    else:
        return 1

def evaluate(board, player, x, y):
    l = len(board[0])
    base_score = -5 * abs((l // 2) - y)
    score = base_score

    # horizontal score
    space_count = 0
    connect_count = 1
    for i in range(x + 1, x + 4):
        if (i >= len(board) or board[i][y] != player):
            if (i < len(board) and board[i][y] == '.'):
                space_count += 1
            else:
                score -= 20
            break
        else:
            connect_count += 1

    for i in range(x - 1, x - 4, -1):
        if (i < 0 or board[i][y] != player):
            if (i >= 0 and board[i][y] == '.'):
                space_count += 1
            break
        else:
            connect_count += 1
    
    score += eval_score(connect_count, space_count)

    conncet_count = 1
    space_count = 0
    # vertical score
    for i in range(y + 1, y + 4):
        if (i >= len(board) or board[x][i] != player):
            if (i < len(board) and board[x][i] == '.'):
                space_count += 1
            break
        else:
            conncet_count += 1
    
    for i in range(y - 1, y - 4, -1):
        if (i < 0 or board[x][i] != player):
            if (i >= 0 and board[x][i] == '.'):
                space_count += 1
            break
        else:
            connect_count += 1
    
    score += eval_score(connect_count, space_count)
    
    connect_count = 1
    space_count = 0
    # diagnal score
    for i in range(1, 4):
        if (x + i >= len(board) or y + i >= len(board) or board[x + i][y + i] != player):
            if (x + i < len(board) and y + i < len(board) and board[x + i][y + i] == '.'):
                space_count += 1
            break
        else:
            connect_count += 1
    
    for i in range(1, 4):
        if (x - i < 0 or y - i < 0 or board[x - i][y - i] != player):
            if (x - i >= 0 and y - i >= 0 and board[x - i][y - i] == '.'):
                space_count += 1
            break
        else:
            conncet_count += 1
    score += eval_score(connect_count, space_count)

    conncet_count = 1
    space_count = 0
    # diagnal score 2
    for i in range(1, 4):
        if (x + i >= len(board) or y - i < 0 or board[x + i][y - i] != player):
            if (x + i < len(board) and y - i >= 0 and board[x + i][y - i] == '.'):
                space_count += 1
            break
        else:
            connect_count += 1
    
    for i in range(1, 4):
        if (x - i < 0 or y + i >= len(board) or board[x - i][y + i] != player):
            if (x - i >= 0 and y + i < len(board) and board[x - i][y + i] == '.'):
                space_count += 1
            break
        else:
            connect_count += 1
    score += eval_score(connect_count, space_count)
    return score


if __name__ == "__main__":

    board = [ ['.'] * 10 for _ in range(10) ]
    board[9][0] = 'x'

    print(evaluate(board,'x', 9, 0))
