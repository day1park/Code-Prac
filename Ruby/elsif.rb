if 10 == 11
  print "ten is 11"
elsif 11 != 11
  print "eleven is eleven"
else 10 != 11
  print "10 does not equal 11"
end

print "say something: "
user_input = gets.chomp
user_input.downcase!

if user_input.include? "s"
	user_input.gsub!(/s/, "th")
  puts "the new string is now #{user_input}"
else
  print "there are no s' in this string"
end

# test_1 should be true
test_1 = !(34+33==3) || false

# test_2 = should be true
test_2 = 6>=4 && !(false)

# test_3 = should be false
test_3 = 20==(-2) || (!true)

unless 1==0
  print "1 no 0 man"
end

