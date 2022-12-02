class Board:
    def __init__(self, board_numbers: list[str]):
        self.board = {}
        self.winner = False
        # initialize as a dict with each number false
        for x in board_numbers:
            self.board[x] = False

    def mark(self, picked_number: str):
        # mark true if in the list
        if picked_number in self.board.keys():
            self.board[picked_number] = True

    def check(self):
        # check rows using row start index
        for i in range(5):
            row_start = i * 5
            row = list(self.board.values())[row_start:row_start + 5]
            if all(row) == True:
                self.winner = True
        # check columns using modulo
        for i in range(5):
            col = [list(self.board.values())[x] for x in range(25) if x % 5 == i]
            if all(col) == True:
                self.winner = True
            

def play_game(board_list, numbers):
    boards = []
    for board in board_list:
        x = Board(board)
        boards.append(x)
        
    for number in numbers:
        for board in boards:
            board.mark(number)
            board.check()
            if board.winner == True:
                break
        if board.winner == True:
            break

    unselected = [list(board.board.keys())[x] for x in range(25) if list(board.board.values())[x] == False]
    unselected_int = [int(x) for x in unselected]
    
    return sum(unselected_int) * int(number)


if __name__ == '__main__':
    with open('day4/input.txt', 'r') as input:

        contents = input.read().split('\n\n')

        picked_numbers = contents[0].split(',')

        board_list = contents[1:]
        boards = [x.split() for x in board_list]

        ret = play_game(boards, picked_numbers)
        print(ret)
