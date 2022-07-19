$(document).ready(function (){
    const game = [
        {
            question: 'Какое море не имеет берегов?',
            answer: 'саргассово',
        },
        {
            question: 'Как называют человека, который коллекционирует марки?',
            answer: 'филателист',
        },
        {
            question: 'Кто победил медузу горгону?',
            answer: 'персей',
        },
        {
            question: 'Какой океан самый большой по площади?',
            answer: 'тихий',
        },
        {
            question: 'Как называется единица измерения силы тока?',
            answer: 'ампер',
        },
    ];

    let object = '';

    function getRandomObject(max) {
        return Math.floor(Math.random() * max);
    }
    const random = getRandomObject(game.length);

    object = game[random];
    let answerCount = object.answer.length;
    let currentAnswer = object.answer;
    let indexes = [];
    $('.wrapQuest').text(object.question);
    $('.yakubovichSay').css('padding', '20px 28px 0 0');

    const generateAnswer = () => {
        for (i = 0; i < answerCount; i++) {
            let li = $('<li>').appendTo('.wrapLetters');
            li.addClass('itemLetter');
            li.attr('id', i);
        }
    }
    generateAnswer();

    const opt = {
        rot: 0,
        section: 16,
        item: 360 / 16,
        proc: 0,
        score: 0
    }

    let startInterval;

    const time = () => {
        let timer = $('.timer').text();

        if (timer > 0) {
            timer--;
            $('.timer').text(timer);
        } else {
            clearInterval(startInterval);
            result();
        }
    }

    const spinBaraban = (e) => {
        e.preventDefault()
        $('.timer').text(10);
        $('.yakubovichSay').text('');
        let dok = 16-opt.rot;
        opt.rot = Math.floor(Math.random() * opt.section + 1 )
        let col = Math.floor((Math.random() * 2) + 4)
        opt.proc += (opt.rot + col*16 + dok) * 22.5
        $('.baraban').animate({  textIndent: opt.proc }, {
            duration: 5000,
            complete: function() {
                switch(opt.rot){
                    case 3: opt.score+=700; break;
                    case 5: opt.score+=1000; break;
                    case 11: opt.score+=400; break;
                    case 1: opt.score+=200; break;
                    case 10: opt.score+=1; break;
                    case 7: opt.score*=2; break;
                    case 2: opt.score*=3; break;
                    case 9: opt.score+=800; break;
                    case 6: opt.score+=100; break;
                    case 12: opt.score+=900; break;
                    case 13: opt.score+=0; break;
                    case 14: break;
                    case 15: opt.score+=500; break;
                    case 16: opt.score+=300; break;
                    case 4: opt.score+=0; break;
                    case 8: opt.score+=600; break;
                }
                startInterval = setInterval(time, 1000);
                $('.send').on('click', enterLetter)
            },
            easing : 'swing',
            step: function(now) {
                $(this).css('-webkit-transform','rotate('+now+'deg)');
            }
        })
        $('.roll').off('click');
    }

    $('.roll').on('click', spinBaraban);

    const enterLetter = () => {
        let enterLetter = $('.myLetter').val();
        if(enterLetter != '') {
            if($('.itemLetter').text().includes(enterLetter)) {
                $('.yakubovichSay').text('Такая буква уже была.');
            } else if(currentAnswer.includes(enterLetter)) {
                clearInterval(startInterval);
                for (let i = 0; i < answerCount; i++) {
                    if (currentAnswer[i] === enterLetter) {
                        indexes.push(i);
                        addText(enterLetter);
                        checkWinner();
                        $('.yakubovichSay').text('Крутите барабан');
                    }
                }
                $('.myLetter').val('');
                $('.score').text(opt.score)
                $('.send').off('click')
                $('.roll').on('click', spinBaraban);
            } else {
                $('.yakubovichSay').text('Такой буквы не существует. Вы проиграли!');
                result()
            }
        }

    }

    const checkWinner = () => {
        if ($('.itemLetter').text() == currentAnswer) {
            result()
        }
    }

    const result = () => {
        $('.game').hide()
        let wrap = $('<div>').appendTo('body');
        wrap.addClass(`wrap`);
        wrap.html(`Игра окончена!<br/>Ваш результат: ${opt.score}`);
    }

    const addText = (enterLetter) => {
        lis = $('.itemLetter');
        indexes.forEach(el => {
            lis[el].innerHTML = enterLetter;
            indexes = [];
        })
    }
})
