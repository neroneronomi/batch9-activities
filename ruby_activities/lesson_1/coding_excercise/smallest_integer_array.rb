#Codewars link: https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/ruby
#Given an array of integers your solution should find the smallest integer.
# Given `[34, 15, 88, 2]` your solution will return `2`
# Given `[34, -345, -1, 100]` your solution will return `-345`
#You can assume, for the purpose of this challenge, that the supplied array will not be empty.
#Note: Avoid using .min and .sort method
def check_array(nums)
  max = nums[0];
  min = nums[0];
  nums.each do |item|
    if item > max
			max = item;
		elsif item < min
			min = item
    end 
   end    
  return min
end

print check_array([34, 15, 88, 2]),"\n"
print check_array([34, -345, -1, 100]),"\n"