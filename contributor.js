var contributors = [
    'Fathurrahman',
    "Ulul Azmi"
];

var body = document.querySelector('body'); 
contributors.forEach(function(c, i){
    var h1 =  document.createElement('h1');
    h1.setAttribute('id', 'cont-' + i);
    h1.innerHTML=c;
    body.append(h1);
});