n = gets.to_i
cnt = 0
while true
    break if n < (cnt.to_s + cnt.to_s).to_i
    cnt += 1
end

puts cnt - 1
