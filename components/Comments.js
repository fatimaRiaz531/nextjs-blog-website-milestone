"use client";

import { useState, ChangeEvent, FormEvent } from "react";

const Comment = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      setComments([...comments, `${name}: ${comment}`]);
      setName("");
      setComment("");
    }
  }

  return (
    <div className="bg-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold font-sans text-2xl my-4 text-white">
          Recent Comments
        </h2>
        <ul  className="space-y-2 list-disc pl-6 font-semibold cursor-pointer sm:text-base md:text-lg lg:text-xl">
          <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">
            Richard Joash on THE WORLD&apos;S FIRST SUPERCAR THAT SHOWS THE TRUE POWER OF SPEED
          </li>
          <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">
            Ed Hickman on Silent Bloc Ø10-75mm
          </li>
          <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">
            Diwa Alejandro Galvez on Silent Bloc Ø10-75mm
          </li>
          <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">
            Richard Joash on Silent Bloc Ø10-75mm
          </li>
          <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">
            Ed Hickman on THE WORLD&apos;S FIRST SUPERCAR THAT SHOWS THE TRUE POWER OF SPEED
          </li>
          <ul className="space-y-2 list-disc font-semibold">
          {comments.map((item, index) => (
            <li
              key={index}
              className="marker:text-orange-400 text-white hover:text-[#d67e1afd]"
            >
              {item}
            </li>
          ))}
        </ul>
        </ul>
       
      </div>
      <h1 className="text-white font-bold pt-20 text-5xl font-sans text-center sm:text-3xl md:text-4xl lg:text-5xl">
        LEAVE A COMMENT
      </h1>
      <div className="max-w-[600px] mt-10 space-y-10 pb-10">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="text-white font-bold">
              Name:
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              className="border-[#d67e1afd] border p-2 w-full rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="comment" className="text-white font-bold">
              Comment:
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={handleCommentChange}
              rows={5}
               className="border-[#d67e1afd] border p-2 w-full rounded-md sm:text-base md:text-lg lg:text-xl"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white text-lg font-mono px-10 py-5 bg-[#d67e1afd] hover:bg-[#121212] rounded-md"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comment;
