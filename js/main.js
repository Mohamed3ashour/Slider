var itemsImag =Array.from (document.querySelectorAll('.item img'));
var lightContainer=document.querySelector('.lightContainer');
var curentIndexSlider=0;
var lightboxx=document.querySelector('.lightbox');
var nextButton=document.getElementById('next');
var previouseButton=document.getElementById('previose');
var closeButton=document.getElementById('closeBtn');

for (var i = 0; i < itemsImag.length; i++) {
    itemsImag[i].addEventListener('click',function (e) {

       var imgUrl= e.target.getAttribute('src');
       curentIndexSlider=itemsImag.indexOf(e.target);
       lightboxx.style.backgroundImage= `url(${imgUrl})`;
       lightContainer.classList.replace('d-none','d-flex');

    }
)
}
function nextSlid(){
    curentIndexSlider++;
    if (curentIndexSlider==itemsImag.length) {
        curentIndexSlider=0;
    }
    var imgNextSrc = itemsImag[curentIndexSlider].getAttribute('src');
    lightboxx.style.backgroundImage= `url(${imgNextSrc})`;
    

};
function previouseSlid(){
    curentIndexSlider--;
    if (curentIndexSlider<0) {
        curentIndexSlider=itemsImag.length-1;
    }
    var imgpreviouseSrc = itemsImag[curentIndexSlider].getAttribute('src');
    lightboxx.style.backgroundImage= `url(${imgpreviouseSrc})`;
    

};
function closeSlid(){
    lightContainer.classList.replace('d-flex','d-none');
};
document.addEventListener('keydown',function(e){
        if (e.key=='ArrowRight') {
                nextSlid();
        }
        if (e.key=='ArrowLeft') {
                previouseSlid();
        }
        if (e.key=='Escape') {
                closeSlid();
        }
    })
nextButton.addEventListener('click',nextSlid);
previouseButton.addEventListener('click',previouseSlid);
closeButton.addEventListener('click',closeSlid);