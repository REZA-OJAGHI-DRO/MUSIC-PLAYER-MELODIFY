// start click player
let _clone = 0
let _clone2 = 0
let time1=0
let _cloneWidth=0
let _nextPlay=0
let _audio1 = document.getElementById('audio-1')
let _clickPlay1 = document.querySelectorAll('.m1')
let _clickPlay2 = document.getElementById('click-play2')
let _clickPause2 = document.getElementById('click-pause2')
let _clickNextPlay = document.querySelectorAll('.click-next-play')
let _clickPreviousPlay = document.getElementById('click-Previous-play')
let _clickRepeat = document.getElementById('clickRepeat')

const _audio = ['1', '2', '3', '4', '5', '6', '7',
    '8', '9', '10', '11', '12', '13', '14', '15',
    '16', '17', '18', '19', '20'
]
// end click player

// start like music
let _clickLikeMusic1 = document.querySelectorAll('.like')
let _clickLikeMusicGlobal1 = document.getElementById('likeGlobal1')
let _clickLikeMusicGlobal2 = document.getElementById('likeGlobal2')
// end like music

//start slider
let _clickRight1 = document.getElementById('clickright1')
let _clickRight2 = document.getElementById('clickright2')
let _clickLeft1 = document.getElementById('clickleft1')
let _clickLeft2 = document.getElementById('clickleft2')
let _slider1 = document.getElementsByClassName('slider1')
let _slider2 = document.getElementsByClassName('slider2')
// end slider

// start time music
let _time1 = document.getElementById('time1')
let _timer = document.getElementById('timer')
let _timeAll = document.getElementById('timeAll')
let _line = document.getElementById('line')

const _constTimeAll = ['3:36', '3:20', '1:24', '2:59', '3:30', '2:51',
    '3:22', '2:58', '3:10', '2:59', '4:27', '2:39', '4:07', '2:49',
    '4:21', '2:50', '3:16', '4:29', '2:13', '3:15'
]
// end time music

// start volume music
let _line2 = document.getElementById('line2')
let _volume = document.getElementById('volume')
let _iconVolume=document.getElementsByClassName('iconVolume')
// end volume music

// start download
let _download=document.getElementById('download')
// end download

// start img nameMusic SingerosName

let img1 = document.getElementById('img1')
const _img1 = ['1.jpg', '2.jpg', '3.jpg', '4.jfif', '5.jpg', '6.jpg', '7.jpg',
    '8.jpeg', '9.jpg', '10.jfif', '11.jfif', '12.jpg', '13.jpg', '14.jpg', '15.jfif',
    '16.jpg', '17.jfif', '18.jpg', '19.jpg', '20.jfif'
]

// *****

let nameMusic = document.getElementById('nameMusic')
const _nameMusic = ['یادم نرفته', 'اون روزا رو می خوام', 'گل نازم (دلی)',
    'عاشقت میشم', 'دلم میخواد', 'حرف اخر', 'بچه نشو', 'تو تکی', 'کمان ابرو',
    'یه روز', 'vaybe - mahmut orhan remix', 'still (i got summer on my mind)',
    'batmayel asla el beat', 'jekyll & hide-white panda remix', 'get lucky (slowed and reverb)', 'lifeline (feat.ella henderson)', 'because you move me', 'dream about you',
    'friends with the night( feat. jocelyn alice)', 'Strangers (feat. Linney)'
]

// *****

let SingerosName = document.getElementById('SingerosName')
const _SingerosName = ['هورش باند', 'سیروان خسروی', 'رضا بهرام', 'میلاد بابایی', 'پازل باند', 'امین بابایی', 'حسین منتظری', 'سینا درخشنده', 'حجت اشرف زاده', 'گرشا رضایی', 'kenan dogulu', 'liufo , jkrs , bad sin', ' elissa',
    'bisghop briggs , white panda', 'pharrell williams , daft punk , nile rodgers', 'glockenbach , ella henderson', 'tinlicker , helsloot', 'roudeep',
    'manse , svnsets , jocelyn alice', 'young bombs ,linney'
]

// end img nameMusic SingerosName


// start click player

_clickPlay1.forEach((val, i) => {
    clickPause()
    val.addEventListener('click', () => {

        
        if (val.classList.contains('bi-play-circle-fill')) {
            clickPlay()
            _timeAll.innerHTML = _constTimeAll[i]
            _audio1.src = 'music/' + _audio[i] + '.mp3'
            nameMusic.innerHTML = _nameMusic[i]
            SingerosName.innerHTML = _SingerosName[i]
            img1.src = 'img/' + _img1[i]
            _clickPlay1[i].classList.remove('bi-play-circle-fill')
            i5 = 1
        } else {
            _audio1.pause();
            clickPause()
        }
        for (let k = 0; k < _clickPlay1.length; k++) {
            if (i != k) {
                _clickPlay1[k].classList.add('bi-play-circle-fill')
                _clickPlay1[k].classList.remove('bi-pause-circle-fill')
            }
        }
        _clone = i
    })
});

