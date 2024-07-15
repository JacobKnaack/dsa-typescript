import { Trie } from './Trie';

describe('Trie word search', () => {
  test('Should return true for words that have been inserted into Trie', () => {
    let trie = new Trie();
    let words = [
      "this",
      "is",
      "a",
      "sentence"
    ];
    words.forEach(word => trie.insert(word));

    let search = trie.search('is');
    expect(search).toEqual(true);


    words = [
      "pizza",
      "is",
      "delicious"
    ]
    words.forEach(word => trie.insert(word));

    search = trie.search('delicious');
    expect(search).toEqual(true);
  });
  test('Should return false for words that are not found within the trie', () => {
    let trie = new Trie();
    let words = [
      "here",
      "I",
      "am"
    ];
    words.forEach(word => trie.insert(word));

    let search = trie.search('is');
    expect(search).toEqual(false);

    search = trie.search('aman');
    expect(search).toEqual(false);
  });

  test('Should find words that are prefixed with substrings', () => {
    let trie = new Trie();
    let words = [
      "I",
      "love",
      "sandwiches",
      "and",
      "foobar"
    ];
    words.forEach(word => trie.insert(word));

    let search = trie.startsWith('foo');
    expect(search).toEqual(true);

    search = trie.startsWith('an');
    expect(search).toEqual(true);

    search = trie.startsWith('sand');
    expect(search).toEqual(true);
  });

  test('Should find the closest matching word so far', () => {
    let trie = new Trie();
    let words = [
      "I",
      "am",
      "a",
      "bat",
    ];
    words.forEach(word => trie.insert(word));
    
    let search = trie.getClosest('batman');
    expect(search).toEqual('bat');
  })
});