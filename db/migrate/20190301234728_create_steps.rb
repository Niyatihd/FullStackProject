class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :project_id, null: false
      t.timestamps
    end

    add_index :steps, :title
    add_index :steps, :description
    add_index :steps, :project_id
  end
end
