/**
 * Data Structure for storing strings and retrieving string characters
 */

export class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node: TrieNode = this.root;
    for (let i: number = 0; i < word.length; i++) {
      let char: string = word[i];
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }

    node.isEndOfWord = true;
  }
  search(word: string): boolean {
    let node: TrieNode = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }
    return node.isEndOfWord;
  }
  startsWith(prefix: string): boolean {
    let node: TrieNode = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let char = prefix[i];
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }
    return true;
  }
  getClosest(word: string): string | null {
    let node: TrieNode = this.root;
    let closestMatch: string | null = null;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node.children.has(char)) {
        return closestMatch;
      }
      closestMatch ? closestMatch += char : closestMatch = char;
      node = node.children.get(char)!;
    }

    return closestMatch;
  }
}
