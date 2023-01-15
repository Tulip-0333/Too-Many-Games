def display_board(board):
    print("\n" * 100)
    print(" {} | {} | {}".format(board[1], board[2], board[3]))
    print("---|---|---")
    print(" {} | {} | {}".format(board[4], board[5], board[6]))
    print("---|---|---")
    print(" {} | {} | {}".format(board[7], board[8], board[9]))

def player_move(player, board):
    move = input("{} choose a spot (1-9): ".format(player))
    while move not in ["1", "2", "3", "4", "5", "6", "7", "8", "9"] or board[int(move)] != " ":
        move = input("Invalid input, {} choose a spot (1-9): ".format(player))
    board[int(move)] = player

def check_win(board):
    wins = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
    for win in wins:
        if board[win[0]] == board[win[1]] == board[win[2]] and board[win[0]] != " ":
            return board[win[0]]
    return None

board = [" "] * 10
player = "X"

while check_win(board) == None:
    display_board(board)
    player_move(player, board)
    if player == "X":
        player = "O"
    else:
        player = "X"

display_board(board)
print("{} wins!".format(check_win(board)))
