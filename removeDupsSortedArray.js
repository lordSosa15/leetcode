const removeDuplicates = function(nums){
    let indexCounter = 0
    for (let i=0; i<nums.length; i++){
        if(nums[i] != nums[i -1]){
            nums[indexCounter] = nums[i]
            // console.log('indexCounter is ' + indexCounter + ', this is nums' + nums)
            indexCounter++
        }
    }
    return indexCounter
    // let result = nums.splice(0, indexCounter)
}

// i = 0 1 2 3 4 5 6
// indexCounter = 0 1 2 3
// nums is [0,0,1,1,1,2,2,3,3,4]
// nums is now [0,1,2,3,4,2,2,3,3,4]

// is nums[i] not equal to nums[i-1] ?
// 