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
                axios.get('https://jsonplaceholder.typicode.com/users/1',{
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
        return(
                    <div className = "container">                    
                    <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="..." alt="Card image cap"/>                
                <div className="card-body">
                {/* visualizar que tipo de datos traemos (nombre, id, numero, img) */}
                    <h5 className="card-title">{post.name}</h5>
                    <p className="card-text">{post.id}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
        )
    
    }
    
}
//exportar la clase
export default Listcategory;

