class TrieNode {
    constructor(char) {
        this.char = char;
        this.children = new Map();
        this.isLast = false;
        this.count = 1;
    }

    getChild(char) {
        return this.children.get(char);
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let children = this.root.children;
        for (let [index,letter] of word.split('').entries()) {
            if (children.has(letter)) {
                let node = children.get(letter);
                node.count ++; 
                children = node.children;
            }
            else {
                let node = new TrieNode(letter);
                children.set(letter, node);
                children = node.children;

                // Last charachter
                if (index === word.length - 1) {
                    node.isLast = true;
                }
            }           
        }
    }

    search(word) {
        let children = this.root.children;
        let index = 0;
        while (children.size != 0 && index < word.length) {
            let char = word[index];
            if (!children.has(char)) {
                return false;
            }
            else {
                let node = children.get(char);
                children = node.children;
            }
            index ++;
        }
        return index === word.length;
    }

    getCount(word) {
        let children = this.root.children;
        let index = 0;
        let node = null;
        while (children.size != 0 && index < word.length) {
            let char = word[index];
            if (!children.has(char)) {
                return 0;
            }
            else {
                node = children.get(char);
                children = node.children;
            }
            index ++;
        }
        return node.count;
    }
}

module.exports = {Trie, TrieNode};