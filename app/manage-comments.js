// /pages/manage-comments.js
import { useEffect, useState } from 'react';
import { client } from '../lib/sanity';

const ManageComments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const allComments = await client.fetch(`*[_type == "comment"]`);
      setComments(allComments);
    };
    fetchComments();
  }, []);

  const deleteComment = async (commentId) => {
    // Check if the comment is approved
    const comment = comments.find(c => c._id === commentId);
    if (!comment.approved) {
      alert("You cannot delete this comment until it is approved.");
      return;
    }
    // Proceed with deletion
    await fetch(`/api/deleteComment/${commentId}`, { method: 'DELETE' });
    setComments(comments.filter(c => c._id !== commentId)); // Update state
  };

  return (
    <div>
      <h1>Manage Comments</h1>
      <ul>
        {comments.map(({ _id, name, comment, approved }) => (
          <li key={_id}>
            <strong>{name}</strong>: {comment} 
            <span>{approved ? ' (Approved)' : ' (Pending)'}</span>
            <button onClick={() => deleteComment(_id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageComments;