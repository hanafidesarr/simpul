class RoomMessagesController < ApplicationController
  before_action :load_entities

  def create
		@user = User.find(params[:user_id])
    @room_message = RoomMessage.create user: @user,
                                       room: @room,
                                       message: params.dig(:room_message, :message)
  end

  protected

  def load_entities
    @room = Room.find params.dig(:room_message, :room_id)
  end
end