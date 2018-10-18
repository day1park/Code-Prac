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


# .intern works same as .to_sym

"hello".intern
# ==> :hello

strings.each do |s|
    symbols.push(s.intern)
  end


  movies = {
    :batman => "meh ok for DC",
    :spider_man => "my hero"
    }
  
  puts movies[:batman]

  movies = {
    batman: "meh ok for DC",
    spider_man: "my hero"
    }
  
  puts movies[:spider_man]

  

# It builds two alphabet hashes: one that pairs string letters with their place in the alphabet ( "a" with 1, "b" with 2...) and one that uses symbols (:a with 1, :b with 2...)
  require 'benchmark'

string_AZ = Hash[("a".."z").to_a.zip((1..26).to_a)]
symbol_AZ = Hash[(:a..:z).to_a.zip((1..26).to_a)]

string_time = Benchmark.realtime do
  100_000.times { string_AZ["r"] }
end

symbol_time = Benchmark.realtime do
  100_000.times { symbol_AZ[:r] }
end

puts "String time: #{string_time} seconds."
puts "Symbol time: #{symbol_time} seconds."
  
  


grades = { alice: 100,
    bob: 92,
    chris: 95,
    dave: 97
  }
  
  grades.select { |name, grade| grade <  97 }
  # ==> { :bob => 92, :chris => 95 }
  
  grades.select { |k, v| k == :alice }
  # ==> { :alice => 100 }


  movie_ratings = {
    memento: 3,
    primer: 3.5,
    the_matrix: 5,
    truman_show: 4,
    red_dawn: 1.5,
    skyfall: 4,
    alex_cross: 2,
    uhf: 1,
    lion_king: 3.5
  }
  # Add your code below!
  
  good_movies = movie_ratings.select { |k, v| v > 3 }
  
  puts good_movies

  movie_ratings = {
    memento: 3,
    primer: 3.5,
    the_matrix: 5,
    truman_show: 4,
    red_dawn: 1.5,
    skyfall: 4,
    alex_cross: 2,
    uhf: 1,
    lion_king: 3.5
  }
  # Add your code below!
  
  good_movies = movie_ratings.select { |k, v| v > 3 }
  
  good_movies.each { |k, v| puts k.to_s }

  

  my_hash = { one: 1, two: 2, three: 3 }

my_hash.each_key { |k| print k, " " }
# ==> one two three

my_hash.each_value { |v| print v, " " }
# ==> 1 2 3


movie_ratings = {
    memento: 3,
    primer: 3.5,
    the_matrix: 3,
    truman_show: 4,
    red_dawn: 1.5,
    skyfall: 4,
    alex_cross: 2,
    uhf: 1,
    lion_king: 3.5
  }
  # Add your code below!
  
  movie_ratings.each_key{ |k| puts k }

  good_movies = movie_ratings.select { | k, v| v > 3 }

good_movies.each_key{ |k| print k, " "}
good_movies.each_key{ |k| puts k}



movies = {
    Memento: 3,
    Primer: 4,
    Ishtar: 1
  }
  
  puts "What would you like to do?"
  puts "-- Type 'add' to add a movie."
  puts "-- Type 'update' to update a movie."
  puts "-- Type 'display' to display all movies."
  puts "-- Type 'delete' to delete a movie."
  
  choice = gets.chomp.downcase
  case choice
  when 'add'
    puts "What movie do you want to add?"
    title = gets.chomp
    if movies[title.to_sym].nil?
      puts "What's the rating? (Type a number 0 to 4.)"
      rating = gets.chomp
      movies[title.to_sym] = rating.to_i
      puts "#{title} has been added with a rating of #{rating}."
    else
      puts "That movie already exists! Its rating is #{movies[title.to_sym]}."
    end
  when 'update'
    puts "What movie do you want to update?"
    title = gets.chomp
    if movies[title.to_sym].nil?
      puts "Movie not found!"
    else
      puts "What's the new rating? (Type a number 0 to 4.)"
      rating = gets.chomp
      movies[title.to_sym] = rating.to_i
      puts "#{title} has been updated with new rating of #{rating}."
    end
  when 'display'
    movies.each do |movie, rating|
      puts "#{movie}: #{rating}"
    end
  when 'delete'
    puts "What movie do you want to delete?"
    title = gets.chomp
    if movies[title.to_sym].nil?
      puts "Movie not found!"
    else
      movies.delete(title.to_sym)
      puts "#{title} has been removed."
    end
  else
    puts "Sorry, I didn't understand you."
  end


  favorite_foods = {
    'vegetable' => 'broccoli'
  }
  puts "Do you like coding in Ruby?"
  answer = gets.chomp








  movies = {
    spiderman: 4,
    bob: 4
    }
  
  puts "do you want to add update delete or display?"
  
  choice = gets.chomp.downcase
  
  case choice
    when "add"
    puts "what movie you wanna add?"
    title = gets.chomp
    if movies[title.to_sym].nil?
        puts "what do you rate it?"
      rating = gets.chomp
      movies[title.to_sym] = rating.to_i
      puts "all done mate! added #{title} with a rating of : #{rating}"
      puts movies
    else
      puts "that movie #{title} rating of #{movies[title.to_sym]} exists mate! check with the display command "
    end
    when "update"
    puts "what movie?!"
    title = gets.chomp
    if movies[title.to_sym].nil?
      puts "theres no movie called #{title}"
    else
      puts "what is the new rating for it?"
      rating = gets.chomp.to_i
    end
    puts movies
    when "display"
      movies.each do |movie, rating| 
        puts "#{movie}: #{rating}"
       end
    when "delete"
    puts "what movie do you want to delete?"
    title = gets.chomp
     if movies[title.to_sym].nil?
       puts "that movie #{title} don't exist fool!"
     else
       movies.delete(title.to_sym)
       puts "#{title} has been Deleted!"
       puts movies
     end
  else
    puts "Error!"
  end