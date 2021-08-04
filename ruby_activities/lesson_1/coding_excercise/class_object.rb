class Pet
  def initialize(name, animal, color)
      @name = name
      @animal = animal
      @color = color
  end

  def details
      puts "My pet name is #{@name}! He is a #{@animal}, and his color is #{@color}."
  end
end

pet_1 = Pet.new("Yam", "Cat", "White")
pet_1.details