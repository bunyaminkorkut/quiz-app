
// quiz class
function Quiz(sorular){
    this.sorular = sorular;
    this.soruindex = 0;
    this.dogrucevapsayisi = 0;
}

Quiz.prototype.soruGetir = function(){
    return this.sorular[this.soruindex];
}
const quiz = new Quiz(sorular);

