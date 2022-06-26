class RoomMessagesController < ApplicationController
  before_action :load_entities, only: [:create]

  def create
		@user = User.find(params[:user_id])
    @room_message = RoomMessage.create user: @user,
                                       room: @room,
                                       message: params.dig(:room_message, :message)
		RoomChannel.broadcast_to @room, @room_message
  end

	def destroy_all
		room_messages = RoomMessage.all
		if room_messages.delete_all
			redirect_to root_url
		end
	end

  protected

  def load_entities
    @room = Room.find params.dig(:room_message, :room_id)
  end
end