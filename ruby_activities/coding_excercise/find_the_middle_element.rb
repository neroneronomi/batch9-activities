#Find the middle element
#Codewars link: https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/ruby

def gimme(input_array)
  arr = input_array
  sortedArr = arr.sort
  index = input_array.index(sortedArr[1])
  return index
end 