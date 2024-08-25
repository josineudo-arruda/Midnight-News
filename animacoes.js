document.querySelector('.banner-image').addEventListener('mouseover', function() {
    document.querySelector('#banner-principal h2').style.visibility = 'visible';
});  

document.querySelector('.banner-image').addEventListener('mouseout', function() {
    document.querySelector('#banner-principal h2').style.visibility = 'hidden';
});