#Codewars link: https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/ruby

def is_square(x)
  if x<0
    return false
  elsif x== 0 
    return true
  else 
    i = 1
    while i * i<= x 
      if x % i == 0 && x / i == i
        return true
      end
    i = i + 1
    end
  return false
  end
end