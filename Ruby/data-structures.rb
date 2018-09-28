# each element in an array has an index

# array of arrays are called "multidimensional arrays"


multi_d_array = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

multi_d_array.each { |x| puts "#{x}\n" }

# two-dimensional array.



#  Hash

colors = { "red" => 2, "blue" => 3 }
colors["blue"] += 1
puts colors["blue"]

# In the above example, we first create a hash mapping strings to integers.
# Then, we increment the value stored by "blue" by 1.
# Finally, we print out 4, the value stored by "blue".


colors = { 
    "blue" => 3,
    "green" => 1,
    "red" => 2
  }
  colors = colors.sort_by do |color, count|
    count
  end
  colors.reverse!

#   In the example above, we first create a hash called colors that maps color strings to numbers.
# Then, we sort colors into green, red, and blue, from smallest to largest by count. Just so you know, the .sort_by function returns an array of arrays, but that's fine for our purposes.
# Finally, we reverse the array order so that the colors with the largest counts are first.
# Can you do the same thing with the frequencies hash?




puts "give me input"
text = gets.chomp

words = text.split

frequencies = Hash.new(0)

words.each do |word|
  frequencies[word] +=1
end

frequencies = frequencies.sort_by do |something, count|
  count
end

frequencies.reverse!

frequencies.each do |x, y|
  puts x + " " + y.to_s
end

#  iterating over hash
