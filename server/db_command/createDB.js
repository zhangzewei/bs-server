import { getDB } from '../utils/dbUtils';

const DB = getDB();

DB.indices.create({
  index: 'user',
})