# Why Methods?
# A method is a reusable section of code written to perform a specific task in a program. You might be wondering why you need to separate your code into methods, rather than just writing everything out in one big chunk. It turns out there are a few good reasons to divide your programs into methods:

# If something goes wrong in your code, it's much easier to find and fix bugs if you've organized your program well. Assigning specific tasks to separate methods helps with this organization.

# By assigning specific tasks to separate methods (an idea computer scientists call separation of concerns), you make your program less redundant and your code more reusable—not only can you repeatedly use the same method in a single program without rewriting it each time, but you can even use that method in another program.

# When we learn more about objects, you'll find out there are a lot of interesting things we can do with methods in Ruby.


def prime(n)
    puts "That's not an integer." unless n.is_a? Integer
    is_prime = true
    for i in 2..n-1
      if n % i == 0
        is_prime = false
      end
    end
    if is_prime
      puts "#{n} is prime!"
    else
      puts "#{n} is not prime."
    end
  end
  
  prime(2)
  prime(9)
  prime(11)
  prime(51)
  prime(97)

  # Methods are defined using the keyword def (short for "define").

  # method example

  def welcome
    puts "Welcome to Ruby!"
  end


  # to_a to array

  # if no method found by the name called, it will return NameError
  def array_of_10
    puts (1..10).to_a
  end
  
  array_of_10  # <---- calling the method

  # Parameters and Arguments

  def cubertino(n)
    puts n ** 3
  end
  
  cubertino(8)

  # Splat!

  def what_up(greeting, *friends)
    friends.each { |friend| puts "#{greeting}, #{friend}!" }
  end
  
  what_up("What up", "Ian", "Zoe", "Zenas", "Eleanor")

  
  # messing with the argument order
  def what_up(greeting, *friends)
    friends.each { |friend| puts "#{greeting}, #{friend}!" }
  end
  
  what_up("Ian", "hello", "Zoe", "Zenas", "Eleanor")

  # will return Ian, "all other arguments after Ian"


  # RETURN

  def double(n)
    return n * 2
  end
  
  output = double(6)
  output += 2
  puts output



  def by_five?(n)
    return n % 5 == 0
  end


  def greeter(name)
    return "hello #{name}"
  end
  
  puts greeter("jasmine")
  
  def by_three?(number)
    return number % 3 == 0
  end
  
  puts by_three?(296) # false
  #if there's nothing remaing when divided by 3 then it is divisible by 3


  # Blocks Are Like Nameless Methods
  # Blocks can be defined with either the keywords do and end or with curly braces ({}).
  1.times do
    puts "I'm a code block!"
  end
  
  1.times { puts "As am I!" }


  # method that capitalizes a word
def capitalize(string) 
  puts "#{string[0].upcase}#{string[1..-1]}"
end

capitalize("ryan") # prints "Ryan"
capitalize("jane") # prints "Jane"

# block that capitalizes each string in the array
["ryan", "jane"].each {|string| puts "#{string[0].upcase}#{string[1..-1]}"} # prints "Ryan", then "Jane"

my_array = [3, 4, 8, 7, 1, 6, 5, 9, 2]

# Call the sort! method on my_array below.
# my_array should then equal [1, 2, 3, 4, 5, 6, 7, 8, 9].


# The block, {|i| puts i}, is passed the current
# array item each time it is evaluated. This block
# prints the item. 
[1, 2, 3, 4, 5].each { |i| puts i }

# This block prints the number 5 for each item.
# (It chooses to ignore the passed item, which is allowed.)
[1, 2, 3, 4, 5].each { |i| puts 5 * i }

sorted = my_array.sort!
sorted.each do |i| 
  puts i
end


# library sorting code
books = ["Charlie and the Chocolate Factory", "War and Peace", "Utopia", "A Brief History of Time", "A Wrinkle in Time"]

# How might we sort! the books in alphabetical order? (Hint, hint)

books.sort!

books.each { |b| puts b }

books.each do |b|
  puts b
end

# 2 different ways to do blocks



#  Combined Comparison Operator <=>

# returns 0 if the first operand (item to be compared) equals the second, 1 if the first operand is greater than the second, and -1 if the first operand is less than the second.

book_1 = "A Wrinkle in Time"

book_2 = "A Brief History of Time"

print book_2 <=> book_1    # = -1
print book_1 <=> book_2    # = 1
print book_2 <=> book_2    # = 0
print book_1 <=> book_1    # = 0

# The sort method assumes by default that you want to sort in ascending order

books = ["Charlie and the Chocolate Factory", "War and Peace", "Utopia", "A Brief History of Time", "A Wrinkle in Time"]

# To sort our books in ascending order, in-place
books.sort! { |firstBook, secondBook| firstBook <=> secondBook }

# Sort your books in descending order, in-place below

books.sort! {|firstBook, secondBook| secondBook <=> firstBook }

puts books

# descending order


numbers = [5, 2, 8]
sum = 0
numbers.each do |n|
  sum += n
end
puts sum


my_array = [1, 2, 3, 4, 5]

my_array.each do |n|
  puts n*n
end


fruits = ["orange", "apple", "banana", "pear", "grapes"]

fruits.sort! do |fruit1, fruit2|
  fruit2 <=> fruit1
end

puts fruits