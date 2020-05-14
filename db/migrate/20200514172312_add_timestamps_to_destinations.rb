class AddTimestampsToDestinations < ActiveRecord::Migration[5.2]
  def change
    change_table :destinations do |t|
      t.timestamps null: false
    end 
  end
end
