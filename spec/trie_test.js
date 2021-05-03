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
});