import {
  getDB,
  getOneToBD,
  updateOneInDB,
  deleteByIds,
  getAllSubjects
} from '../utils/dbUtils';
import _get from 'lodash/get';

const DB = getDB();

export const addGood = async request => {
  try {
    const {
      name,
      tag,
      imgUrl,
      price,
      desc,
    } = request.payload;
    const resp = await DB.index({
      index: 'goods',
      type: 'data',
      body: {
        name,
        tag,
        imgUrl,
        price,
        desc,
        sellNum: 0,
      }
    });
    return {
      res: 'success',
      msg: resp,
    }
  } catch(err) {
    return {
      res: 'error',
      msg: err
    }
  }
}

export const getAllGoods = request => {
  const { filter } = request.payload;
  return getAllSubjects(filter, 'goods')
}

export const getGoodDetails = request => {
  const { goodId } = request.params;
  return getOneToBD({
    index: 'goods',
    id: goodId
  });
}

export const deleteGoods = request => {
  const { goodIds } = request.payload;
  return deleteByIds(goodIds, 'goods')
}

export const updateGood = request => {
  const { 
    goodId,
    name,
    tag,
    imgUrl,
    price,
    desc,
  } = request.payload;
  return updateOneInDB({
    index: 'goods',
    id: goodId,
    doc: {
      name,
      tag,
      imgUrl,
      price,
      desc,
    }
  });
}

export const addSellNum = request => updateOneInDB({
  index: 'goods',
  id: request.payload.goodId,
  doc: {
    sellNum: request.payload.sellNum + 1,
  }
});