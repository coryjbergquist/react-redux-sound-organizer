class AddSoundIdToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :SoundId, :string
  end
end
