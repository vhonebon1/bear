class AddUrlToTodos < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :url, :string
  end
end
