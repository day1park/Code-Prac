module Palindrome

    def self.is_palindrome(word)
        downcase = word.downcase
        if downcase.reverse == word.downcase.reverse
            return true
        else
            return 'not a palindrome!'
        end
    end

    puts is_palindrome('Racecar')

end

