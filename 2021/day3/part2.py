def calc_rating(numbers: list):
    num_length = len(numbers[0])
    digits = [[] for x in range(num_length)]

    o2 = numbers
    co2 = numbers

    for i in range(num_length):
        o2_counts = {'0': 0, '1': 0}
        if len(o2) > 1:
            for num in o2:
                if int(num[i]) == 0:
                    o2_counts['0'] += 1
                else:
                    o2_counts['1'] += 1 
            if o2_counts['1'] >= o2_counts['0']:
                o2 = [x for x in o2 if x[i] == '1']
            else:
                o2 = [x for x in o2 if x[i] == '0']

        print("o2 counts", i + 1, ":", o2_counts)
        print("o2", i + 1, ":", o2)

        co2_counts = {'0': 0, '1': 0}
        if len(co2) > 1:
            for num in co2:
                if int(num[i]) == 0:
                    co2_counts['0'] += 1
                else:
                    co2_counts['1'] += 1 
            if co2_counts['1'] >= co2_counts['0']:
                co2 = [x for x in co2 if x[i] == '0']
            else:
                co2 = [x for x in co2 if x[i] == '1']

        print("co2 counts", i + 1, ":", co2_counts)
        print("co2", i + 1, ":", co2)

    print(int(o2[0], 2), int(co2[0], 2))
    print(int(o2[0], 2) * int(co2[0], 2))

if __name__ == '__main__':
    with open('day3/input.txt', 'r') as f:
        input = f.read().split()

    print(calc_rating(input))

