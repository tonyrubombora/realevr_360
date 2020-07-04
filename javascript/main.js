//i keeps track of current picture in function next
var i = 0;

//make view $1 million functional

function view() {
    window.location.href = "./html/high-end.html";
    console.log('window location directed to page highend html');
}

//pop up message

function contact() {
    alert('Please reach out to us on this number \n +256750756996 or +25677');
}

function order() {

    let tour = prompt('Which tour would you like? high or low end');
    let contact = prompt('Please put your phone number below, we will reach out to you :)')
}

//Opens a side menue to links
function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}

//Low-end next & prev buttons
function getNext(){
    
if(i < object.length-1){
    i++;
    document.getElementById('vr').src = object[i];
}else{
    i = 0;
    document.getElementById('vr').src = object[0];
}

}

var object = ["https://momento360.com/e/u/672410b8150a4ce88167eadf6c8faf35?utm_campaign=embed&utm_source=other&heading=176.12443392585718&pitch=2.4691728515249878&field-of-view=94.68333333333322"
,"https://momento360.com/e/u/132873c68e4545aaa8610eadace53491?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75"
,"https://momento360.com/e/u/4e7a2426ec104899a3ec83058262f991?utm_campaign=embed&utm_source=other&heading=-134.74390940449837&pitch=-5.520930255606543&field-of-view=75"]
