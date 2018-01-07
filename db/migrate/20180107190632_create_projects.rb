class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :url
      t.string :technologies, array: true, default: []
      t.string :images, array: true, default: []

      t.timestamps
    end
  end
end
