class PriorityQueue {
    constructor() {
        this.data = [];
    }

    push(val) {
        let data = this.data;
        data.push(val);
        
        let current = data.length - 1;
        while(true) {
            let parent = Math.floor((current - 1) / 2);
            if (parent >= 0 && data[current].value < data[parent].value) {
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

            if (left < this.size && this.data[left].value < this.data[current].value) {
                smallest = left;
            }
            if (right < this.size && this.data[right].value < this.data[smallest].value) {
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