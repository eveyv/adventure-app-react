class State < ApplicationRecord
  has_many :destinations

  validates :name, presence: true
  validates :abbreviation, presence: true
end
