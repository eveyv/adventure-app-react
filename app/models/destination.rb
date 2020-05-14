class Destination < ApplicationRecord
  validates :name, presence: true
  validates :activities, presence: true
  validates :state, presence: true
  validates :address, presence: true
  validates :cost, presence: true
end
