import ES from 'elasticsearch';
import cuid from 'cuid';

let DB = null;
export const getDB = () => {
  if (!DB) {
    DB = new ES.Client({
      host: 'localhost:9200',
      log: 'error'
    });
  }
  return DB;
}

export const insetOneToBD = async ({
  index,
  id,
  body
}) => {
  try {
    const resp = await DB.create({
      index,
      type: 'data',
      id: id || cuid(),
      body
    });
    return {
      res: 'success',
      msg: resp
    }
  } catch (err) {
    return {
      res: 'error',
      msg: err
    }
  }
}

export const getOneToBD = async ({
  index,
  id
}) => {
  try {
    const resp = await DB.get({
      index,
      type: 'data',
      id
    });
    const _source = _get(resp, ['_source'], null);
    if (_source) return {
      res: 'success',
      msg: _source
    };
    return {
      res: 'error',
      msg: '获取失败'
    };
  } catch (err) {
    return {
      res: 'error',
      msg: err
    }
  }
}

export const deleteOneFromBD = async ({
  index,
  id
}) => {
  try {
    const resp = await DB.delete({
      index,
      type: 'data',
      id
    });
    
    return {
      res: 'success',
      msg: resp
    };
  } catch (err) {
    return {
      res: 'error',
      msg: err
    };
  }
}

export const updateOneInDB = async ({
  index,
  id,
  doc
}) => {
  try {
    const resp = await DB.update({
      index,
      type: 'data',
      id,
      body: { doc }
    });
    return {
      res: 'success',
      msg: resp
    };
  } catch (err) {
    return {
      res: 'error',
      msg: err
    };
  }
}