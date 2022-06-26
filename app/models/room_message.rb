class RoomMessage < ApplicationRecord
  belongs_to :user
  belongs_to :room

  def as_json(options)
    super(options).merge(user_avatar_url: user.url_image).merge(user_id: user.id)
  end
end
