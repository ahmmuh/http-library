const http = new easyHTTP();

// GET multi POSTS
http.get("https://jsonplaceholder.typicode.com/posts", function(posts) {
  console.log(posts);
});

// get singel post
http.get("https://jsonplaceholder.typicode.com/posts/1", function(post) {
  console.log(post);
});

// post method

const data = {
  title: "The new customer post",
  body: "Custom post body Custom post body Custom post body Custom post body"
};

// create post
http.post("https://jsonplaceholder.typicode.com/posts", data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(`${post}`);
  }
});

// update post (put method)

http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// delete post

http.delete("https://jsonplaceholder.typicode.com/posts/1", function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
