import re

def get_input(path):
    with open(path, 'r') as input:
        data = input.readlines()
    return data

def extract_numbers(x):
    n = list(map(lambda sub:int(''.join([ele for ele in sub if ele.isnumeric()])), x))
    return n

def calc_position(input):
    # get depth, cumsum, inverse if up
    depth = [x for x in input if re.search('down|up', x)]
    d = [int(x.split(' ')[1]) for x in depth]
    dir = [x.split(' ')[0] for x in depth]
    for i in range(len(dir)):
        if dir[i] == 'up':
            d[i] = d[i] * -1

    final_depth = 0
    for i in range(len(d)):
        final_depth += d[i]

    horiz = [x for x in input if re.search('forward', x)]
    h = sum(extract_numbers(horiz))
    return h * final_depth

if __name__ == "__main__":
    data = get_input('day2.txt')
    res = calc_position(data)
    print(res)

