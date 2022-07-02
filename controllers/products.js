

const getAllProductsStatic = (req,res)=>{
    res.send("All products static")
}


const getAllProducts = (req,res)=>{
    res.send("All products")
}

const addProducts = (req,res)=>{
    res.send("Add products")
}

module.exports = {
                    getAllProducts,
                    addProducts,
                    getAllProductsStatic
                }