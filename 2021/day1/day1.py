f = 'day1a.txt'

with open(f, 'r') as input:
    num_list = [int(line) for line in input]

res = []

for i in range(1,len(num_list)):
    if num_list[i] > num_list[i - 1]:
        res.append('increasing')
    else:
        res.append('decreasing')

print('part 1')
print(f'length of result: { len(res) }')
print(f'count of increasing: { res.count("increasing") }')

rolling_sum = []

for i in range(len(num_list) - 2):
    rolling_sum.append(sum(num_list[i:i + 3]))

res_two = []

for i in range(1,len(rolling_sum)):
    if rolling_sum[i] > rolling_sum[i - 1]:
        res_two.append('increasing')
    else:
        res_two.append('decreasing')

print('part 2')
print(f'length of result: { len(res_two) }')
print(f'count of increasing: { res_two.count("increasing") }')

print(rolling_sum[:10])
print(res_two[:10])
