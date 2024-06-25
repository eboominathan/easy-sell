import Card from "./components/card";

 
export default function Home() {
  const products = [
    {
      id:0,
      name:"Mushroom Orange",
      description:"Mushroom Orange desc",
      price:40,
      imageUrl:"mus.jpg"
    },
    // { 
    //   id:1,
    //   name:"Mushrrom Red",
    //   description:"Mushroom OrangRede desc",
    //   price:40,
    //   imageUrl:"mus.jpg"
    // },
    // {
    //   id:2,
    //   name:"Mushrrom Green",
    //   description:"Mushroom Green desc",
    //   price:40,
    //   imageUrl:"mus.jpg"
    // }
  ]
  return (
    <main className="min-h-screen mx-auto max-w-[100rem]">
      { products && products.map(product => (
        <Card key={`${product.id}-${product.id}`} {...product}/>
      ))
      }
      
    </main>
  );
}
