class HomeController < ApplicationController
  def index
    @users = User.all
    @room = Room.first

    @room_messages = @room.room_messages.includes(:user)
    @room_message = RoomMessage.new room: @room
  end
end