function clickPlay() {
    _audio1.play()
    timeAll()
    _clickPlay2.classList.add('hidden')
    _clickPause2.classList.remove('hidden')
    _clickPlay1.forEach((val) => {
        val.classList.add('bi-pause-circle-fill')
    })
    _clickPlay1[_clone].classList.remove('bi-play-circle-fill')
    _clickPlay1[_clone].classList.add('bi-pause-circle-fill')

    
}

function clickPause() {
    _audio1.pause()
    _clickPlay2.classList.remove('hidden')
    _clickPause2.classList.add('hidden')
    _clickPlay1[_clone].classList.add('bi-play-circle-fill')
    _clickPlay1[_clone].classList.remove('bi-pause-circle-fill')

}
let i5 = 1

_clickNextPlay.forEach((val, one) => {
    val.addEventListener('click', () => {
        let i = _clone + i5
        if (one == 0) {
            if (i < (_clickPlay1.length)) {
                _audio1.src = 'music/' + _audio[i] + '.mp3'
                nameMusic.innerHTML = _nameMusic[i]
                SingerosName.innerHTML = _SingerosName[i]
                img1.src = 'img/' + _img1[i]
                _clickPlay1[i - 1].classList.add('bi-play-circle-fill')
                _clickPlay1[i].classList.remove('bi-play-circle-fill')
                _clickPlay1[i].classList.add('bi-pause-circle-fill')
                _timeAll.innerHTML = _constTimeAll[i]
                i5++
            }
        } else {
            i = i - 1
            if (i > 0) {
                _audio1.src = 'music/' + _audio[i - 1] + '.mp3'
                nameMusic.innerHTML = _nameMusic[i - 1]
                SingerosName.innerHTML = _SingerosName[i - 1]
                img1.src = 'img/' + _img1[i - 1]
                _clickPlay1[i - 1].classList.remove('bi-play-circle-fill')
                _clickPlay1[i - 1].classList.add('bi-pause-circle-fill')
                _timeAll.innerHTML = _constTimeAll[i - 1]
                for (let k = 0; k < _clickPlay1.length; k++) {
                    if ((i - 1) != k) {
                        _clickPlay1[k].classList.add('bi-play-circle-fill')

                    }
                }
                i5--
            }
        }
         
        _clone2 = i
    })
})
let flag=0
setInterval(() => {
        if(_audio1.duration==_nextPlay){
                _audio1.src = 'music/' + _audio[_clone+flag] + '.mp3'
                flag++
            }    
        }, 1000);
 
_clickRepeat.addEventListener('click', (e) => {
    if (e.target.classList.contains('bi-repeat')) {
        e.target.classList.remove('bi-repeat')
        e.target.classList.add('bi-repeat-1')
        e.target.style.color='red'
        _audio1.setAttribute('loop', 'true')
    } else {
        e.target.classList.add('bi-repeat')
        e.target.classList.remove('bi-repeat-1')
        _audio1.removeAttribute('loop')

       
    }
})
// end click player

// *******

// start like music
let l1 = 1
_clickLikeMusic1.forEach((val) => {
    val.addEventListener('click', (e) => {
        if (l1 % 2) {
            checkLike1()
        } else {
            checkLike2()
        }
        l1++
    })
})

function checkLike1() {
    _clickLikeMusicGlobal1.classList.add('hidden')
    _clickLikeMusicGlobal2.classList.remove('hidden')
    _clickLikeMusic1[_clone].classList.remove('bi-heart')
    _clickLikeMusic1[_clone].classList.add('bi-heart-fill')
    _clickLikeMusic1[_clone].style.color = 'red'
    _clickLikeMusic1[_clone2].classList.remove('bi-heart')
    _clickLikeMusic1[_clone2].classList.add('bi-heart-fill')
    _clickLikeMusic1[_clone2].style.color = 'red'
}

function checkLike2() {
    _clickLikeMusicGlobal1.classList.remove('hidden')
    _clickLikeMusicGlobal2.classList.add('hidden')
    _clickLikeMusic1[_clone].classList.add('bi-heart')
    _clickLikeMusic1[_clone].classList.remove('bi-heart-fill')
    _clickLikeMusic1[_clone].style.color = ''
    _clickLikeMusic1[_clone2].classList.add('bi-heart')
    _clickLikeMusic1[_clone2].classList.remove('bi-heart-fill')
    _clickLikeMusic1[_clone2].style.color = ''
}


// end like music

// *******

//start time music
function timeAll(){
    let min = Math.floor(_audio1.duration / 60)
    let sec = Math.floor(_audio1.duration % 60)
    if (sec < 10) {
        sec = '0' + String(sec);
    }
    _timeAll.innerHTML = min + ':' + sec
}

