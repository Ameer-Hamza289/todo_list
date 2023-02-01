
import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import {useState} from 'react';
import AddItem from './Components/AddItem';
function App() {
  const products=[{
    price:100000,
    name: "Iphone 10S max",
    quantity: 0,
  },
  {
    price:60000,
    name: "Redmi 10 Pro",
    quantity: 0,
  },
  ];
  let  [productList , setProductList]=useState(products);
  let  [totalAmount ,setTotalAmount ]=useState(0);

 
  const incrementQuantity=(index)=>{
    let newProductList=[...productList];
    let newTotalAmount=totalAmount;
    newProductList[index].quantity++;
    newTotalAmount+= newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount)
  };
  const decrementQuantity=(index)=>{
    let newProductList=[...productList];
    let newTotalAmount=totalAmount;
    if(newProductList[index].quantity > 0 ){ 
      newProductList[index].quantity--;
      newTotalAmount-= newProductList[index].price;
    }else{ newProductList[index].quantity=0} ;
    setTotalAmount(newTotalAmount)
    setProductList(newProductList);
  };
  const ResetQuantity=()=>{
    let newProductList=[...productList];
    newProductList.map((products)=>{
      products.quantity=0;
      
    })
    setProductList(newProductList);
    setTotalAmount(0);
  }
  // const removeItem=(index)=>{
  //   let newProductList=[...productList];
  //   let newTotalAmount=totalAmount;
  //   newProductList.splice(index,1);
  //   newTotalAmount-=newProductList[index].quantity*newProductList[index].price;
  //   setProductList(newProductList);
  //   setTotalAmount(newTotalAmount)
  // }
  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  // const addItem=(name,price)=>{
  //   let newProductList = [...productList];
  //   let newTotalAmount = totalAmount;
  //   newProductList.push(
  //     name=name,
  //     price=price,
  //     quantity=0,
  //   );
  //   setProductList(newProductList);
  // }
  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  return (
   <>
   <Navbar></Navbar>
   <main className='container mt-5'>
    <AddItem  addItem={addItem}/>
   <ProductList 
   productList={productList}
   incrementQuantity={incrementQuantity}
   decrementQuantity={decrementQuantity}
   removeItem={removeItem}

   ></ProductList>
   </main>
  
   <Footer totalAmount={totalAmount} ResetQuantity={ResetQuantity}></Footer>
   </>
  );
}

export default App;
