//const questions = document.querySelectorAll('.question');

// questions.forEach(function (params) {
//     // console.log(params);
//     const btn = params.querySelector('.question-btn'); //we didnt use document on the querySelector here, 
//     //becos we dont need access to the whole document, we want to access only the article 
//     // console.log(btn);
//     btn.addEventListener('click', () => {

//         //This function will prevent viewing another question when another one is opened.
//         questions.forEach((item) => {
//             if(item !== params){
//                 item.classList.remove('show-text');
//             }
//         });

//         params.classList.toggle('show-text'); //This was done first 
//     });
// });


// METHOD II - Traversing the DOM (uisng selectors inside the element)
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    });
});
