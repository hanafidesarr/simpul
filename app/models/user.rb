class User < ApplicationRecord
  belongs_to :room
  has_many   :room_messages
end
