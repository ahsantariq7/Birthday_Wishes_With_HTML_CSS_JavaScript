
let wishes = document.getElementById('wish-text');

let wishTxt = [
    'Dear Abdullah Tariq',
    'Many many happy returns of the day',
    'you are my idol',
    'My inspiration',
    'Thank you for',
    'To give the right advice at all times',
    'For being close to me',
    'And to show big dreams',
    'Hope all your dreams come true',
    'always pray for you ',
    'Always be happy and healthy',
    'Love you My Bro!'
];

let num = 0;
setInterval(function () {
    if (num >= wishTxt.length) {
        num = 0;
    }
    wishes.innerText = wishTxt[num];
    num++;
}, 3000);