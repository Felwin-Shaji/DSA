class TrieNode {
    constructor() {
        this.children = {};         
        this.isEndOfWords = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWords = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWords;  // Corrected from 'isEnd'
    }

    print(node = this.root, word = "") {
        if (node.isEndOfWords) console.log(word);  // Corrected from 'isEnd'

        for (let char in node.children) {
            this.print(node.children[char], word + char);
        }
    }

    autoComplete(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return [];
            node = node.children;
        }

        let words = []
        this.collectWords(node, prefix, words)
        return words
    }

    collectWords(node, prefix, words) {
        if (node.isEndOfWords) {
            words.push(prefix);
        }
        for (let char in node.children) {
            this.collectWords(node.children[char], prefix + char, words)
        }
    }


    longestCommonPrefix() {
        let node = this.root;
        let prefix = "";
      
        while (node && Object.keys(node.children).length === 1 && !node.isEndOfWords) {
          let char = Object.keys(node.children)[0]; // Get the only child
          prefix += char;
          node = node.children[char];
        }
      
        return prefix;
      }
      
}

// Example Usage
    const trie = new Trie();
    trie.insert("apple");
trie.insert("app");
trie.insert("bat");

console.log(trie.search("app"));  // true
console.log(trie.search("bat"));  // true
console.log(trie.search("bats")); // false

trie.print();  // Outputs: app, apple, bat

//1.. longest prifix 



