class CreateCheckboxes < ActiveRecord::Migration[5.1]
  def change
    create_table :checkboxes do |t|
      t.references :page, foreign_key: true
      t.boolean :checked, default: false

      t.timestamps
    end
  end
end
