const canConstruct = (ransomNote, magazine) => {
    let arr = Array(26).fill(0);
    for (const c of magazine) {
        arr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (const c of ransomNote) {
        if (--arr[c.charCodeAt(0) - 'a'.charCodeAt(0)] < 0) {
            return false;
        }
    }
    return true;
};
