class PriorityQueue {
    constructor(comparator = (prev, next) => prev - next) {
        this.comparator = comparator;
        this.data = [];
    }

    push(val) {
        let data = this.data;
        data.push(val);
        
        let current = data.length - 1;
        while(true) {
            let parent = Math.floor((current - 1) / 2);
            if (parent >= 0 && this.comparator(data[current], data[parent]) < 0) {
                this.swap(parent, current);        
                current = parent;
            }
            else break;
        }
    }

    get() {
        let value = this.data[0];
        this.data[0] = this.data[this.size - 1];
        this.data.length = this.data.length - 1;
        let current = 0;
        
        while (true) {
            let left = current * 2 + 1;
            let right = current * 2 + 2;
            let smallest = current;

            if (left < this.size && this.comparator(this.data[left], this.data[current]) < 0) {
                smallest = left;
            }
            if (right < this.size && this.comparator(this.data[right], this.data[smallest]) < 0) {
                smallest = right;
            }
            if (smallest === current) {
                break;
            }
            this.swap(current, smallest);
            current = smallest;
        }  
        return value;
    }

    get size() {
        return this.data.length;
    }

    swap(i,j) {
        let data = this.data;
        let tmp = data[i];
        data[i] = data[j];
        data[j] = tmp;
    }
}

module.exports = PriorityQueue;