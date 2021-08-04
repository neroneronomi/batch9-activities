#Write a while loop that takes input from the user, performs an action, and only stops when the user types "STOP". Each loop can get info from the user.
user_input = ""
while user_input != "STOP"
  puts "User Input:" 
  puts "Enter STOP to end."
  user_input = gets.chomp
end