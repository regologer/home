
let videos = document.querySelectorAll('.video')

window.addEventListener('scroll', ()=>
{
    var scrollPosition = window.scrollY;
    deleting()
    videos.forEach((video)=>{
        var y = video.offsetTop;
        
        if(y < scrollPosition + 300)
        {
            video.classList.add('active')
        }
    })

})

function deleting(){
    videos.forEach(video =>{
        video.classList.remove('active')
    })
}