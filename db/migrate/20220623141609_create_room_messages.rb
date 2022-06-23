class CreateRoomMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :room_messages do |t|
      t.text :message

      t.timestamps
    end
  end
end
