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