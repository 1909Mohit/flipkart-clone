

import { products } from './constants/data.js'
import Product from './model/product-schema.js';

const DefaultData = async () => {
    try {
        products.forEach(async (product) => {
            const found = Product.findOne({ id: product.id })
            if (!found) {
                const newProduct = new Product(product);
                await newProduct.save();
            }
        })
        // const newProducts = await Product.insertMany(products);
        console.log('Data imported Successfully');
    } catch (error) {
        console.log('Error while inserting default data', error.message);
    }
}

export default DefaultData;