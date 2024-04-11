document.addEventListener('DOMContentLoaded', () => {
    let tab = function(){
        let tabNav = document.querySelectorAll('.tabs__nav-item'),
            tabContent = document.querySelectorAll('.tab'),
            tabName;
    
            tabNav.forEach( item => {
                item.addEventListener('click', selectTabNav )
            });
    
            function selectTabNav(){
                tabNav.forEach(item => {
                    item.classList.remove('is-active');
                });
                this.classList.add('is-active');
                tabName = this.getAttribute('data-tab-name');
                selectTabContent(tabName);
            }
    
            function selectTabContent(tabName){
                tabContent.forEach(item => {
                    item.classList.contains(tabName)? item.classList.add('is-active') : item.classList.remove('is-active');
                });
            }
    }; 
    tab();
    
    const pagination = document.querySelector('.pagination');
const prevBtn = pagination.querySelector('#prev');
const nextBtn = pagination.querySelector('#next');
let currentPage = pagination.querySelector('.active');

// Function to handle page navigation
function goToPage(page) {
    // Update active class
    currentPage.classList.remove('active');
    pagination.children[page].classList.add('active');
    currentPage = pagination.querySelector('.active');

    // Simulate fetching data for the page
    console.log("Fetching data for page", page + 1);
}

// Event listeners for previous and next buttons
prevBtn.addEventListener('click', () => {
    const prevPageIndex = parseInt(currentPage.innerText) - 2;
    if (prevPageIndex >= 0) {
        goToPage(prevPageIndex);
    }
});

nextBtn.addEventListener('click', () => {
    const nextPageIndex = parseInt(currentPage.innerText);
    if (nextPageIndex < pagination.children.length - 2) {
        goToPage(nextPageIndex);
    }
});

// Event listener for left and right arrow keys
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        prevBtn.click();
    } else if (event.key === 'ArrowRight') {
        nextBtn.click();
    }
});

// Dynamically add remaining pages
const totalPages = 40; // Assuming total pages are 40
for (let i = 5; i <= totalPages; i++) {
    const page = document.createElement('li');
    page.innerText = i;
    page.classList.add('hidden'); // Initially hide all pages beyond 4
    pagination.insertBefore(page, nextBtn);
    page.addEventListener('click', () => {
        goToPage(i - 1);
    });
}





});