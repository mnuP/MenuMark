import React from "react";
import "../styleInvoice.css";
import imagenLogo from "../images/logo-20h23.png";
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import {serverTimestamp} from 'firebase/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';
import logoPPal from "../images/logoNuevoPP.png";

    
export const InvoicePage = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [numeroFactura, setNumeroFactura] = useState(localStorage.getItem('numeroFactura'));
  const location = useLocation();
  console.log(location);
  const price = location.state.itemPass.price;
  let date = new Date().toUTCString().slice(5, 16);


  const handleQTChange = (event) => {
    const newQ = parseFloat(event.target.value);
    setQuantity(isNaN(newQ) ? 0 : newQ); 
  };

  const totalServicio = (parseInt(price)*quantity).toFixed(2);

  function printCotizacion(){
    window.print();
    const numeroActual = localStorage.getItem('numeroFactura');

    const nuevoNumero = numeroActual ? parseInt(numeroActual) + 1 : 1;

    setNumeroFactura(nuevoNumero);
    localStorage.setItem('numeroFactura', nuevoNumero.toString());
  };

  return( 
<div className = "invoice-wrapper" id = "print-area">
            <div className = "invoice">
                <div className = "invoice-container">
                    <div className = "invoice-head">
                        <div className = "invoice-head-top">
                            <div className = "invoice-head-top-left text-start">
                                <img
                                    src={imagenLogo}
                                    width='100%'
                                    height = '100%'
                                />
                            </div>
                            <div className = "invoice-head-top-right text-end">
                                <h3>Cotización</h3>
                            </div>
                        </div>
                        <div className = "hr"></div>
                        <div className = "invoice-head-middle">
                            <div className = "invoice-head-middle-left text-start">
                                <p><span className = "text-bold">Fecha</span>: {date}</p>
                            </div>
                            <div className = "invoice-head-middle-right text-end">
                                <p><spanf className = "text-bold">Cotización No:</spanf>000{numeroFactura}</p>
                            </div>
                        </div>
                        <div className = "hr"></div>
                        <p> <li className = 'text-bold'>Apreciado Cliente:</li>
                        Somos Menumarket, la plataforma líder en Gastro-Experiencias Corporativas.<br/>
A través de una rigurosa selección de chefs, sumilleres, baristas y otros profesionales y expertos <br/>
culinarios, garantizamos experiencias de la más alta calidad. En Menumarket, nos apasiona poner <br/>
sobre tu mesa propuestas únicas que inspiren y motiven a tus equipos de trabajo y clientes.<br/><br/>
Con esta cotización, te brindamos una solución innovadora y efectiva para tus eventos <br/>
empresariales, adaptándonos a tus necesidades y presupuesto.<br/><br/>
¡La diversión está servida!

                            </p>
                    </div>
                    <div className = "overflow-view">
                        <div className = "invoice-body">
                            <table>
                                <thead>
                                    <tr>
                                        <td className = "text-bold">Servicio</td>
                                        <td className = "text-bold">Descripcion</td>
                                        <td className = "text-bold">Valor</td>
                                        <td className = "text-bold">Ctd</td>
                                        <td className = "text-bold">Total</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{location.state.itemPass.class}</td>
                                        <td>{location.state.itemPass.title}: {location.state.itemPass.includes}</td>
                                        <td>${price}</td>
                                        <td><input type="text" name="comisionMenu" id="comisionMenu" value={quantity} onChange={handleQTChange}></input></td>
                                        <td className = "text-end">${totalServicio}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className = "invoice-body-bottom">
                                <div className = "invoice-body-info-item">
                                    <div className = "info-item-td text-end text-bold">Total:</div>
                                    <div className = "info-item-td text-end">${(totalServicio)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "invoice-foot text-center">
                        <p><span className = "text-bold text-center">NOTA:&nbsp;</span>Esta es una cotización realizada por computador y no necesita firma física. 
La última actualización de esta Gastro-Experiencia se realizó el {new Date(location.state.itemPass.timeStamp.seconds*1000).toUTCString().slice(5, 16)}, Publicaciones sin actualizar por más de 3 meses están sujetas a cambios de precios y disponibilidad 
sin previo aviso.
</p>
                        <p><span className = "text-bold text-center">Aplican Terminos y Condiciones:&nbsp;</span></p>
                        <p><span className = "text-bold text-center">El evento se desarrollará de acuerdo al número de personas pactadas en esta cotización.<br></br>
                        Anticipo del 50%, y/o pago total, dependiendo del regalo o evento contratado, mediante 
transferencia, o según acuerdo.<br></br>
                        Precios estipulados en esta cotización están sujetos a cambios con vigencia de 15 días a partir de 
la fecha de elaboración. <br></br>
                        Esta cotización no representa reserva y está sujeta a disponibilidad.<br></br>
                        Los consumos adicionales serán facturados de acuerdo a previa autorización del cliente.<br></br>
                        Una vez se haya verificado la disponibilidad para reservar, es necesario enviar un correo de 
confirmación, con mínimo 15 días de anticipación. <br></br>
                        Los cambios en aumentos o disminuciones en el número de participantes deberán efectuarse con 
mínimo 10 días hábiles antes del evento y con 20 días si hay envíos nacionales. <br></br>
                        Si la asistencia final al evento es inferior a lo contratado, se cobrará el monto correspondiente a 
lo acordado.<br></br>
                        En caso de aplicar, si la empresa es retenedora, se incrementará la cifra correspondiente, al valor 
final en la factura. <br></br>
                        El espacio de transmisión de la clase online estará sujeto al día y hora del evento empresarial. <br></br>
                        Certificamos que, como prestador de servicios personales, no tengo subcontratados dos o más
personas, por lo cual solicito efectuar retención en la fuente según la tabla del artículo 383 de E.T. 
n/a
<br></br>
                        </span></p>
                        <div className = "invoice-btns">
                        <button type="button" className="invoice-btn" onClick={printCotizacion}>
                            <span>
                                <i className="fa-solid fa-print"></i>
                            </span>
                            <span>Imprimir</span>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};