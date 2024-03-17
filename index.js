const posts = [];
const date = getUserTime(new Date());
const titleLimit = 100;
const textLimit = 200;


const inputTitleNode = document.querySelector('.js-input-title');
const inputTextNode = document.querySelector('.js-input-text');
const btnNode = document.querySelector('.js-btn');
const postsNode = document.querySelector('.js-posts');
const validationMessage = document.getElementById('validationMessage');

btnNode.addEventListener('click', function () {
    const postFromUser = getPostFromUser();

    addPost(postFromUser);

    renderPosts();

    inputTextNode.value = ' ';
    inputTitleNode.value = ' ';
    validation();
});

inputTitleNode.addEventListener('input', function(){
    validation();
}
);

inputTextNode.addEventListener('input', function () {
        validation();
});

function getInputValue() {
    const title = inputTitleNode.value.trim();
    const text = inputTextNode.value.trim();
    return { title, text };
}

function validation() {
    const { title, text } = getInputValue();

    if (title.length === 0) {
        validationMessage.innerText = 'Заголовок не может быть пустым.';
        validationMessage.classList.remove('validationMessage_hidden');
        btnNode.setAttribute('disabled', true);
        return;
    }

    if (text.length === 0) {
        validationMessage.innerText = 'Пост не может быть пустым.';
        validationMessage.classList.remove('validationMessage_hidden');
        btnNode.setAttribute('disabled', true);
        return;
    }

    if (title.length > titleLimit) {
        validationMessage.innerText = `Максимум символов ${titleLimit}. Лимит символов заголовка превышен на ${title.length - titleLimit} .`;
        validationMessage.classList.remove('validationMessage_hidden');
        btnNode.setAttribute('disabled', true);
        return;
    }

    if (text.length > textLimit) {
        validationMessage.innerText = `Максимум символов ${textLimit}. Лимит символов поста превышен на ${text.length - textLimit} .`;
        validationMessage.classList.remove('validationMessage_hidden');
        btnNode.setAttribute('disabled', true);
        return;
    }

    validationMessage.classList.add('validationMessage_hidden');
    btnNode.removeAttribute('disabled');
}




function getPostFromUser() {
    const { title, text } = getInputValue();

    return {
        title: title,
        text: text,
    };
};

function addPost({title, text}) {
    posts.push({
     title,
     text,
     date: getUserTime(new Date()),
    });
 }
;

function getPosts() {
    return posts;
}

function renderPosts() {
    const posts = getPosts();

    let postsHTML = '';

    posts.forEach(post => {
        postsHTML += `
            <div class='post'>
                <div class='post__date'>${post.date}</div>
                 <p class='post__title'>${post.title} </p>
                <p class='post__text'>${post.text} </p>
            </div>
            `;
    });

    postsNode.innerHTML = postsHTML; 
}


function addLeadingZero(d) {
  return ( d < 10) ? '0' + d : d;
}
function getUserTime(t) {
    let Y = t.getFullYear();
    let M = addLeadingZero(t.getMonth() + 1);
    let D = addLeadingZero(t.getDate());
    let H = addLeadingZero(t.getHours());
    let m = addLeadingZero(t.getMinutes());
    return `${D}.${M}.${Y} ${H}:${m}` 
}