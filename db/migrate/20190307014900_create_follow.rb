class CreateFollow < ActiveRecord::Migration[5.2]
  # def change
  #   create_table :follows do |t|
  #     t.integer :user_id, null: false
  #     t.integer :project_id, null: false
  #     t.timestamps
  #   end

  #   add_index :follows, :user_id
  #   add_index :follows, :project_id
  #   add_index :follows, [:project_id, :user_id], unique: true
  # end
end
