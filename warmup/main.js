
var getNucleotides = {

  checkletters: function (str, nucleotide) {
    var str = str.toUpperCase();
    var nucleotide = nucleotide.toUpperCase();
    var count= 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] === nucleotide) {
        count +=1;
      }
    }
    return count;
  },

  nucleotideCheck: function (word) {
    var nucleotideCheckList = {
      "A": this.checkletters(word, "A"),
      "C": this.checkletters(word, "C"),
      "G": this.checkletters(word, "G"),
      "T": this.checkletters(word, "T"),
      "U": this.checkletters(word, "U")
    }
    return nucleotideCheckList;
  }

}
