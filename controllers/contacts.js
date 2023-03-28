const contacts = require("../data/contacts");

module.exports = {
  list: (req, res) => res.json(contacts),
  show: (req, res) =>
    res.json(contacts.find((contact) => contact._id == req.params.id)),
  create: (req, res) => {
    const contact = {
      _id: contacts.length + 1,
      ...req.body,
    };
    contacts.push(contact);
    res.json(contact);
  },
};
