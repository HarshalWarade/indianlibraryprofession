let home = document.getElementById('home');
let about = document.getElementById('about');
let theme = document.getElementById('theme');
let submission = document.getElementById('submission');
let editorial = document.getElementById('editorial');
let dates = document.getElementById('dates');
let contact = document.getElementById('contact');
let homeDiv = document.getElementById('homeDiv');
let aboutDiv = document.getElementById('aboutDiv');
let themeDiv = document.getElementById('themeDiv');
let submissionDiv = document.getElementById('submissionDiv');
let editorialDiv = document.getElementById('editorialDiv');
let datesDiv = document.getElementById('datesDiv');
let contactDiv = document.getElementById('contactDiv');
aboutDiv.style.display = 'none';
themeDiv.style.display = 'none';
submissionDiv.style.display = 'none';
editorialDiv.style.display = 'none';
datesDiv.style.display = 'none';
contactDiv.style.display = 'none';

about.addEventListener('click', function() {
    homeDiv.style.display = 'none';
    aboutDiv.style.display = '';
    themeDiv.style.display = 'none';
    submissionDiv.style.display = 'none';
    editorialDiv.style.display = 'none';
    datesDiv.style.display = 'none';
    contactDiv.style.display = 'none';
})
theme.addEventListener('click', function() {
    homeDiv.style.display = 'none';
    aboutDiv.style.display = 'none';
    themeDiv.style.display = '';
    submissionDiv.style.display = 'none';
    editorialDiv.style.display = 'none';
    datesDiv.style.display = 'none';
    contactDiv.style.display = 'none';
})
submission.addEventListener('click', function() {
    homeDiv.style.display = 'none';
    aboutDiv.style.display = 'none';
    themeDiv.style.display = 'none';
    submissionDiv.style.display = '';
    editorialDiv.style.display = 'none';
    datesDiv.style.display = 'none';
    contactDiv.style.display = 'none';
})
editorial.addEventListener('click', function() {
    homeDiv.style.display = 'none';
    aboutDiv.style.display = 'none';
    themeDiv.style.display = 'none';
    submissionDiv.style.display = 'none';
    editorialDiv.style.display = '';
    datesDiv.style.display = 'none';
    contactDiv.style.display = 'none';
})
dates.addEventListener('click', function() {
    homeDiv.style.display = 'none';
    aboutDiv.style.display = 'none';
    themeDiv.style.display = 'none';
    submissionDiv.style.display = 'none';
    editorialDiv.style.display = 'none';
    datesDiv.style.display = '';
    contactDiv.style.display = 'none';
})
contact.addEventListener('click', function() {
    homeDiv.style.display = 'none';
    aboutDiv.style.display = 'none';
    themeDiv.style.display = 'none';
    submissionDiv.style.display = 'none';
    editorialDiv.style.display = 'none';
    datesDiv.style.display = 'none';
    contactDiv.style.display = '';
})