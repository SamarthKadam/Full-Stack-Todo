export const statusSeek=(message,status)=>{
    const cover=document.querySelector('.Back');
    
    let html;
    if(status==='fail')
    {
     html=`<div class="popUP red"><div class="Text">${message}</div><div class="Png">⚠️</div></div>`;
    }
    else{
        html=`<div class="popUP green"><div class="Text">${message}</div><div class="Png">✅</div></div>`
    }
    
    cover.insertAdjacentHTML('beforebegin',html);

    setTimeout(()=>{
        const item=document.querySelector('.popUP');
        item.remove();
    },1500)
}