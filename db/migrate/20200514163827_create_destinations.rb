class CreateDestinations < ActiveRecord::Migration[5.2]
  def change
    create_table :destinations do |t|
      t.string :name, null: false, default: ""
      t.text :activities, null: false
      t.string :state, null: false
      t.text :address, null: false, default: ""
      t.string :cost, null: false, default: ""
      t.integer :price, default: 0
      t.string :website
    end
  end
end
