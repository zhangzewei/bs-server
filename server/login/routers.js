import * as controller from './controller';
import Joi from 'joi';

export default [
  {
    path: '/user/regist',
    method: 'POST',
    config: {
      handler: controller.register,
      tags: ['api'],
      validate: {
        payload: {
          acount : Joi.string()
                  .required(),
          password : Joi.string()
                  .required(),
        }
      }
    },
  },
  {
    path: '/user/login',
    method: 'POST',
    config: {
      handler: controller.logIn,
      tags: ['api'],
      validate: {
        payload: {
          acount : Joi.string()
                  .required(),
          password : Joi.string()
                  .required(),
        }
      }
    },
  },
  {
    path: '/user',
    method: 'DELETE',
    config: {
      handler: controller.deleteUser,
      tags: ['api'],
      validate: {
        payload: {
          acount : Joi.string()
                  .required(),
        }
      }
    },
  },
  {
    path: '/user/changePassword',
    method: 'POST',
    config: {
      handler: controller.changePassword,
      tags: ['api'],
      validate: {
        payload: {
          acount : Joi.string()
                  .required(),
          password : Joi.string()
                  .required(),
        }
      }
    },
  }
]