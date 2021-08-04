#Below we have given you an array and a number. 
arr = [6, 3, 1, 8, 4, 2, 10, 65, 102]
#Write a program that checks to see if the number is divisible by 2 and store them into a new array.
new_array = []
arr.each do |x|
  if x%2==0
    new_array.push(x)
  end
end
puts "Numbers divisible by 2: #{new_array}"