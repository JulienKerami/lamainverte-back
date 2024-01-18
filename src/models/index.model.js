const User = require('./user.model');
const Zone = require('./zone.model');
const Task = require('./task.model');
const Vegetable = require('./vegetable.model');
const Family = require('./family.model');


/**** User <> Zone One-to-Many ****/

User.hasMany(Zone, {
  as: 'zone',
  foreignKey: 'user_id'
}),

Zone.belongsTo(User, {
  foreignKey: 'user_id'
});

/**** Family <> Vegetables One-to-Many */

Family.hasMany(Vegetable, {
  as: 'vegetable',
  foreignKey: 'family_id'
}),

Vegetable.belongsTo(Family, {
  foreignKey: 'family_id'
});


/**** Zone <> Vegetables One-to-Many */

Zone.hasMany(Vegetable, {
  as: 'vegetable',
  foreignKey: 'zone_id',
  onDelete: 'CASCADE'
}),

Vegetable.belongsTo(Zone, { 
  foreignKey: 'zone_id',
  onDelete: 'CASCADE'
});


/**** Vegetable <> task One-to-Many */
Vegetable.hasMany(Task, {
  as: 'task',
  foreignKey: 'vegetable_id',
  onDelete: 'CASCADE'
}),

Task.belongsTo(Vegetable, { 
  foreignKey: 'vegetable_id',
  onDelete: 'CASCADE'
});




module.exports = {User, Zone, Task, Vegetable, Family};