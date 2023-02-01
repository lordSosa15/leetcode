  def canConstruct(self, ransomNote, magazine):
    arr = [0] * 26
    for c in magazine:
        arr[ord(c) - ord('a')] += 1
    for c in ransomNote:
        if arr[ord(c) - ord('a')] == 0:
            return False
        arr[ord(c) - ord('a')] -= 1
    return True