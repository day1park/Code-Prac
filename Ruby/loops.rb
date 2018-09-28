# while condition is true the loop will continue to run
# WHILE loop
counter = 1
while counter < 11
  puts counter
  counter = counter + 1
end

i = 0
while i < 5
  puts i
  i += 1
end

# UNTIL loop

i = 0
until i == 6
  i = i + 1
end
puts i

counter = 1
until counter > 10
  puts counter
  counter += 1
end

#  '+=', '-=', '*=', '/=' <--- 'Assignment Operator'

# FOR loop

for num in 1...10
    puts num
end

for num in 1..20
  puts num
end


i = 0
loop do
  i += 1
  print "#{i}"
  break if i > 5
end

i = 20
loop do
  i -= 1
  print "#{i}"
  break if i <= 0
end

i = 20
loop do
  i -= 1
  puts "#{i}"
  break if i <= 0
end


i = 20
loop do
  i -= 1
  next if i % 2 != 0
  print "#{i}"
  break if i == 0
end


# .each method
object.each do |item| 
  # Do something 
end

odds.each do |x|
  print x *= 2
end

odds.each do |x|
  x *= 2
  print "#{x} "
end
# get a space in between answers

100.times { print "string cheese "}

i = 1
while i <= 50
  print i
  i+=1
end

for num in 1..50
  print num
end

puts "Text to search through: "
text = gets.chomp
puts "Word to redact: "
redact = gets.chomp

words = text.split(" ")

words.each do |word|
  if word != redact
    print word + " "
  else
    print "REDACTED "
  end
end

# redacted 
puts "give me input?"
text = gets.chomp

puts "what to redact?"
redact = gets.chomp

words = text.split(" ")
words.each do |x|
  if x == redact
    print "REDACTED "
  else
    print x + " "
  end
end