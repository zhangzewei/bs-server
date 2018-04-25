import getDB from '../utils/connectDB';

const DB = getDB();

DB.indices.create({
  index: 'user',
})