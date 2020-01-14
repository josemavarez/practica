import React, {Component} from 'react';
import './listcategory.css';
import axios from 'axios';


class Listcategory extends Component {
    constructor(){
        super();
        this.state = {
            post : []
            }
    }
//aqui va la fuente .json 
        componentDidMount(){
                axios.get('https://jsonplaceholder.typicode.com/photos',{
                       //especifico el formato en el que se muestra los datos
                        headers: {
                        'Content-Type': 'application/json'
                    }
                }
                )
                //promesa que va a retornar una respuesta o un error (post (res.data=trae todos los datos))
                .then(res => {
                    this.setState({
                        post : res.data
                    })
                })
                //en saso de error
                .catch(error => {
                    console.log(error)
                })
        }
        render(){
        //extraer post desde los estados
        const {post} = this.state;
        //contenido del jsx 
        const posts = [];
        //value es el llamado a esa propiedad (variable asignada en el for)
        for (const [i,value] of post.entries()) {
                posts.push(
                    <div className = "row">
                        <div className = 'col-md-4'>                    
                    <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={value.url} alt="Card image cap"/>                
                <div className="card-body">
                {/* visualizar que tipo de datos traemos (nombre, id, numero, img) */}
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.id}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
            </div>
        
        )
                }
        return(
            <div className= 'row'>
                <div className = 'col-md-7'>
                    {posts}
                </div>
            </div>
        )
    }
}
//exportar la clase
export default Listcategory;