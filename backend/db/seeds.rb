N = 4

N.times do |i|
  Event.create!(
    name: "予定#{i + 1}",
    start: "2022-08-14 10:00:00",
    end: "2022-08-14 11:00:00"
  )
end
