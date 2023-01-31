public class validParentheses {
        public boolean isValid(String s) {
            Stack<Character> stack = new Stack<>();
            Map<Character, Character> map = new HashMap<>();
            map.put(')', '(');
            map.put('}', '{');
            map.put(']', '[');
            
            for (char c : s.toCharArray()) {
                if (map.containsKey(c)) {
                    char topElement = stack.isEmpty() ? '#' : stack.pop();
                    if (topElement != map.get(c)) {
                        return false;
                    }
                } else {
                    stack.push(c);
                }
            }
            return stack.isEmpty();
        }
    }

