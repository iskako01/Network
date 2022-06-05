import profileReduser, { addPost } from "../redux/redusers/profileReduser";
import React from "react";

it("profile reduser:New post should be added", () => {
  //1.test data
  let action = addPost("new post");
  let state = {
    posts: [
      {
        id: "1",
        message: "Hi, What's up!",
        likesCount: 1,
      },
      {
        id: "2",
        message: "This is a good post!",
        likesCount: 4,
      },
    ],
  };
  //2.action
  let newState = profileReduser(state ,  action );
  //3.expection
  expect(newState.posts.length).toBe(3);
});

it("profile reduser:message of new post should be correct", () => {
	//1.test data
	let action = addPost("new post");
	let state = {
	  posts: [
		{
		  id: "1",
		  message: "Hi, What's up!",
		  likesCount: 1,
		},
		{
		  id: "2",
		  message: "This is a good post!",
		  likesCount: 4,
		},
	  ],
	};
	//2.action
	let newState = profileReduser(state ,  action );
	//3.expection
	expect(newState.posts[2].message).toBe('new post');
  });
