function Soru(sorumetni, cevapsecenekleri, dogrucevap){
    this.sorumetni = sorumetni;
    this.cevapsecenekleri = cevapsecenekleri;
    this.dogrucevap = dogrucevap;
}
Soru.prototype.cevabikontrolet = function(cevap){
    return cevap === this.dogrucevap;
}
// question list
let sorular =[ 
    new Soru('İnternet üzerinden görüntülü konuşma amacıyla kullanılan bilgisayar donanımı aşağıdakilerden hangisidir?', {a:'Tarayici', b:'Web Kamerasi', c:'Yazici', d:'Ekran'}, 'b'),

    new Soru('Bilgisayarın elle tutulabilen ve gözle görülebilen kısımlarına ne ad verilir?', {a:'Donanim', b:'Sistem yazilimi', c:'Uygulama Yazilimi', d:'Donatim'}, 'a'),

    new Soru('Aşağıdaki yazılımlardan hangisi sistem yazılımıdır?', {a:'Google Chrome', b:'Paint', c:'Avira Antivirüs', d:'Windows 8'}, 'd'),

    new Soru('Bilgisayardaki tüm işlemlerin yapıldığı dahili donanım birimi hangisidir?', {a:'Anakart', b:'Ram', c:'İşlemci', d:'Sabit Disk'}, 'c'),

    new Soru('Aşağıdakilerden hangisi dahili donanım birimidir?', {a:'Kasa', b:'Anakart', c:'Ekran', d:'Tarayıcı'}, 'b'),

    new Soru('Aşağıdaki uygulama yazılımlarından hangisi yanlış eşleştirilmiştir?', {a:'Eset Nod 32 - Antivirüs Yazılımı', b:'Mozilla Firefox - İnternet Tarayıcısı', c:'Paint - Resim Programı', d:'Microsoft Word - Sunum Programı'}, 'd'),

    new Soru('İnternete bağlanmamızı sağlayan donanım birimi aşağıdakilerden hangisidir?', {a:'Modem', b:'Anakart', c:'İşlemci', d:'Ses Kartı'}, 'a'),

    new Soru('Müzik dinlemek için kullandığımız uygulama yazılımı aşağıdakilerden hangisidir?', {a:'Paint', b:'Microsoft Powerpaint', c:'Avira', d:'Winamp'}, 'd'),

    new Soru('Aşağıdakilerden hangisi bir sistem yazılımıdır?', {a:'Google Chrome', b:'İnternet Explorer', c:'Windows XP', d:'Adobe Photoshop'}, 'c'),
    
]