# Below we have given you an array and a number. 
def number_included(number)
  arr = [1, 3, 5, 7, 9, 11]
# Write a program that checks to see if the number appears in the array.
puts "number": number
puts arr.include?number
end
puts "Enter number: "
number = gets.chomp.to_i
number_included(number)
