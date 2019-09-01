class AddLargeToTodos < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :large, :boolean
  end
end
