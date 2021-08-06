#Fix this code: https://www.codepile.net/pile/M5XMAE4x

module AdminPermission
  def edit_users_profile
    puts "Admin updated all users profile"
  end
end

module BuyerPermission
  def buy
    puts "Buyer has bought an item"
  end
end

class User
  def initialize(username, password, ip_address)
	  @username = username # added code
	  @password = password # added code
	  @ip_address = ip_address # added code
  end

	def change_password=(password) # added method
		puts "Password Changed!"
	end

  protected
  def login
    puts "User logged in. IP address: #{@ip_address}" # put "@" inside the curly braces
  end
end

class Admin < User
	include AdminPermission # added code
	def admin_login # added code
    login
  	end
end


class Buyer < User
	include BuyerPermission # added code
	def buyer_login # added code
    login
  	end
end

## execute
my_admin = Admin.new('avionuser', 'password', '127.0.0.1')
my_admin.admin_login
my_admin.edit_users_profile

my_admin.change_password = 'new_password'

buyer = Buyer.new('juan', 'password', '127.0.0.1')
buyer.buyer_login
buyer.buy

buyer.change_password = 'new_password'