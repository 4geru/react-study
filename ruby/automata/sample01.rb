# ref: https://qiita.com/satour/items/fe838dc21dc95df95c62#activerecord

require 'aasm'
class Job
  include AASM

  # aasm do # errorを起こす
  aasm :whiny_transitions => false do # errorの代わりにfalseを返す
    state :sleeping, :initial => true
    state :running
    state :cleaning
    state :finished

    event :run do
      transitions :from => :sleeping, :to => :running

      transitions :from => :running, :to => :finished, :after => Proc.new {|*args| p args }
    end

    event :clean do
      transitions :from => :running, :to => :cleaning
    end

    event :sleep do
      transitions :from => [:running, :cleaning], :to => :sleeping
    end
  end
end

job = Job.new
p job.sleeping? # => true
p job.may_run?  # => true
job.run
p job.running?  # => true
p job.sleeping? # => false
p job.may_run?  # => false
p job.run('args')       # => raises AASM::InvalidTransition
