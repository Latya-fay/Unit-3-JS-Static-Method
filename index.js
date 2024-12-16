class Formatter {
  // Static method to capitalize the first letter of a string
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Static method to sanitize a string
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  // Static method to titleize a sentence
  static titleize(sentence) {
    const doNotCapitalize = [
      'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'
    ];

    const words = sentence.split(' ');

    return words
      .map((word, index) => {
        if (index === 0 || !doNotCapitalize.includes(word.toLowerCase())) {
          return this.capitalize(word); 
        } else {
          return word;
        }
      })
      .join(' ');
  }
}
