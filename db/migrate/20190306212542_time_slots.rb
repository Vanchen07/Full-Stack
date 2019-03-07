class TimeSlots < ActiveRecord::Migration[5.2]
  def change
    create_table :time_slots do |t|
      t.time :start_time

      t.timestamps
    end
  end
end
