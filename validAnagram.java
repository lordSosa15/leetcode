class Solution {
    public static boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        char[] sChars = s.toCharArray();
        char[] tChars = t.toCharArray();
        Arrays.sort(sChars);
        Arrays.sort(tChars);
        return Arrays.equals(sChars, tChars);
    }
}


class Solution {
    public boolean isAnagram(String s, String t) {
        if  (s.length() != t.length()){
            return false;
        }
        int[] a = new int[26];
        int[] b = new int[26];
        for (int i = 0; i < s.length(); i++){
            a[((int)s.charAt(i)) - 97]++;
        }
        for (int i = 0; i < s.length(); i++){
            b[((int)t.charAt(i)) - 97]++;
        }
        for (int i = 0; i < 26; i++){
            if (a[i] != b[i]){
                return false;
            }
        }
        return true;
    }
}
