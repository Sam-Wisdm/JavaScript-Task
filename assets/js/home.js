
// fetch("../slides.json")
// .then(response => {
//    return response.json();
// })
// .then(data => console.log(data));
window.onload = ()=>{
    initial() ;
}

// Global Variable
var index = 2 ;
var slideArr = [
    {
        id : 1,
        title : 'Life is Beautiful',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quis deserunt vero consequatur',
        img : 'https://www.tripsavvy.com/thmb/FW00bGmyhQ_cHIMw50A00WnTXIU=/2123x1412/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-172596980-5b7d710fc9e77c00503345ba.jpg'
    },
    {
        id : 2,
        title : 'Life is Beautiful',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quis deserunt vero consequatur',
        img : 'http://1.bp.blogspot.com/-u-DjUbp9zUM/T7DLUQaQZrI/AAAAAAAAAIw/h2rONpQRwwQ/s1600/natural.jpg'
    },
    {
        id : 3,
        title : 'Life is Beautiful',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quis deserunt vero consequatur',
        img : 'http://media-cache-ec0.pinimg.com/originals/68/61/95/68619527687775e73d3c7837256c9e7f.jpg'
    },
    {
        id : 4,
        title : 'Life is Beautiful',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quis deserunt vero consequatur',
        img : 'https://tse4.explicit.bing.net/th?id=OIP.WPsBdGUveYhjHVYgRH1BLgHaEK&pid=Api&P=0&w=315&h=178'
    },
    {
        id : 5,
        title : 'Life is Beautiful',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quis deserunt vero consequatur',
        img : 'https://www.tripsavvy.com/thmb/FW00bGmyhQ_cHIMw50A00WnTXIU=/2123x1412/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-172596980-5b7d710fc9e77c00503345ba.jpg'
    },
    {
        id : 6,
        title : 'Life is Beautiful',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quis deserunt vero consequatur',
        img : 'http://1.bp.blogspot.com/-u-DjUbp9zUM/T7DLUQaQZrI/AAAAAAAAAIw/h2rONpQRwwQ/s1600/natural.jpg'
    },
    {
        id : 7,
        title : 'Life is Beautiful',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quis deserunt vero consequatur',
        img : 'http://media-cache-ec0.pinimg.com/originals/68/61/95/68619527687775e73d3c7837256c9e7f.jpg'
    },
    {
        id : 8,
        title : 'Life is Beautiful',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quis deserunt vero consequatur',
        img : 'https://tse4.explicit.bing.net/th?id=OIP.WPsBdGUveYhjHVYgRH1BLgHaEK&pid=Api&P=0&w=315&h=178'
    },
 
]


function initial(){
    var img =  document.getElementById('master');
   img.style.backgroundImage = "url(" + slideArr[index].img + ")";
}


function left(){
    console.log('This left+=>',index);
    if(index>0){
        // console.log('Inside',slideArr[index-1]);
        document.getElementById('master').style.backgroundImage = "url(" + slideArr[--index].img + ")";
    }

  
}

function right(){
    console.log('This left+=>',index);
    if(index<slideArr.length-1){
        // console.log('Inside',slideArr[index++]);
        document.getElementById('master').style.backgroundImage = "url(" + slideArr[++index].img + ")";
    }
}


