
def calc_means(numbers: list) -> list:

    num_length = len(numbers[0])
    digits = [[] for x in range(num_length)]
    means = [[] for x in range(num_length)]
    for num in numbers:
        for i in range(num_length):
            digits[i].append(int(num[i]))

    for i in range(len(digits)):
        means[i] = str(round(sum(digits[i]) / len(digits[i])))

    gamma = ''.join(i for i in means)
    epsilon = ''.join(['0' if bit == '1' else '1' for bit in gamma])

    return int(gamma, 2) * int(epsilon, 2)

if __name__ == '__main__':
    with open('day3/input.txt', 'r') as f:
        input = f.read().split()

    print(calc_means(input))


