class AddRoomIdToRoomMessages < ActiveRecord::Migration[6.0]
  def change
    add_column :room_messages, :room_id, :integer
  end
end
