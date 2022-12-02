import numpy as np

class Line:

    def __init__(self, points: list[str]):
        self.pt1 = points[0]
        self.pt2 = points[1]

    def fill_points(self):
        x1, y1 = [int(a) for a in self.pt1.split(',')]
        x2, y2 = [int(b) for b in self.pt2.split(',')]
        if x1 != x2:
            if x2 > x1:
                x = list(range(x1, x2 + 1))
            else:
                x = list(range(x2, x1 + 1))
            points = [','.join([str(i), str(y1)]) for i in x]

        else:
            assert y1 != y2
            if y2 > y1:
                y = list(range(y1, y2 + 1))
            else:
                y = list(range(y2, y1 + 1))
            points = [','.join([str(x1), str(i)]) for i in y]

        return points

def fill_grid(points):
    m = np.zeros([1000,1000])

    for coords in points:
         line = Line(coords).fill_points()
         for point in line:
             x = int(point.split(',')[0])
             y = int(point.split(',')[1])
             m[x][y] += 1

    return [x for x,y in enumerate(m) if y >= 2]

if __name__ == '__main__':
    with open('day5/input.txt', 'r') as input:

        contents = input.read().split('\n')[:-1]
        points = [x.split(' -> ') for x in contents]

        print(fill_grid(points))

