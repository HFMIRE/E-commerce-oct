const Item = require(".../model/Item");

module.exports.items = (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
};

module.exports.post_item = (req, res) => {
    const newItem = 
}