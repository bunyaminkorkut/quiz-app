
// start button function
const ui = new UI();
ui.btn_start.addEventListener("click", function() {
    if (quiz.sorular.length != quiz.soruindex){
        soruGoster(quiz.soruGetir());
        startTimer(10)
        sorusayisigoster(quiz.soruindex+1 ,quiz.sorular.length);
    }else{
        console.log('quiz bitti')
    
    }
})
// start button func for active quiz card
ui.btn_start.addEventListener('click', function(){
    ui.quiz.classList.add('active')
})
// func to show question from soru list
const option_list = ui.options
const correct = '<i class="fa-solid fa-check"></i>'
const incorrect = '<i class="fa-solid fa-xmark">'
function soruGoster(soru){
    let question =`<div class="question">${soru.sorumetni}</div>`;
    let options = ``
    ui.btn_next.classList.remove('show')
    for( let cevap in soru.cevapsecenekleri){
        options +=`<div class="option"><span><b>${cevap}</b>: ${soru.cevapsecenekleri[cevap]}</span></div>`;

    }
    ui.question_text.innerHTML = question;
    option_list.innerHTML = options;
    const option = option_list.querySelectorAll('.option');
// click on options event 
    for (opt of option){
        opt.setAttribute( 'onclick', 'optionselected(this)')
    }
}
function optionselected(option){
    let cevap = option.querySelector('span b').textContent;
    line_width=0;
    let soru = quiz.soruGetir();
    clearInterval(counter);
    ui.time.textContent='0';
    if (soru.cevabikontrolet(cevap)){
        option.classList.add('correct');
        option.insertAdjacentHTML('beforeend', correct);
        quiz.dogrucevapsayisi++;
    }else{
        option.classList.add('incorrect')
        option.insertAdjacentHTML('beforeend', incorrect)
    }
    for(let i=0; i<option_list.children.length;i+=1){
        option_list.children[i].classList.add('disable')
    }
    ui.btn_next.classList.add('show')

}
// next question button func
ui.btn_next.addEventListener("click",  function() {
    if (quiz.sorular.length != quiz.soruindex + 1){
        quiz.soruindex +=1;
        soruGoster(quiz.soruGetir());
        startTimer(10);
        sorusayisigoster(quiz.soruindex+1 ,quiz.sorular.length);

    }else{
        console.log('quiz bitti')
        console.log(quiz.dogrucevapsayisi)
        // sonuc yazdirma
        let result = `${quiz.sorular.length} sorudan ${quiz.dogrucevapsayisi} dogru cevap verdiniz.`
        ui.score_text.insertAdjacentHTML('beforeend',result )
        ui.score_box.classList.add('active')
        ui.quiz.classList.remove('active')
    }
})
// func to show count of question and questionlist

function sorusayisigoster(sorusirasi, toplamsoru){
    let tag = `<span class="badge bg-danger"> ${sorusirasi} / ${toplamsoru}</span>`
    ui.question_index.innerHTML= tag;
}

// finish button for quiz
ui.btn_finish.addEventListener("click", function(){
    window.location.reload();
} )

// restart button for quiz
ui.btn_restart.addEventListener('click', function(){
    quiz.soruindex = 0;
    quiz.dogrucevapsayisi = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove('active');
    document.querySelector('.score_text').innerHTML= ''
})

// function for timer
let line_width=0;
let counter;
function startTimer(time){
    counter = setInterval(timer, 1000)
    function timer(){
        ui.time.textContent = time;
        time--;
        let line = ui.line;
        
        line.style.width = line_width + '%'
        line_width+=10
        if(time < 0){
            clearInterval(counter);
            line_width= 0;
            let cevap = quiz.soruGetir().dogrucevap;
            for(let i of ui.options.children){
                if( cevap == i.querySelector('span b').textContent){
                    i.classList.add('correct')
                    i.insertAdjacentHTML('beforeend', correct);
                    ui.btn_next.classList.add('show')
                }
                i.classList.add('disable')
            }


        }
    }
}


