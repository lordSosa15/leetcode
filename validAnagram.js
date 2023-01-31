const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }
    const sChars = s.split('').sort();
    const tChars = t.split('').sort();
    return sChars.join('') === tChars.join('');
};
