//typed settings
var typed = new Typed('.typed', {
    strings: ["&nbsp;Software Engineer", "&nbsp;Nekopara Enthousiast", "&nbsp;Circle Clicker"],
    typeSpeed: 50,
    startDelay: 1000,
    backSpeed: 20,
    backDelay: 2500,
    loop: true,
    showCursor: true
});

var keys = '';
window.addEventListener('keypress', function (e) {
    keys += `${e.charCode}+`;
    console.log(keys);
    if (keys == '107+121+117+119+117+') window.location.replace('https://youtu.be/dQw4w9WgXcQ');
});