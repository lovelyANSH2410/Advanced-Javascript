// Simulating the database with posts and user data
let posts = [];
let lastActivityTime = null;

// Function to create a post
function createPost(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.push(post);
            resolve(posts);
        }, 1000);
    });
}

// Function to update the last user activity time
function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

// Function to delete a post
function deletePost(postIndex) {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.splice(postIndex, 1);
            resolve(posts);
        }, 1000);
    });
}

// Main logic
async function main() {
    try {
        // Create a post
        const createdPosts = await createPost("New Post");

        // Update last user activity time
        const updatedActivityTime = await updateLastUserActivityTime();

        // Log posts and lastActivityTime
        console.log("Posts:", createdPosts);
        console.log("Last Activity Time:", updatedActivityTime);

        // Delete the last post
        const deletedPosts = await deletePost(createdPosts.length - 1);

        // Log remaining posts
        console.log("Remaining Posts:", deletedPosts);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Run the main logic
main();
