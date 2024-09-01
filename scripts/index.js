const getData = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    const allData = await res.json()
    const data = allData.posts
    // console.log(data);
    displayData(data)

}

const displayData = (data) => {
    const cardContainer = document.getElementById('card-container');
    data.forEach(post => {
        // console.log(post);
        // const isOnline = document.getElementById('active');
        // const activeStatus =post.isActive;
        // if(activeStatus){
        //     isOnline.classList.add('online')
        // }
        // else{
        //     isOnline.classList.add('offline')
        // }
        const card = document.createElement('div')
        card.classList = 'rounded-3xl flex p-10 gap-6 bg-[#F3F3F5] hover:bg-[#797DFC1A] hover:border-[#797DFC] hover:border'
        card.innerHTML = `
                        <div>
                            <div id="active" class="avatar">
                            <div class="w-16 rounded-3xl">
                            <img src="${post.image}"/>
                        </div>
                        </div>
                        </div>
                        <div class="space-y-4">
                            <div class="flex gap-7">
                     <p># <span>${post.category}</span></p>
                                <p>Author: <span>${post.author.name}</span></p>
                     </div>
                     <h1 class="text-xl font-semibold">${post.title}</h1>
                            <p>${post.description}</p>
                            <hr class="border-dashed border-2">
                            <div class="flex justify-between">
                            <div class="flex gap-5">
                            <div>
                 <i class="fa-regular fa-message"></i> <span>${post.comment_count}</span>
                </div>
                <div>
                    <i class="fa-regular fa-eye"></i> <span>${post.view_count}</span>
                    </div>
                    <div>
                    <i class="fa-regular fa-clock"></i> <span>${post.posted_time}</span>
                </div>
            </div>
         <div>
 <button onclick="readItem('${post.title}', '${post.view_count}')" class="btn btn-xs bg-[#10B981]"><i class="fa-regular fa-envelope-open text-white"></i></button>
 </div>
 </div>
 </div> `
        cardContainer.appendChild(card);
    })
}
const count = document.getElementById('count');
let clickCount = 0;

const readItem = (title, view) => {
    // console.log(title, view);
    const rightSideContainer = document.getElementById('right-side-container');
    const readCard = document.createElement('div')
    readCard.classList = 'p-4 flex items-center justify-between bg-white rounded-3xl'
    readCard.innerHTML = `
    <h3>${title}</h3>
        <div class="flex items-center">
            <i class="fa-regular fa-eye"></i> <span>${view}</span>
        </div>
    `
    rightSideContainer.appendChild(readCard);
    clickCount++;
    count.innerHTML = clickCount;
}

const getPostAll = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
    const allPost = await res.json()
    // console.log(allPost);
    displayPost(allPost)
}
const displayPost = (allPost) => {
    const postContainer = document.getElementById('post-container');
    allPost.forEach(post => {
        // console.log(post);
        const postCard = document.createElement('div');
        postCard.classList = 'p-6 space-y-4 w-full border rounded-3xl';
        postCard.innerHTML = `
        <img class="rounded-3xl" src="${post.cover_image
            }" alt="">
                    <p>${post.author?.posted_date || 'Date not found'}</p>
                    <h3 class="font-bold">${post.title}</h3>
                    <p>${post.description}</p>
                    <div class="flex gap-4">
                        <img class="w-12 rounded-full"
                            src="${post.profile_image}">
                        <div>
                            <h3 class="font-semibold">${post.author.name}</h3>
                            <p>${post.author?.designation || 'Not found'}</p>
                        </div>
                    </div>
        `
        postContainer.appendChild(postCard);
    })
}
const categoryData = async (inputText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${inputText}`)
    const AllData = await res.json()
    const data = AllData.posts
    // console.log(data);
    displayCategory(data)
}

const displayCategory = (data) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    data.forEach(type => {
        // console.log(type);
        
        const card = document.createElement('div')
        card.classList = 'rounded-3xl flex p-10 gap-6 bg-[#F3F3F5] hover:bg-[#797DFC1A] hover:border-[#797DFC] hover:border'
        card.innerHTML = `
                        <div>
                            <div class="avatar online">
                                <div class="w-16 rounded-3xl">
                                    <img src="${type.image}" />
                         </div>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <div class="flex gap-7">
                     <p># <span>${type.category}</span></p>
                                <p>Author: <span>${type.author.name}</span></p>
                     </div>
                     <h1 class="text-xl font-semibold">${type.title}</h1>
                            <p>${type.description}</p>
                            <hr class="border-dashed border-2">
                            <div class="flex justify-between">
                                <div class="flex gap-5">
                                    <div>
                 <i class="fa-regular fa-message"></i> <span>${type.comment_count}</span>
                </div>
                 <div>
                     <i class="fa-regular fa-eye"></i> <span>${type.view_count}</span>
                     </div>
                    <div>
                    <i class="fa-regular fa-clock"></i> <span>${type.posted_time}</span>
                </div>
            </div>
         <div>
 <button onclick="readItem('${type.title}', '${type.view_count}')" class="btn btn-xs bg-[#10B981]"><i class="fa-regular fa-envelope-open text-white"></i></button>
</div>
 </div>
 </div> `
        cardContainer.appendChild(card);

    })
}

const searchBtn = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    // console.log(inputText);
    categoryData(inputText);

}

getPostAll();
getData();