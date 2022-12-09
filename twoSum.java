import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target){
        Map<Integer, Integer> map= new HashMap<>();
        for(int i = 0; i <nums.length; i++){
            int diff = target - nums[i];
            if(map.containsKey(diff)){
                int toReturn[] = {map.get(diff), i++};
                return toReturn;
            }
            map.put(nums[i], i);
        }
        return null;
    } 
}


