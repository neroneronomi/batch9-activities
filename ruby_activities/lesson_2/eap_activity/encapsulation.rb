#Encapsulation
class Books
  def initialize(title, author, pages)
    @title = title
    @author = author
    @pages = pages
  end

  def book_details()
    puts "Title: #{@title}"
    puts "Author: #{@author}"
    puts "Pages: #{@pages}"
  end
end

book1 = Books.new("Harry Potter", "JK Rowling", "999")
book2 = Books.new("Art of War", "Sun Tzu", "999")

book1.book_details()