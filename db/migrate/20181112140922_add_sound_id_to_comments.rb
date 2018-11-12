class AddSoundIdToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :soundId, :string
  end
end
