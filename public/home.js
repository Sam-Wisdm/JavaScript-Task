var index = 1 ;
var slideArr = [] ;
var postArr = [] ;
var filterPost = [] ;
var pageNo = 0 ;
window.onload = ()=>{ 
    sliding() ;
   
    let arr = [];
    fetch('../slides.json')
 .then(response => {
       return response.json();
    })
 .then(data => {
 //do whatever with your data
 slideArr = data ;
 document.getElementById('master').style.backgroundImage = "url(" + slideArr[index%slideArr.length].img + ")";
                      
})

fetch('../posts.json')
.then(response => {
    return response.json() ;
})
.then(data => {
    postArr = data.posts ;
    filterPost = postArr
    post(0,postArr) ;
    numOfPage(postArr);
    selectPageBgColor(pageNo,postArr) ;
})

}

//Image Sliding
function sliding(){
    setInterval(initial, 3500);
}

//Initial
function initial(){
    var img =  document.getElementById('master');
    img.style.backgroundImage = "url(" + slideArr[index++%slideArr.length].img + ")";
}

//left-arrow
function left(){
    if(index>0){
        document.getElementById('master').style.backgroundImage = "url(" + slideArr[--index % slideArr.length].img + ")";
    }
}

//right-arrow
function right(){
    if(index<slideArr.length-1){
       
        document.getElementById('master').style.backgroundImage = "url(" + slideArr[++index % slideArr.length].img + ")";
    }
}

function numOfPage(postArr){
    let page =  Math.round(postArr.length/4) ;
    if(page === 0 && postArr.length!=0)
    page = 1 ;
    let pages = `` ;
    for(let i=0;i<page;i++){
        pages+=`<div class="pageStyle" id="page${i}" onclick="changePage(${i})">${i+1}</div>`
    }

    document.getElementById("pagination").innerHTML = pages ;
}

function changePage(pageIndex){
    pageNo = pageIndex
    post(pageNo,filterPost) ;
    selectPageBgColor(pageNo,filterPost) ;
}

// function changePageByClick(page)

function selectPageBgColor(index,postArr){
    if(postArr.length){
        let selectPage = document.getElementById(`page${index}`) ;
        selectPage.style.backgroundColor = '#667eea' ;
        selectPage.style.color = 'white' ;
    
        let page = Math.round(postArr.length/4) ;
        if(page === 0 && postArr.length!=0)
        page = 1 ;
        for(let i=0;i<page;i++){
           
            if(i === index)
            continue;
            let otherPage = document.getElementById(`page${i}`) ;
            otherPage.style.backgroundColor = '#f6f9fd' ;
            otherPage.style.color = '#4c51bf' ;
        
        }
    }
   
}

function post(index,postArr) {

    let allPost = ''
    let row = '' ;
  

    if(postArr.length){
        for(let i=index*4;i<index*4+4;i++)
        {
            if(i>=postArr.length){
                row +=`<div class="row row-mobile">${allPost}</div>` ;
                break;
            }
    
            const d = new Date(postArr[i].datetime) ;
          
    
            allPost+=`<div class="col col-mobile"><div class="col-a" id="demo" style="background-image: url(${postArr[i].img});">
                <div class="travel"> lifestyle </div>
            </div>
            <div class="content">
                <h2 class="article-heading">${postArr[i].title}</h2>
                <div class="date-comment">
                    <p class="date">${d.toString().substring(0,24)} / : ${postArr[i].author}</p>
                    <p class="comment">${postArr[i].comment_count} comments</p>
                </div>
                <p class="desc">
                    ${postArr[i].desc}
                </p>
            </div></div>`
    
          
            if(i%2 === 1 && i!=0)
            {
                row +=`<div class="row row-mobile">${allPost}</div>` ;
                allPost = '' ;
            
            }
            
        }
    
       
    }
    document.getElementById('all-article').innerHTML = row ;
   
}

function search(){
    let searchBox = document.getElementById('search-box') ;
    let searchKey = searchBox.value ;
    filterPost = []

    postArr.forEach(item=>{
        if(item.title.toLowerCase().search(searchKey.toLowerCase())!=-1 ||item.desc.toLowerCase().search(searchKey.toLowerCase())!=-1){
            filterPost.push(item);
        }
     
    })

    post(pageNo,filterPost) ;
    numOfPage(filterPost) ;
    selectPageBgColor(pageNo,filterPost) ;
    
}


