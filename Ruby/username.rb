def validate?(username)
  # 
  return false unless username.kind_of?(String)
  return false unless (6..16).cover?(username.length)
  return false unless username =~ /^[A-Za-z\-0-9]*$/
  return false unless (0..1).cover?(username.count('-') > 1 )
  return false unless username[0] =~ /[A-Za-z]/ 
  return false if username[-1] =~ /[\-]/
  true

  
end

puts validate?('Mike-Standish') #Valid username
puts validate?('Mike Standish') #Invalid username