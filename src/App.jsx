import React,{useState}from 'react'
import Card from './componets/Card'
import Header from './componets/Header'
import TopBar from './componets/TopBar'
function App() {
  let [card ,setCard]=useState(0) 
  let data =[{
    tille:"Earbuds",
    discription:"apple Earbuds",
    image:"./src/assets/ear buds.jpg"
  },
  {tille:"i pad ",
  discription:"apple model",
  image:"./src/assets/i pad.jpg"
},
{tille:"i phone",
discription:"iphone 12",
image:"./src/assets/iphone.jpg"
},
{tille:"loptop",
discription:"samsung model",
image:"./src/assets/laptop.jpg"
},
{tille:"Redme",
discription:"redme model",
image:"./src/assets/mi.jpg"
},
{tille:"oppo",
discription:"oppo model",
image:"./src/assets/oppo.jpg"
},
{tille:"Realme",
discription:"Realme model",
image:"./src/assets/realme.jpg"
},
{tille:"Tv",
discription:"samsun Tv",
image:"./src/assets/tv image.jpg"
},
{tille:"Vivo",
discription:"vivo model",
image:"./src/assets/vivo.jpg"
},
  ]
  return <>  
  <TopBar   Card={card} setCard={setCard} />
  <Header/>
  <section className="py-5">
  <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
       {
          data.map((e,i)=>{
            return  <Card  props={e} key ={i}  card={card} setCard={setCard} />
          }
          )
        }
        
      </div>
  </div>
</section>
<footer className="py-1 bg-dark">
  <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
</footer>
  </>
}

export default App