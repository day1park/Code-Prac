unless 1+1 ==3
    puts "nothing"
  end

#  "nothing" will appear

unless 1+1 ==3
    puts "nothing"
  end

  # nothing will appear


puts "Hello!" unless false
unless false
    puts "Hello!"
  end


  boolean ? Do this if true: Do this if false

  puts 3 < 4 ? "3 is less than 4!" : "3 is not less than 4."


  puts true ? "True!" : "False!"
#   above line of code is same as below
  if true
    puts "True!"
  else
    puts "False!"
  end

#   the order of arguments is important, and you don't need an end for this version of if/else.




puts "Hello there!"
greeting = gets.chomp

# Add your case statement below!
case greeting
  when "English" then puts "Hello!"
  when "French" then puts "Bonjour!"
  when "German" then puts "Guten Tag"
  when "Finnish" then puts "Haloo!"
  else puts "I don't know that language!"
end

# makes no sense to me



favorite_book = nil
puts favorite_book
#prints nothing
favorite_book ||= "Cat's Cradle"
puts favorite_book
# prints cats cradle

favorite_book ||= "Why's (Poignant) Guide to Ruby"
puts favorite_book
#already has a value so prints cats cradle
favorite_book = "Why's (Poignant) Guide to Ruby"
puts favorite_book
#not a conditional so prints new book


# Ruby's methods will return the result of the last evaluated expression

def multiple_of_three(n)
    n % 3 == 0 ? "True" : "False"
end


# does it equal 0 true or false? 