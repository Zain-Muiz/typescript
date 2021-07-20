'use strict';

import { DataTypes, Model, Optional, } from 'sequelize';
import  { sequelize }  from '.';

export interface UserAttributes {
  id ?: string;
  firstName: string | undefined ;
  lastName: string | undefined ;
  email ?: string;
  password ?: string;
  emailVerified ?: boolean ;
}

type UserCreationAttributes = Optional<UserAttributes, 'id'>;


export interface UserInstance
  extends Model <UserAttributes, UserCreationAttributes>,
     UserAttributes {
        id ?: string;
        firstName  : string | undefined ;
        lastName : string | undefined ;
        email ?: string;
        password ?: string;
        emailVerified ?: boolean  ;
    
    }
// }

const Users = sequelize.define<UserInstance>('Users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique : true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    emailVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

  }, {
    modelName: 'Users',
    timestamps: false,
  });

  console.log(Users === sequelize.models.Users)

export {Users} ;

