document.querySelector('.p2').addEventListener('click', function() {
    window.location.href = 'https://github.com/Quoboo';
});

document.querySelector('.senproh2').addEventListener('click', function() {
    window.location.href = 'https://www.senpro.de';
});

function openPopup(title, content) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-content').innerHTML = content;

    document.getElementById('popup-container').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
}