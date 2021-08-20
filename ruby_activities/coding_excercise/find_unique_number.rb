def find_uniq(arr)
  return false if arr.size < 3
  if arr[0] != arr[1]
    return arr[1] == arr[2] ? arr[0] : arr[1]
  end
  arr.each_cons(2) { |x, y| return y if y != x }
end