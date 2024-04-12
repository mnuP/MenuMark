import React from "react";
import "../styleInvoice.css";
import imagenLogo from "../images/logo-20h23.png";
import { useLocation } from "react-router-dom";
import { useState } from 'react';

    
export const DetailsPage = (props) => {
    return( 
<div className = "invoice-wrapper" id = "print-area">
            <div className = "invoice">
                <div className = "invoice-container">
                    <div className = "invoice-head">
                        <div className = "invoice-head-top">
                            <div className = "invoice-head-top-left text-start">
                                <img src = {imagenLogo}/>
                            </div>
                            <div className = "invoice-head-top-right text-end">
                                <h3>Asistente de creación paso a paso:</h3>
                            </div>
                        </div>
                        <div className = "hr"></div>
                        <div className = "hr"></div>
                        <p> <li className = 'text-bold'>Pública y comienza a cautivar a las empresas con tus paquetes corporativos. <br/> Sigue el instructivo: <br/><br/>  </li>
                        * Título: Nombre gastro-experiencia. Máximo de 38 caracteres.<br/><br/>                                                                                                                             
                        ✔ Ciudad:  Seleccionar     <br/><br/>    
                        ✔ Clase: Seleccionar        <br/> <br/>                                               
                        ✔ Modalidad:  Seleccionar      <br/>         <br/>                                                                                                                          
                        ✔ Dirección:  Completar información de Dirección  <br/> <br/>                
                        * Anfitrión: Nombre del restaurante/ experto culinario (Chef, sumiller, barista, etc.) Máximo 47 Caracteres.     <br/>        <br/>    
                        *  Descripción: Texto corto, elegante y bien redactado. Máximo de 495 caracteres.<br/><br/>
                        ✔ Capacidad: Capacidad mínima y máxima<br/><br/>
                        ✔ Disponibilidad: Fecha y hora.<br/><br/>
                        ✔ Duración: Tiempo de la actividad en el siguiente formato (2 h 30 min). <br/><br/>
                        ✔ Valor: Se paga comisión por venta exitosa (con base en el valor de la “experiencia” publicada) <br/><br/>
                        *    $10.000 si el precio del producto o servicio x persona es menor a $100.000                 <br/><br/>
                        *    10% si el precio del producto o servicio x persona es superior a  $100.000       <br/>
                        Recuerda, nuestro mercado es corporativo, publica tarifas especiales para grupos.(x persona)                      <br/>                                                                        
                        (Estos valores se podrán actualizar idealmente cada 3 meses o cada vez que se requiera.) <br/><br/>
                        ✔ Incluye: Experto gastronómico, barista, sumiller, etc.    <br/>
                        Sí es online, Kit para 1 o 2 personas, lista de contenido. Producción, luces y sonido. NO incluir envío<br/>
                        Sí es presencial, Detalle del Menú + bebidas. (sala privada, equipamiento, parqueaderos.)<br/>
                        Cada uno de los ítems debe ir separado por un punto “.” De esta forma se mostrará en formato “lista”<br/><br/>
                        ✔ 3 fotos (formato cuadrado) (HD) 1 foto portada y 2 fotos interiores.(ambiente, experiencia o producto)<br/>
                        NOTA: *Tener en cuenta límite de caracteres en algunos campos.<br/><br/>
                        ✔ Verificación de documentación. Para corroborar la identidad del restaurante o persona, <br/>
                        es necesario enviar los siguientes documentos: (Representante Legal) RUT, cédula, cámara de <br/>
                        comercio y certificación bancaria. (Identificar nombre de Restaurante y/o persona.)<br/>                                                                                                          
                        Una vez recibida la información, será necesaria una evaluación, antes de autorizar la publicación. <br/>
                        MENUMARKET comprobará que cumples con los requisitos que hemos detallado. El proceso puede <br/>
                        durar 1 semana aprox, una vez concluido recibirás un correo con alguna de estas respuestas.<br/><br/>
                        ✔ Experiencia aprobada ¡FELICIDADES! Tu documentación y publicación de tu gastro-experiencia <br/>
                        cumple con los requisitos: ya la puedes visualizar en la plataforma. Queda inaugurada.<br/><br/>
                        ✔Corregir y Reenviar. La información puede estar errada o te has equivocado en algo. Una vez que <br/>
                        tengas la información lista nuevamente, ingresa a tú perfil, y, podrás corregir o actualizar tu <br/>
                        experiencia con la información correcta. Enviar para su valoración.<br/><br/>
                        ✔Perfil o Experiencia rechazada. La documentación o experiencia no se ajusta a los requisitos de <br/>
                        MENUMARKET, por lo tanto, ha sido denegada.
                        <hr/>
                        Correo: atencionalcliente@menumarket.co                                                                                                          
                        Cel: 3117917370
                        <hr/>
                        ¡FELICIDADES, ya haces parte del nuevo y único modelo de búsqueda de Gastro-Experiencias 
                        Corporativas!

                        </p>
                    </div>
                </div>
            </div>
        </div>);
};