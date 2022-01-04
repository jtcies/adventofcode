class Position:
    def __init__(self, horizontal: int, depth: int, aim: int):
        self.horizontal = horizontal
        self.depth = depth
        self.aim = aim

    def execute(self, instruction: str):
        direction, distance = instruction.split(' ')
        distance = int(distance)
        if direction == 'up':
            self.aim_up(distance)
        elif direction == 'down':
            self.aim_down(distance)
        elif direction == 'forward':
            self.move_forward(distance)
        
    def aim_up(self, distance: int):
        self.aim -= distance

    def aim_down(self, distance: int):
        self.aim += distance

    def move_forward(self, distance: int):
        self.horizontal += distance
        self.depth += (distance * self.aim)

def travel(instructions: list[str]) -> int:
    position = Position(0, 0, 0)

    for instruction in instructions:
        position.execute(instruction)

    return position.horizontal * position.depth

if __name__ == '__main__':
    with open('day2/input.txt', 'r') as input:
        instructions = input.readlines()

    print(travel(instructions))
