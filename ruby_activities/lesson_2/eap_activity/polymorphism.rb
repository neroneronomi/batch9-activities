#Polymorphisim
class BookTranslator
  def type(translate)
    translate.type
  end
end

class English
  def type
    puts "Reading book in English"
  end
end

class Japanese
  def type
    puts "本の翻訳"
  end
end

class Chinese
  def type
    puts "翻译书"
  end
end

translate = BookTranslator.new
english = English.new
translate.type(english)

japanese = Japanese.new
translate.type(japanese)

chinese = Chinese.new
translate.type(chinese)