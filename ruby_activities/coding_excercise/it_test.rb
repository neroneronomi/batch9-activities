#Codewars link: https://www.codewars.com/kata/552c028c030765286c00007d/train/ruby
def iq_test(numbers)
  numbers = numbers.split().map{|num| num.to_i}
  even_count = numbers.select {|num| num.even?}.count
  odd_count = numbers.select {|num| num.odd?}.count

  numbers.each_with_index do |num, i|
    if even_count > odd_count
      return i + 1 if num.odd?
    else
      return i + 1 if num.even?
    end
  end
end