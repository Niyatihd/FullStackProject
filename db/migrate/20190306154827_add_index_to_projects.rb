class AddIndexToProjects < ActiveRecord::Migration[5.2]
  def change
    add_index :projects, :category
  end
end
