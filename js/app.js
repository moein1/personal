function getElementById(id) {
    return document.getElementById(id);
}

function fadeInOut(fade_in, fade_out, display) {
    getElementById(fade_in).style.display = display;
    getElementById(fade_in).style.animationName = 'fade-in';
    getElementById(fade_out).style.display = 'none';
}


var overlay = document.getElementsByClassName('thumb-overlay');

for (let i = 0; i < overlay.length; i++) {
    const element = overlay[i];
    element.addEventListener('click', function (e) {
        //finding the paragraoh inside the selected element;
        //set the header of the work container to the selected item
        (getElementById('work-section').getElementsByTagName('h3'))[0].innerText =
            (e.target.getElementsByTagName('p'))[0].textContent;

        //set the body of the content to the selected element
        const child = element.parentNode;
        const parent = child.parentNode;
        //finding the index of the child element in the parent section
        var i = Array.prototype.indexOf.call(parent.children, child);
        getElementById('work-body').style.backgroundImage =
            `url(../img/work${i + 1}.jpeg)`;
        getElementById('thumb-section').style.animationName = 'fade-out';
        setTimeout(() => {
            fadeInOut('work-section', 'thumb-section', 'block');
        }, 500);
    })
}

getElementById('work-return').addEventListener('click', function () {
    fadeInOut('thumb-section', 'work-section', 'flex');
});

///work section and change the content of the with pure javascript
//and we know that in real project we need to use a framework like
// Angular or React that will let us to replcr the content easily
// and Ajax while from some content that we will recieved from server
const client_images = ['face1.jpg', 'face2.jpg', 'face3.jpg', 'face4.jpg'];
var client_index = 1;
getElementById('client-control-next').addEventListener('click', function () {   
    var old_index = client_index;
    if (client_index == client_images.length) {
        client_index = 1;
        getElementById('client-image').src = `../img/client/${client_images[client_index -1]}`;
    }else{
        client_index ++;
        getElementById('client-image').src = `../img/client/${client_images[client_index -1]}`;
    }
    ActiveImage(old_index-1 , client_index -1);
});

getElementById('client-control-prev').addEventListener('click' ,function(){
    var old_index = client_index;
    if(client_index == 1){
        client_index = client_images.length;
        getElementById('client-image').src = `../img/client/${client_images[client_index - 1]}`;
    }else{
        client_index--;
        getElementById('client-image').src = `../img/client/${client_images[client_index -1]}`;
    }
    ActiveImage(old_index-1,client_index -1);
})

function ActiveImage(old_index, new_index){
    var currnetActive = (getElementById('client-logo-list').children)[old_index];
    currnetActive.classList.remove('client-active');
    var newActive = (getElementById('client-logo-list').children)[new_index];
    newActive.classList.add('client-active');
};

//track the mobile control items click
var mobile_control = document.getElementsByClassName('mobile-control-item');
for (let i = 0; i < mobile_control.length; i++) {
    mobile_control[i].addEventListener('click' ,function(e){
        const element = e.target;
        var sibiling  = element.parentNode.children;
        for (let j = 0; j < sibiling.length; j++) {
            sibiling[j].classList.remove('client-active');
            
        }
        element.classList.add('client-active');

        var current_index = Array.prototype.indexOf.call(sibiling ,element);
        getElementById('client-image').src = `../img/client/${client_images[current_index]}`;
    })  
}
