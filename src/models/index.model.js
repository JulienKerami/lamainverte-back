const User = require('./user.model');
const Zone = require('./zone.model');
const Task = require('./task.model');
const Vegetable = require('./vegetable.model');


/**** User <> Zone One-to-Many ****/

User.hasMany(Zone, {
  as: 'zone',
  foreignKey: 'user_id'
}),

Zone.belongsTo(User, {
  foreignKey: 'user_id'
});


/**** Task <> Vegetables One-to-Many */


module.exports = {User, Zone, Task, Vegetable};