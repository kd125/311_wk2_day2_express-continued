const vehicles = require("../data/vehicles");

module.exports = {
  list: (req, res) => res.json(vehicles),
  show: (req, res) =>
    res.json(vehicles.find((vehicle) => vehicle._id == req.params.id)),
  create: (req, res) => {
    const vehicle = {
      _id: vehicles.length + 1,
      ...req.body,
    };
    vehicles.push(vehicle);
    res.json(vehicle);
  },
};
