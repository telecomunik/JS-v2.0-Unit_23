let color = '';
window.addEventListener('storage', function (e) {
    color = localStorage.getItem('bg');
    color = JSON.parse(color);
    document.querySelector('.body').style.backgroundColor = color;
    console.log(color);
})