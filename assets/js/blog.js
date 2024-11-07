
// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement=document.querySelector('main');
const backButton=document.getElementById('back');
// TODO: Create a function that builds an element and appends it to the DOM
function createAndAppendElement(elementType, content, container){
    const element= document.createElement(elementType);
    element.textContent= content;
    container.appendChild(element);
}


// TODO: Create a function that handles the case where there are no blog posts to display
function noBlogPosts(container){
    createAndAppendElement('p','No Blog posts yet...', container)
}


// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList(){
    const blogPosts= readLocalStorage('blogPosts');
    mainElement.innerHTML=''

    if (blogPosts.length===0) {
        noBlogPosts(mainElement);
        return;
        
    }

    blogPosts.forEach(post => {
        const postContainer= document.createElement('div');
        postContainer.classList.add('blog-post')
    

    createAndAppendElement('h3', post.title, postContainer); 
    createAndAppendElement('p', `By: ${post.username}`, postContainer);
    createAndAppendElement('p', post.content, postContainer);
    
    mainElement.appendChild(postContainer); 
    });
}

document.addEventListener('DOMContentLoaded', renderBlogList);

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

backButton.addEventListener('click', () => {
    redirectPage('index.html');
});


// function readLocalStorage(key) {
//     const data = localStorage.getItem(key);
//     return data ? JSON.parse(data) : [];
// }