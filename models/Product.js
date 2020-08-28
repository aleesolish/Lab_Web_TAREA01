const knex = require('../database/connection');
const knew = require('../database/connection');
const { producto } = require('../controllers/PagesController');

exports.all = () => {
    return knex
        .select('*')
        .from('products');
}

exports.create = (product) => {
    return knex('products')
      .insert({
        name: product.name,
        price: product.price,
        description: product.description
      });
  }

  exports.find = (id) => {
    return knex
      .select('*')
      .from('products')
      .where('id', id)
      .first();
  }

  exports.update = (id, product) =>{
      return knex('products')
      .update(product)
      .update('updated_at', knex.fn.now())
      .where('id',id)

  }

  exports.delete = (id) => {
    return knex('products')
      .delete()
      .where('id', id);
  }