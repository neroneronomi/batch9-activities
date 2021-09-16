#Codewars link: https://www.codewars.com/kata/552c028c030765286c00007d/train/ruby
def iq_test(numbers)
  numbers = numbers.split.map(&:to_i)
  even, odd = numbers.partition { |n| n.even? }
  even.count == 1 ? numbers.index(even.join.to_i) + 1 : numbers.index(odd.join.to_i) + 1
end