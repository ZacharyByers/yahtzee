class Score < ApplicationRecord
  belongs_to :user
  validates_presence_of :value
  validates_numericality_of :value, only_integer: true

  protected

  def self.all_scores
    select('value, user_id, u.email, scores.id')
    .joins('INNER JOIN users u ON u.id = scores.user_id')
    .order(value: :desc)
  end
end
