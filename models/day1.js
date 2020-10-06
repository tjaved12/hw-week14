// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines

// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Day1 = sequelize.define("Day1", {
    // The email cannot be null, and must be a proper email before creation
    breakfast: {
      type: DataTypes.STRING,
      allowNull: false,
     
    
    },
    // The password cannot be null
    lunch: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dinner:{
        type: DataTypes.STRING,
      allowNull: false
    },
    // createdAt: {
    //     type:DataTypes.Date,
    //     allowNull:true,
    //     defaultValue: sequelize.literal("NOW()")
    // },
    // updatedAt: {
    //         type:DataTypes.Date,
    //         allowNull:true,
    //         defaultValue: sequelize.literal("NOW()")
    // }
    
  });

  return Day1;
};
