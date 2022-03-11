const express = require('express');
const router = express.Router();
const Validator = require("fastest-validator");
const v = new Validator();
const {
   Products
} = require('../models')

router.get('/', async (req, res) => {
   const id = req.query.id;
   if (id) {
      const product = await Products.findByPk(id)

      if (!product) {
         return res
            .status(404)
            .json({
               message: 'Product not found !'
            })
      }

      return res.send(product)
   }

   const products = await Products.findAll()
   res.send(products)

});



router.post('/', async (req, res) => {
   const schema = {
      name: 'string',
      brand: 'string',
      description: 'string|optional'
   }
   const validate = await v.validate(req.body, schema)
   // let f = []
   // validate.forEach(e => {
   //    f.push(e.message)
   // });
   // res.status(400).send(f)
   if (validate.length) {
      return res
         .status(400)
         .json(validate)
   }

   const product = await Products.create(req.body)
   res.send(req.body)
})



router.put('/?', async (req, res) => {
   const id = req.query.id;
   let product = await Products.findByPk(id);

   if (!product) {
      return res.status(404).json({
         message: "Product not found !"
      })
   }
   const schema = {
      name: 'string|optional',
      brand: 'string|optional',
      description: 'string|optional'
   }
   const validate = await v.validate(req.body, schema)
   if (validate.length) {
      return res
         .status(400)
         .json(validate)
   }

   product = await product.update(req.body)
   res.send(product)
})


router.delete('/:id', async (req, res) => {
   const id = req.params.id;
   const product = await Products.findByPk(id)
   if (!product) {
      return res.status(404).json({
         message: "Product not found !"
      })
   }

   let p = await product.destroy()
   res.json({
      message: "Product is deleted"
   })
})
module.exports = router;