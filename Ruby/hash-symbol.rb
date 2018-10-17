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

#   symbols aren't strings:
"string" == :string # false

# The .object_id method gets the ID of an object—it's how Ruby knows whether two objects are the exact same object. 
#  two "strings" are actually different objects, whereas the :symbol is the same object listed twice.
puts "string".object_id
puts "string".object_id

puts :symbol.object_id
puts :symbol.object_id

# symbol syntax
# Symbols always start with a colon (:). 
# They must be valid Ruby variable names, so the first character after the colon has to be a letter or underscore (_); after that, any combination of letters, numbers, and underscores is allowed.

my_first_symbol = :my_sym, :_true, :no_integer_first1

sounds = {
    :cat => "meow",
    :dog => "woof",
    :computer => 10010110,
  }
#   primarily used either as hash keys or for referencing method names. 

# They're immutable, meaning they can't be changed once they're created;
# Only one copy of any symbol exists at a given time, so they save memory;
# Symbol-as-keys are faster than strings-as-keys because of the above two reasons.

symbol_hash = {
    :one => 1,
    :string => "cat",    # Fill in these two blanks!
    :boolean => false,
  }

  :sasquatch.to_s
# ==> "sasquatch"

"sasquatch".to_sym
# ==> :sasquatch


strings = ["HTML", "CSS", "JavaScript", "Python", "Ruby"]

# Add your code below!

symbols = []

strings.each do |s|
  symbols.push(s.to_sym)
end

print symbols 

symbols.each do |x|
  puts x
end