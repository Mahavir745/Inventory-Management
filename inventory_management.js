//todo: Product Class

class Product {
  constructor(id,name,price,expiry_date,quantity,category,supplier){
    this.id = id;
    this.name = name;
    this.price = price;
    this.expiry_date = expiry_date;
    this.quantity = quantity;
    this.category = category;
    this.supplier = supplier;
  }
}

//todo: Category Class

class Category{
  constructor(name){
    this.name = name;
    this.subcategories = [];
  }

  addSubcategory(subcategory){
    this.subcategories.push(subcategory)
  }
}

//todo: Supplier class

class Supplier {
  constructor(name,contactInfo){
    this.name = name;
    this.contactInfo = contactInfo;
    this.products = [];
  }

  addProduct(product){
    this.products.push(product)
  }
}


//todo: Inventory system Management

class InventorySystemManagement{
  constructor(){
    this.products = [];
  }

  addProduct(id,name,price,expiry_date,quantity,category,supplier){
    const product = new Product(id,name,price,expiry_date,quantity,category,supplier)
    this.products.push(product);
  }

  getProductDetails(name) {
    const product = this.products.find((items)=>{
      return items.name.toLowerCase() === name.toLowerCase();
    })

    if(product){
      console.log(product)
    }
    else{
      console.log("Product not found. Try again!")
    }
  }
}


const supplier1 = new Supplier("Mahavir", "7870767196");
const category1 = new Category("Electronics");

category1.addSubcategory("Mobile");
category1.addSubcategory("Laptop");

const inventorySystem = new InventorySystemManagement();
inventorySystem.addProduct(1,'phone',999.99, '01-01-2025',100,category1,supplier1)
supplier1.addProduct(category1.name)
inventorySystem.getProductDetails('phone')

