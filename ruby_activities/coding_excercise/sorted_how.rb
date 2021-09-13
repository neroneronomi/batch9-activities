#Codewars link: https://www.codewars.com/kata/580a4734d6df748060000045/train/ruby

def is_sorted_and_how(arr)
  # your code here
  ascending = arr.sort
  descending = ascending.reverse
  
  if arr == ascending
    "yes, ascending"
  elsif arr == descending
    "yes, descending"
  else "no"
  end
end