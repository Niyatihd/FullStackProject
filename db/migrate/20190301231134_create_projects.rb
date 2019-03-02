class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :author_id, null: false
      t.timestamps
    end

    add_index :projects, :title, unique: true
    add_index :projects, :description
    add_index :projects, :author_id
  end
end
