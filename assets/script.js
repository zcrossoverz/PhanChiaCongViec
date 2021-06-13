const btnJob = document.querySelector('#n');
const btnUs = document.querySelector('#nguoi');
const job = document.querySelector('.job');
const popup = document.querySelector('#popup');
const main = document.querySelector('#main');
const title_popup = document.querySelector('#title_popup');
const content_popup = document.querySelector('#content_popup');
const inp = document.querySelector('#inp');
function c(e){
    let textnode = document.createTextNode(e);
    let temp = document.createElement('p');
    temp.className = 'jobItem';
    temp.appendChild(textnode);
    job.appendChild(temp);
}

let ok = (e)=>{
    document.querySelector('#submit_popup').addEventListener('click',()=>{
        
        document.querySelector('#submit_popup').disable = true;
        if(e){
          c(inp.value);
       }
    });
    
   
}
let cancer = ()=>{
    document.querySelector('#cancer_popup').addEventListener('click',()=>{
        popup.style = 'display:none';
        main.style = 'display:block';
    });

}

btnJob.addEventListener('click',()=>{
    title_popup.innerText = 'Them cong viec';
    content_popup.innerText = 'Nhap cong viec';
    popup.style = 'display:block';
    main.style = 'display:none';
    
    ok(true);
    cancer();
});
btnUs.addEventListener('click',()=>{
    title_popup.innerText = 'Them nguoi tham gia';
    content_popup.innerText = 'Nhap ten';
    popup.style = 'display:block';
    main.style = 'display:none';
    ok(false);
    cancer();
});