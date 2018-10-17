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


#   Nil: a Formal Introduction

# Along with false, nil is one of two non-true values in Ruby. (Every other object is regarded as "truthy," meaning that if you were to type if 2 or if "bacon", the code in that if statement would be run.)

# important to realize that false and nil are not the same thing: false means "not true," while nil is Ruby's way of saying "nothing at all."



my_hash = Hash.new("Trady Blix") # default value


no_nil_hash = Hash.new("poop")

puts no_nil_hash["pup"] # puts out "poop"

# SYMBOLS!!!!!!
menagerie = { :foxes => 2,
    :giraffe => 1,
    :weezards => 17,
    :elves => 1,
    :canaries => 4,
    :ham => 1
  }