setInterval(function () {
    let min = Math.floor(_audio1.currentTime / 60)
    let sec = Math.floor(_audio1.currentTime % 60)
    if (sec < 10) {
        sec = '0' + String(sec);
    }
    _time1.innerHTML = min + ':' + sec
}, 10);

 _line.addEventListener('mousedown', (e) => {
    let time = Number(_audio1.duration)
        let x = (time / 100)
        width1 = e.offsetX
        w = width1 / 4.77
        _timer.style.width = w + '%'
         t=w*x
        _audio1.currentTime = t 
        clickPause()
        _cloneWidth=w
})
_line.addEventListener('mouseup', (e) => {
clickPlay()
})

setInterval(() => {
    let time = Number(_audio1.duration)
     timeMusic = Number(_audio1.currentTime)
     x = (100 / time)
    _timer.style.width = (timeMusic * x) + '%'
    _nextPlay=timeMusic
}, 1);


//end time music

//  ********

// start volume music

_line2.addEventListener('mousedown',(e)=>{
    width2 = e.offsetX
    w = width2 / 1.62
    _volume.style.width = w + '%'
    _audio1.volume=w/100;
    if(w<33){
        _iconVolume[0].classList.remove('hidden')
        _iconVolume[1].classList.add('hidden')
        _iconVolume[2].classList.add('hidden')
    }
    if(w>33&&w<66){
        _iconVolume[0].classList.add('hidden')
        _iconVolume[1].classList.remove('hidden')
        _iconVolume[2].classList.add('hidden')
    }
    if(w>66&&w<106){
        _iconVolume[0].classList.add('hidden')
        _iconVolume[1].classList.add('hidden')
        _iconVolume[2].classList.remove('hidden')
    }
})

//  end volume music
// ********

// start download
_download.addEventListener('click',()=>{
_audio1.setAttribute('download','true')
})
// end download

//start click left & right slider

let x1 = 0
_clickRight1.addEventListener('click', (e) => {
    checkRight1()
    if (x1 == -1) {
        _clickLeft1.parentElement.classList.remove('bg-gray-800')
    } else {
        _clickLeft1.parentElement.classList.add('bg-gray-800')

    }
    if (x1 < 4) {
        x1++
        for (let i = 0; i < _slider1.length; i++) {
            _slider1[i].style.transform = ('translate(' + 114 * x1 + '%)')
        }
    }
})
_clickLeft1.addEventListener('click', (e) => {
    if (x1 > 0) {
        x1--

        for (let i = 0; i < (_slider1.length); i++) {
            _slider1[i].style.transform = ('translate(' + 114 * x1 + '%)')
        }
    }
    checkLeft1()
    if (x1 > 3) {
        _clickRight1.parentElement.classList.remove('bg-gray-800')
    } else if (x1 <= 3) {
        _clickRight1.parentElement.classList.add('bg-gray-800')

    }
})
let x2 = 0
_clickRight2.addEventListener('click', (e) => {
    checkRight2()
    if (x2 == -1) {
        _clickLeft2.parentElement.classList.remove('bg-gray-800')
    } else {
        _clickLeft2.parentElement.classList.add('bg-gray-800')

    }
    if (x2 < 4) {
        x2++
        for (let i = 0; i < _slider2.length; i++) {
            _slider2[i].style.transform = ('translate(' + 114 * x2 + '%)')
        }
    }
})
_clickLeft2.addEventListener('click', (e) => {

    if (x2 > 0) {
        x2--

        for (let i = 0; i < (_slider2.length); i++) {
            _slider2[i].style.transform = ('translate(' + 114 * x2 + '%)')
        }
    }
    checkLeft2()
    if (x2 > 3) {
        _clickRight2.parentElement.classList.remove('bg-gray-800')
    } else if (x2 <= 3) {
        _clickRight2.parentElement.classList.add('bg-gray-800')

    }
})

function checkRight1() {
    if (x1 > 2) {
        _clickRight1.parentElement.classList.remove('bg-gray-800')
    } else if (x1 <= 2) {
        _clickRight1.parentElement.classList.add('bg-gray-800')

    }
}

function checkLeft1() {
    if (x1 == 0) {
        _clickLeft1.parentElement.classList.remove('bg-gray-800')
    } else {
        _clickLeft1.parentElement.classList.add('bg-gray-800')

    }
}

function checkRight2() {
    if (x2 > 2) {
        _clickRight2.parentElement.classList.remove('bg-gray-800')
    } else if (x2 <= 2) {
        _clickRight2.parentElement.classList.add('bg-gray-800')

    }
}

function checkLeft2() {
    if (x2 == 0) {
        _clickLeft2.parentElement.classList.remove('bg-gray-800')
    } else {
        _clickLeft2.parentElement.classList.add('bg-gray-800')
    }
}


// end click left & right slider