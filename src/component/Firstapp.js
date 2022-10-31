
import image1 from './images.jpg'
import image2 from './images (1).jpg'
import image3 from './téléchargement.jpg'
import TheButton from './Theclass'
const Terminal1={
    image:image1,
    name:'takavic',
    age:28,
    yearsOfService:5,
    deGarde:true
}
const Terminal2={
    image: image2,
    name:'tao',
    age:32,
    yearsOfService:10,
    deGarde:false
}
const Terminal3={
    image:image3,
    name:'harding',
    age:45,
    yearsOfService:16,
    deGarde:false,

}
const arr=[Terminal1,Terminal2,Terminal3]
const Terminal= ()=>{
    return (
       <div class="general">
                {
                    arr.map(element=>
                    (
                        <div class="styling">
                        <img src={element.image}/>
                        <p>Nom:{element.name}</p>
                        <p>Age:{element.age}</p>
                        <p>Années de service : {element.yearsOfService}</p>
                        <p>Service : {element.deGarde?'De garde':'Service normal'}</p>
                        <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Prendre rendez-vous
                        </button>
                        <TheButton/>
                        </div>
                        </div>
                    ))
                    
                }
       </div>
    )
}
 export default Terminal