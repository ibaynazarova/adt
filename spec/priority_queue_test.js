describe("PriorityQueue", function() {
    var PriorityQueue = require('../lib/priority_queue');
  
    it("should return smallest first", function() {
      priorityQueue = new PriorityQueue((a,b) => a.value - b.value);

      priorityQueue.push({value: 5, key: 5});
      priorityQueue.push({value: 3, key: 3});
      priorityQueue.push({value: 1, key: 1});
      priorityQueue.push({value: 2, key: 2});
      priorityQueue.push({value: 4, key: 4});

      expect(priorityQueue.get()).toEqual({value: 1, key: 1});
      expect(priorityQueue.get()).toEqual({value: 2, key: 2});
      expect(priorityQueue.get()).toEqual({value: 3, key: 3});
      expect(priorityQueue.get()).toEqual({value: 4, key: 4});
      expect(priorityQueue.get()).toEqual({value: 5, key: 5});
  });

    it("should return biggest first", function() {
      priorityQueue = new PriorityQueue((a,b) => b.value - a.value);

      priorityQueue.push({value: 5, key: 5});
      priorityQueue.push({value: 3, key: 3});
      priorityQueue.push({value: 1, key: 1});
      priorityQueue.push({value: 2, key: 2});
      priorityQueue.push({value: 4, key: 4});

      expect(priorityQueue.get()).toEqual({value: 5, key: 5});
      expect(priorityQueue.get()).toEqual({value: 4, key: 4});
      expect(priorityQueue.get()).toEqual({value: 3, key: 3});
      expect(priorityQueue.get()).toEqual({value: 2, key: 2});
      expect(priorityQueue.get()).toEqual({value: 1, key: 1});
  });

  it("default comparator", function() {
    priorityQueue = new PriorityQueue();

    priorityQueue.push(5);
    priorityQueue.push(4);
    priorityQueue.push(3);
    priorityQueue.push(2);
    priorityQueue.push(1);

    expect(priorityQueue.get()).toEqual(1);
    expect(priorityQueue.get()).toEqual(2);
    expect(priorityQueue.get()).toEqual(3);
    expect(priorityQueue.get()).toEqual(4);
    expect(priorityQueue.get()).toEqual(5);
});
});
  