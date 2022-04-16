function LinksSetColor(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
        alist[i].style.color = color;
        i = i+1;
    }
}
var Links = {
    setColor:function(color){
    //     var alist = document.querySelectorAll('a');
    //     var i = 0;
    //     while(i < alist.length){
    //         alist[i].style.color = color;
    //         i = i+1;
    //     }
        $('a').css('color',color);
        // jquery사용한거
    }
    
}
function BodySetColor(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
}
function BodySetBackgroundColor(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
}
var Body = {
    setColor:function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}
// 위쪽이 객체를 활용한거임
function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('powderblue');
    }else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}

// https://developers.google.com/speed/libraries#jquery
// jqeury사용할때 여기를 참고하면 좋다.