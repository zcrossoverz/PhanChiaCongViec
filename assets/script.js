const btnJob = document.querySelector('#n');
const btnUs = document.querySelector('#nguoi');
const job = document.querySelector('.job');
const user = document.querySelector('.user');
const popup = document.querySelector('#popup');
const main = document.querySelector('#main');
const title_popup = document.querySelector('#title_popup');
const content_popup = document.querySelector('#content_popup');
const method = document.querySelector('#method');
const inp = document.querySelector('#inp');
const act = document.querySelector('#act');
function c(e){
    let textnode = document.createTextNode(e);
    let temp = document.createElement('p');
    temp.className = 'jobItem';
    temp.appendChild(textnode);
    if(document.querySelector('#method').innerText==1) job.appendChild(temp);
    else user.appendChild(temp);
}

document.querySelector('#submit_popup').addEventListener('click',()=>{
    c(inp.value);
    popup.style = 'display:none';
    main.style = 'display:block';
});
act.addEventListener('click', ()=>{
    act.classList.toggle('active');
});
let cancer = ()=>{
    document.querySelector('#cancer_popup').addEventListener('click',()=>{
        popup.style = 'display:none';
        main.style = 'display:block';
    });

}

btnJob.addEventListener('click',()=>{
    method.innerText = 1;
    title_popup.innerText = 'Them cong viec';
    content_popup.innerText = 'Nhap cong viec';
    popup.style = 'display:block';
    main.style = 'display:none';
    cancer();
});
btnUs.addEventListener('click',()=>{
    method.innerText = 2;
    title_popup.innerText = 'Them nguoi tham gia';
    content_popup.innerText = 'Nhap ten';
    popup.style = 'display:block';
    main.style = 'display:none';
    cancer();
});