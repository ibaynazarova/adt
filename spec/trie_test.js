describe("Trie", function() {
    var {Trie, TrieNode} = require('../lib/trie');
  
    it("should insert word", () => {
        let trie = new Trie();

        trie.insert('apple');

        let charA = trie.root.getChild('a');
        expect(charA.char).toEqual('a');
        let charP = charA.getChild('p');
        expect(charP.char).toEqual('p');
        let charPP = charP.getChild('p');
        expect(charPP.char).toEqual('p');
        let charL = charPP.getChild('l');
        expect(charL.char).toEqual('l');
        let charE = charL.getChild('e');
        expect(charE.char).toEqual('e');
        expect(charE.isLast).toBeTrue();
    });

    it("should search by prefix", () => {
        let trie = new Trie();

        trie.insert('apple');

        expect(trie.search('a')).toBeTrue();
        expect(trie.search('ap')).toBeTrue();
        expect(trie.search('app')).toBeTrue();
        expect(trie.search('appl')).toBeTrue();
        expect(trie.search('apple')).toBeTrue();
        expect(trie.search('banana')).toBeFalse();
    });

    it('should maintain prefix count', () => {
        let trie = new Trie();

        trie.insert('apple');
        trie.insert('application');

        expect(trie.getCount('appl')).toEqual(2);
        expect(trie.getCount('apple')).toEqual(1);
        expect(trie.getCount('application')).toEqual(1);
        expect(trie.getCount('nonexistingword')).toEqual(0);
    });

    it('should delete word but keep prefix', () => {
        let trie = new Trie();

        trie.insert('a');
        trie.insert('a1');

        trie.delete('a1');

        expect(trie.searchWord('a')).toBeTrue();
        expect(trie.searchWord('a1')).toBeFalse();
    });

    it('should delete prefix', () => {
        let trie = new Trie();
        trie.insert('a');
        trie.insert('a1');

        trie.delete('a');

        expect(trie.searchWord('a')).toBeFalse();
        expect(trie.searchWord('a1')).toBeTrue();
    });

    it('should delete word', () => {
        let trie = new Trie();
        trie.insert('abc123');
        trie.insert('abc456');

        trie.delete('abc456');

        expect(trie.searchWord('abc456')).toBeFalse();
        expect(trie.searchWord('abc123')).toBeTrue();
    });


    it('should not delete word', () => {
        let trie = new Trie();
        trie.insert('abc123');

        trie.delete('abc456');

        expect(trie.delete('abc456')).toBeFalse();
    });
});