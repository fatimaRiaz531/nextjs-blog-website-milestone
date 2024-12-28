// /pages/api/createComment.js
import { previewClient } from '../../lib/sanity';

export default async function createComment(req, res) {
  const { name, email, comment, postId } = JSON.parse(req.body);

  try {
    await previewClient.create({
      _type: 'comment',
      name,
      email,
      comment,
      post: {
        _type: 'reference',
        _ref: postId,
      },
    });
    return res.status(200).json({ message: 'Comment submitted' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Couldn't submit comment", err });
  }
}