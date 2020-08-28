let ProductModel = require('../models/Product');

exports.homepage = (req, res) => {
    ProductModel.all()
        .then((data) => {
            let products =  data;
            res.render('pages/homepage', {products: products});
        })
    
}

exports.about = (req, res) => {
    res.render('pages/about-us');
}

exports.crear = (req, res) => {
    res.render('pages/crear-producto');
  }

exports.producto = (req, res) =>{
    res.render('pages/productos');
}


  
  exports.store = (req, res) => {
    // Crea un objeto con la información del usuario
    let product = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description
    };
    // Crea el producto
    ProductModel.create(product)
      .then((id) => {
        // Al finalizar la creación, reenvía al usuario a la página
        // inicial
        res.redirect('/');
      });
  }

  // Muestra el producto
exports.producto = (req, res) => {
    // Obtiene el id que viene en la url
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    ProductModel.find(id).then((product) => {
      // Si el producto no existe entonces
      if (product == null) {
        // Regresa el error 404
        res.status(404).send('Not found');
        return;
      }
      // Si el producto existe entonces muestra la vista products/show.hbs
      // con la información del producto
      res.render('pages/productos', {product: product});
    });
  }

  exports.editar = (req, res) => {
    // Obtiene el id que viene en la url
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    ProductModel.find(id).then((product) => {
      // Si el producto no existe entonces
      if (product == null) {
        // Regresa el error 404
        res.status(404).send('Not found');
        return;
      }
      // Si el producto existe entonces muestra la vista products/edit.hbs
      // con la información del producto
      res.render('pages/editar', {product: product});
    });
  }

  exports.update = (req, res) => {
        // Obtiene el id que viene en la url
        let id = req.params.id;
        // Busca dentro de la base de datos el producto con el id indicado
        ProductModel.find(id).then((product) => {
          // Si el producto no existe entonces
          if (product == null) {
            // Regresa el error 404
            res.status(404).send('Not found');
            return;
          }
      
          // Define los datos del producto actualizado
          let updateProduct = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
          }
      
          // Actualiza los datos del producto
          ProductModel.update(product.id, updateProduct)
            .then((id) => {
              // Al terminar redirige el índice
              res.redirect('/');
            });
        });
      }

      exports.delete = (req, res) => {
        // Obtiene el id que viene en la url
        let id = req.params.id;
        // Busca dentro de la base de datos el producto con el id indicado
        ProductModel.find(id).then((product) => {
          // Si el producto no existe entonces
          if (product == null) {
            // Regresa el error 404
            res.status(404).send('Not found');
            return;
          }
          // Elimina los datos del producto
          ProductModel.delete(product.id)
            .then((id) => {
              // Al terminar redirige el índice
              res.redirect('/');
            });
        });
      }