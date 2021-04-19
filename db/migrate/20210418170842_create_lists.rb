class CreateLists < ActiveRecord::Migration[6.1]
  def change
    create_table :lists do |t|
      t.string :name, null: false
      t.string :date, null: false
      t.integer :time, null: false
      t.string :color, null: false
      t.boolean :completed, default: false, null: false
  
      t.timestamps
    end
  end
end
