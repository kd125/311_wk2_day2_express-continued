const comments = require("../data/comments");

module.exports = {
  list: (req, res) => res.json(comments),
  show: (req, res) =>
    res.json(comments.find((comment) => comment._id == req.params.id)),
  create: (req, res) => {
    const comment = {
      _id: comments.length + 1,
      ...req.body,
    };
    comments.push(comment);
    res.json(comment);
  },
};
