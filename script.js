document.addEventListener("DOMContentLoaded", () => {

    // Create Post
    const postBtn = document.querySelector("section button");
    const textarea = document.querySelector("textarea");
    const feedSection = document.querySelectorAll("section")[2];

    postBtn.addEventListener("click", () => {

        const postText = textarea.value.trim();

        if(postText === ""){
            alert("Please enter a post!");
            return;
        }

        const postDiv = document.createElement("div");

        postDiv.innerHTML = `
            <h3>Gopika</h3>
            <p>${postText}</p>

            <button class="like-btn">👍 Like</button>
            <span class="like-count">0 Likes</span>

            <h4>Comments</h4>
            <ul></ul>

            <input type="text" class="comment-input"
                   placeholder="Add a comment">
            <button class="comment-btn">Comment</button>
        `;

        feedSection.appendChild(postDiv);

        textarea.value = "";

        addLikeFunction(postDiv);
        addCommentFunction(postDiv);
    });

    // Existing Posts
    document.querySelectorAll("div").forEach(post => {
        addLikeFunction(post);
        addCommentFunction(post);
    });

});

// Like Function
function addLikeFunction(post){

    const likeBtn = post.querySelector(".like-btn") ||
                    post.querySelector("button");

    const likeCount = post.querySelector(".like-count") ||
                      post.querySelector("span");

    if(!likeBtn || !likeCount) return;

    let likes = parseInt(likeCount.textContent) || 0;

    likeBtn.addEventListener("click", () => {
        likes++;
        likeCount.textContent = likes + " Likes";
    });
}

// Comment Function
function addCommentFunction(post){

    const commentBtn = post.querySelector(".comment-btn");
    const commentInput = post.querySelector(".comment-input");
    const commentList = post.querySelector("ul");

    if(!commentBtn || !commentInput || !commentList) return;

    commentBtn.addEventListener("click", () => {

        const commentText = commentInput.value.trim();

        if(commentText === "") return;

        const li = document.createElement("li");
        li.textContent = commentText;

        commentList.appendChild(li);

        commentInput.value = "";
    });
}
