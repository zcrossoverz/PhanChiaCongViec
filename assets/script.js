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
const start = document.querySelector('#start');
const rs = document.querySelector('.results');
let jobs = [], users = [];
let result = [];
function c(e){
    let textnode = document.createTextNode(e);
    let temp = document.createElement('p');
    temp.className = 'Item';
    temp.appendChild(textnode);
    if(document.querySelector('#method').innerText==1){
        job.appendChild(temp);
        jobs.push(e);
    }else{
        user.appendChild(temp);
        users.push(e);
    } 
}
function cx(e,i){
    let ts = document.createTextNode(e+' - '+i);
    let dc = document.createElement('p');
    dc.className = 'Item';
    dc.appendChild(ts);
    rs.appendChild(dc);
}
document.querySelector('#submit_popup').addEventListener('click',()=>{
    c(inp.value);
    inp.value = '';
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
    inp.value = '';
}

btnJob.addEventListener('click',()=>{
    method.innerText = 1;
    title_popup.innerText = 'Thêm công việc';
    content_popup.innerText = 'Nhập công việc';
    popup.style = 'display:block';
    main.style = 'display:none';
    cancer();
});
btnUs.addEventListener('click',()=>{
    method.innerText = 2;
    title_popup.innerText = 'Thêm người tham gia';
    content_popup.innerText = 'Nhập tên';
    popup.style = 'display:block';
    main.style = 'display:none';
    cancer();
});
start.addEventListener('click',()=>{
    if(users.length >= jobs.length){
        while(jobs.length>0){
            let x = Math.floor(Math.random()*users.length);
            cx(users[x],jobs.pop());
            users.splice(x,1);
        }
    }else{
        while(users.length>0){
            let x = Math.floor(Math.random()*jobs.length);
            cx(users.pop(),jobs[x]);
            jobs.splice(x,1);
        }
    }
    document.querySelector('#result').classList.toggle('active');
    document.querySelector('#container').classList.toggle('notactive');
});

