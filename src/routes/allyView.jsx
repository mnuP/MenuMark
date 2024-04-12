import React from "react";
import "../style.css";
import imagenFondo from "../images/imagen-fondo-proveedor.png";
import imagenSE from "../images/logoRes.png";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { Carousel } from "bootstrap";

var dict = { "Presencial" : "https://api.iconify.design/el/group.svg?color=%23c5a263", 
             "Online" : "https://api.iconify.design/mdi/virtual-meeting.svg?color=%23c5a263",
             "Hibrida" : "https://api.iconify.design/ri/exchange-fill.svg?color=%23c5a263"};
    
export const AllyView = (props) => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const itemPass = location.state.item;

  const formattedIncludes = location.state.item.includes
    ? location.state.item.includes.split('. ').map((item, index) => (
        <React.Fragment key={index}>
          {item}
          <br />
        </React.Fragment>
      ))
    : null;

  /*else if(location.state.item.class === "Cata"){
    return (<div style={{flexGrow:"1"}}>
      <div className="desktop">
        <div className="div">
          <div className="overlap-group">
            <div className="overlap-group">
            <img className="imagen-fondo" alt="Imagen fondo" src={imagenFondo} />
              <div className="text-wrapper">{location.state.item.title}</div>
              <div className="proveedor">
                <div className="rectangle" />
                <img className="imagen" alt="Imagen" src={location.state.item.photo}/>
                <div className="titulo-experiencia"> {location.state.item.extra} </div>
              </div>
            </div>
            <div className="informacion-basica">
              <div className="text-wrapper-3" style={{fontSize: 29, width:"100%", fontWeight: 300, color: "black"}}>
                DESCRIPCIÓN: <hr></hr>
              </div>
              <div className="text-wrapper-2" style={{fontSize: 18, lineHeight: 1.6, textAlign: "justify"}}>{location.state.item.description}</div>
            </div>
            <img className="pepicons-pencil" alt="pepicon" src={imagenSE} />
          </div>
            <div className="texto-experiencia">
              <div className="text-wrapper-3" style={{fontSize: 29, fontWeight: "bolder"}}>
                <br/>DETALLE DEL SERVICIO: <hr></hr></div><br/>
              <div className="text-wrapper-2">
              <div className="text-wrapper-2">
                <img className="iconTxt" alt="Pepicons pencil" src={dict[location.state.item.modality]}/> {location.state.item.modality}</div><br/>
              <div className="text-wrapper-2"></div>
                <img className="iconTxt" alt="Pepicons pencil" src="https://api.iconify.design/pepicons-pencil/people.svg?color=%23c5a263"/>
                Capacidad: {location.state.item.capacity} Personas</div><br/>
              <div className="text-wrapper-2">
                <img className="iconTxt" alt="Octicon person" src="https://api.iconify.design/healthicons/i-schedule-school-date-time.svg?color=%23c5a263" />
                Disponibilidad: {location.state.item.disponibility}</div><br/>
              <div className="text-wrapper-2">
              <img className="iconTxt" alt="Formkit time" src="https://api.iconify.design/mdi/timer-sand.svg?color=%23c5a263" />
                Duracion: {location.state.item.time}</div><br/>

              <div className="text-wrapper-2">INCLUYE: <br/><br/> {formattedIncludes}</div>
              <div className="text-wrapper-2"><button onClick={()=>{navigate("cotizacion", {state:{itemPass}})}} className="button">!Cotiza aqui!</button></div>
            </div>

          <div className="overlap">
            <img className="imagen-SE" alt="Imagen SE" src={location.state.item.photo2} />
            <div className="rectangle-2" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    );
  }*/
  if(location.state.item.class === "Regalos Corporativos"){
    return (
    <div>
      <div className="desktop">
        <div className="div" style={{height:"1000px"}}>
          <div className="overlap-group">
            <div className="overlap-group">
            <img className="imagen-fondo" alt="Imagen fondo" src={imagenFondo} />
              <div className="text-wrapper">Regalos Corporativos</div>
              <div className="proveedor">
                <div className="rectangle" />
                <img className="imagen" alt="Imagen"  src={location.state.item.photo} />
                <div className="titulo-experiencia">{location.state.item.title}</div>
              </div>
            </div>
            <div className="informacion-basica">
              <div className="text-wrapper-3" style={{fontSize: 29, width:"100%", fontWeight: 300, color: "black"}}>
                Incluye: <hr></hr>
              </div>
              <div className="frame">
                <div className="text-wrapper-2">{formattedIncludes}</div>
              </div>
            </div>
            <img className="pepicons-pencil" alt="Pepicons pencil" src="https://api.iconify.design/codicon/settings.svg?color=%23c5a263" />
          </div>
          <div className="texto-experiencia">
            <div className="text-wrapper-2">
              <button onClick={()=>{navigate("cotizacion", {state:{itemPass}})}} className="buttonSec">¡Cotiza aquí!</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
    );
  }else if(location.state.item.class === "Master Class"){
    return (
    <div>
      <div className="desktop">
        <div className="div" style={{height:"1000px"}}>
          <div className="overlap-group">
            <div className="overlap-group">
            <img className="imagen-fondo" alt="Imagen fondo" src={imagenFondo} />
              <div className="text-wrapper" >Master Class</div>
              
              <div className="proveedor">
                <div className="rectangle"/>
                <img className="imagen" alt="Imagen"  src={location.state.item.photo} />
                <div className="titulo-experiencia">{location.state.item.extra}</div>
              </div>
            </div>
            <div className="informacion-basica">
            
              <div className="frame">
                <div className="text-wrapper-2" style={{fontSize: 28, color: "#d5c25d", lineHeight: 1}}>{location.state.item.title}</div>
              </div>
              <div className="frame">
                <div className="text-wrapper-2" style={{fontSize: 18, lineHeight: 2, textAlign: "justify"}}>{location.state.item.description} </div>
              </div>
            </div>
          </div>
          <div className="texto-experiencia">
            <div className="text-wrapper-2">
              <button onClick={()=>{navigate("cotizacion", {state:{itemPass}})}} className="buttonSec">¡Cotiza aquí!</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
    );
  }

  return (
    <div>
      <div className="desktop">
        <div className="div">
          <div className="overlap-group">
            <div className="overlap-group">
            <img className="imagen-fondo" alt="Imagen fondo" src={imagenFondo} />
              <div className="text-wrapper">{location.state.item.title}</div>
              <div className="proveedor">
                <div className="rectangle" />
                <img className="imagen" alt="Imagen" src={location.state.item.photo} />
                <div className="titulo-experiencia"> {location.state.item.extra} </div>
              </div>
            </div>
            <div className="informacion-basica">
              <div className="text-wrapper-3" style={{fontSize: 29, width:"100%", fontWeight: 300, color: "black"}}>
                Descripción:<hr></hr>
              </div>
              <div className="text-wrapper-2" style={{fontSize: 18, lineHeight: 1.6, textAlign: "justify"}}>{location.state.item.description}</div>
              </div>
              <img className="pepicons-pencil" alt="pepicon" src={imagenSE} />
            </div>
            <div className="texto-experiencia">
              <div className="text-wrapper-3" style={{fontSize: 29}}>
                Detalle: <hr></hr></div><br/>
              <div className="text-wrapper-2">
                <img className="iconTxt" alt="Pepicons pencil" src={dict[location.state.item.modality]}/> {location.state.item.modality}</div><br/>
              <div className="text-wrapper-2"></div>
              <div className="text-wrapper-2">
                <img className="iconTxt" alt="Pepicons pencil" src="https://api.iconify.design/pepicons-pencil/people.svg?color=%23c5a263"/>
                Capacidad: {location.state.item.capacity} Personas</div><br/>
              <div className="text-wrapper-2">
                <img className="iconTxt" alt="Octicon person" src="https://api.iconify.design/healthicons/i-schedule-school-date-time.svg?color=%23c5a263" />
                Disponibilidad: {location.state.item.disponibility}</div><br/>
              <div className="text-wrapper-2">
              <img className="iconTxt" alt="Formkit time" src="https://api.iconify.design/mdi/timer-sand.svg?color=%23c5a263" />
                Duración: {location.state.item.time}</div><br/>
              <div className="text-wrapper-2">Incluye: <br/><br/> {formattedIncludes}</div>
              <div className="text-wrapper-2"><button onClick={()=>{navigate("cotizacion", {state:{itemPass}})}} className="button">¡Cotiza aquí!</button></div>
            </div>

          <div className="overlap">
            <img className="imagen-SE" alt="Imagen SE" src={location.state.item.photo2} />
            <div className="rectangle-2" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

