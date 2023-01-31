def isValid(s):
    bracket = {'(':')', '[':']', '{':'}'}
    heap = []
    for char in s:
        if char in bracket:
            heap.append(bracket[char])
        else:
            if not heap or heap.pop() != char:
                return False
    return not heap
