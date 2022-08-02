# React Coding Challenge

Talking with APIs and rendering their data is a large part of our daily role. This challenge consists of making a request to an endpoint containing posts and rendering those posts onto the screen in a readable form. We have taken care of the styling for you, but your job is to make the request, pass in the relevant information to the PostItem component, and render all the posts onto the screen.

You can use any third party library or resource you see fit during this challenge. The components and styling can be adjusted if need be.

Requirements:

* Make a request to `https://jsonplaceholder.typicode.com/posts` when the page loads.
  * Create a function inside `utils/requests.js` that will handle this API call. 
  * NOTE: Do not expose the API URL inside the App component!
* Render the posts returned from the API inside the App component where the `Posts go here` comment is.
* Wire up the form to make a POST request to `https://jsonplaceholder.typicode.com/posts`. The body for this request should be as such:

```
{
  title: string,
  body: bar,
  userId: number,
}
```
* *Assume for this that you are the user with ID 1*