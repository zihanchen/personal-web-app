




board = None
base = 3

def init(size):
    global board
    board = []
    for i in range(size):
        board.append(['.'] * size)


# 0 0
# 0 0

# 1 0 0 1

def encode():
    global board, base
    result = 0
    l = len(board)
    total = l ** 2 - 1
    pointer = total 
    for i in range(l):
        for j in range(l):
            if (board[i][j] == '.'):
                result += 0 * base ** total
            elif (board[i][j] == 'x'):
                result += 1 * base ** total
            else:
                result += 2 * base ** total
            total -= 1

    return result



def decode(num, size):

    board = [['.'] * size for _ in range(size)]
    
    
    for i in range(size - 1, -1, -1):
        for j in range(size - 1, -1, -1):
            if (num == 0):
                break
            current_digit = num % 3 
            num = num // 3
            if (current_digit == 1):
                board[i][j] = 'x'
            elif (current_digit == 2):
                board[i][j] = 'o'


    return board




if __name__ == "__main__":
    init(16)

    
    board[0][0] = 'x'
    board[0][5] = 'o'

    for line in board:
        print(line)
    encode_num = encode()
    print(f"encoding is {encode_num}")

    d_board = decode(encode_num, 16)

    for line in d_board:
        print(line)



