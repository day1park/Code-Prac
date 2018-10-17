# Hashes 
breakfast = { 
    "bacon" => "tasty",
    "eggs" => "tasty",
    "oatmeal" => "healthy",
    "OJ" => "juicy"
  }

#   Remember that keys must be unique, but values can repeat. That's why we can have more than one key share the value "tasty.")

# 1. hash literal notation:
new_hash = { "one" => 1 }

# 2. hash constructor notation:

new_hash = Hash.new

# Iterating Over Hashes

my_hash.each do |key, value|
    puts my_hash[]
  end


  matz = { "First name" => "Yukihiro",
    "Last name" => "Matsumoto",
    "Age" => 47,
    "Nationality" => "Japanese",
    "Nickname" => "Matz"
  }
  
  matz.each do |key, value|
    puts matz
  end
  matz.each do |k, v|
    puts "this is the key: #{k} and this is the value: #{v}"
  end
  

    
  matz.each do |key, value|
    puts matz[key] # some reason this prints value and not the key
  end