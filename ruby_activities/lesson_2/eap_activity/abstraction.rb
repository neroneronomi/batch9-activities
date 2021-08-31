#Abstraction
class BookInventory
  def initialize(title, quantity, availability=true)
    @title = title
    @quantity = quantity
    @availability = availability
  end

  def book_status
    stock_count
  end

  private

  def stock_count
    count = @availability ? is_available : out_of_stock    
  end

  def is_available
    puts "#{@title} has #{@quantity} stock's available."
  end

  def out_of_stock
    puts "#{@title} is out of stock."
  end
end

book1 = BookInventory.new("Harry Potter", 10, true)
book1.book_status

book2 = BookInventory.new("Art of War", 0, false)
book2.book_status