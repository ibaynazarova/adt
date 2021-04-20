describe("PriorityQueue", function() {
    var PriorityQueue = require('../lib/priority_queue');

    beforeEach(function() {
      priorityQueue = new PriorityQueue();
    });
  
    it("should return smallest first", function() {
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
  });
  