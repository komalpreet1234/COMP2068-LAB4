const viewPath = ('products');
const Product = require('../models/product');

exports.show = async (req, res) => {
  // Creating product variable using id
  const product = await Product.findById(req.params.id);
  // rendering data product to show view
  res.render(`${viewPath}/show`, {
    pageTitle: 'Show Product',
    product: product
  });
};

exports.new = (req, res) => {
  res.render(`${viewPath}/new`, {
    pageTitle: 'New Product'
  });
};

exports.create = async (req, res) => {
  try{
   // creating product using body passed
    const product = await Product.create(req.body)
     res.redirect(`/products/${product.id}`);
    }
    catch(error){
      console.error(`error: ${error}`);
    }
};

