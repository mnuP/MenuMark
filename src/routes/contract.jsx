import React from "react";
import "../styleInvoice.css";
import imagenLogo from "../images/logo-20h23.png";
import { useLocation } from "react-router-dom";
import { useState } from 'react';

    
export const Contrato = (props) => {
    let date = new Date().toUTCString().slice(5, 16);

    function printCotizacion(){
        window.print();
    };

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
                                <h3>Contrato Menumarket</h3>
                            </div>
                        </div>
                        <div className = "hr"></div>
                        <div className = "invoice-head-middle">
                            <div className = "invoice-head-middle-left text-start">
                                <p><span className = "text-bold">Fecha</span>: {date}</p>
                            </div>
                        </div>
                        <div className = "hr"></div>
                        <p> <li className = 'text-bold'>Bienvenido a MENUMARKET:</li>
                        Este documento describe los términos y condiciones aplicables al uso 
de la plataforma, es indispensable que conozca y acepte estos Términos y Condiciones Generales de 
uso para ALIADOS (Proveedores) de productos o servicios. MENUMARKET recomienda que este 
documento sea leído y consultado cada vez que sea necesario<br/>
                                1.- OBJETO DEL CONTRATO:<br/>
MENUMARKET es un portafolio de servicios web gastronómicos dirigidos al sector empresarial, por ende, la plataforma brinda la tecnología, para dar lugar a la exhibición o exposición de los ALIADOS (proveedores) generado con ello la simplificación de los procesos de cotización entre cliente y proveedor, de la oferta de servicios gastronómicos y/o productos publicados por los ALIADOS.<br/>
*Restaurantes para eventos.<br/>
*Experiencias online: Master Class con los mejores chefs, variedad de catas y talleres con especialistas, (Chefs, Sommeliers, Baristas, Speakers en nutrición y bienestar, etc. (Incluyendo o no el envío de kits).<br/>
*Experiencias presenciales: (talleres culinarios o catas en general) en espacios físicos (restaurantes).<br/>
*Regalos corporativos: Catálogo de Kits de diferentes ALIADOS (proveedores) del país.<br/>
Por consiguiente, MENUMARKET, es un INTERMEDIARIO entre el CLIENTE y el ALIADO, que pone a disposición de los CLIENTES (consumidores) una vitrina de servicios gastronómicos y/o productos, ofrecida por ALIADOS en calidad de proveedores registrados dentro en la plataforma. Por esta razón, como intermediario se encargará de validar y verificar en caso de que se genere una contratación que el servicio se ha prestado al CLIENTE.<br/>
DECLARACIÓN DE DERECHOS Y RESPONSABILIDADES<br/>
Para todos los efectos los presentes términos y condiciones se regirán por lo estipulado en el presente documento y lo establecido en las leyes colombianas.<br/>
2.- OBLIGACIONES CONTRACTUALES DE MENUMARKET:<br/>
La página de Menumarket cumple el papel del intermediario entre el cliente y el aliado, por consiguiente, su obligación será de medios y no de resultados, por lo expuesto los deberes de Menumarket serán los siguientes:<br/>
1. Promocionar en la plataforma, los servicios y/o productos que el ALIADO tenga en su portafolio.<br/>
2. Dar exposición digital al ALIADO.<br/>
3. Informar al ALIADO, sobre los clientes que quieran adquirir su servicio.<br/>
4. Posibilitar que el ALIADO cree su propio perfil y/o experiencia dentro de MENUMARKET<br/>
5. Protección de toda la información (datos) y registros relacionados del ALIADO (Proveedor). MENUMARKET no es propietario de los datos ingresados por los usuarios, no tiene posesión de ellos, no los ofrece en venta, ni distribuye, a terceros, sin que medie permiso previo, expreso y escrito, o requerimiento legal. "Los datos personales serán tratados como lo establece la Ley 1581 de 2012, reglamentada por el decreto 1377 de 2013 sobre la autorización del Titular de información para el Tratamiento de sus datos personales, las políticas de Tratamiento de los responsables y Encargados, el ejercicio de los derechos de los Titulares de información, las transferencias de datos personales y demás inherentes a la información suministrada."<br/>
Parágrafo uno-<br/>
MENUMARKET y su titular se reservan el derecho a cambiar o modificar los Términos y Condiciones del uso de la plataforma. Mantendrá informado al ALIADO de las modificaciones de uso que se generen en la misma.<br/>
Parágrafo dos-<br/>
MENUMARKET como intermediario, no tiene ningún vínculo laboral con el ALIADO, en calidad de proveedor, por consiguiente, no se hace responsable de cualquier reclamo o proceso litigioso por parte del CLIENTE o consumidor frente al servicio prestado.<br/>
3- OBLIGACIONES DEL ALIADO (Proveedor)<br/>
Sin perjuicio de las demás establecidas en este acuerdo, de manera general tendrá las siguientes obligaciones:<br/>
1. El ALIADO, en su calidad de proveedor, conoce y acepta ser el exclusivo responsable por los servicios gastronómicos y/o productos que publica en la plataforma para su venta en las categorías apropiadas. Las publicaciones podrán incluir textos descriptivos, logos, fotografías y otros contenidos y condiciones pertinentes para la contratación del servicio<br/>
2. El ALIADO (Proveedor) entiende y acepta que será el único responsable de los productos y/o servicios gastronómicos, en cuanto a CALIDAD Y CANTIDAD que ofrezca a CLIENTES o consumidores en especial todos aquellos que brinden o presten servicios de alimentación y bebidas, que pudiesen tener algún impacto sobre la salud de las personas. Que en el evento en que MENUMARKET o su titular sean llamados a un proceso judicial, el ALIADO (Proveedor) responda o sea vinculado como litisconsorte o llamado en garantía.<br/>
3. El ALIADO (Proveedor) asume y entiende que las obligaciones adquiridas por la atención, servicio, producción y logística del evento (presencial o virtual) son su entera responsabilidad. El ALIADO (proveedor) conoce y acepta que al realizar gastro-experiencias o eventos con otros ALIADOS o terceros lo hace bajo su propio riesgo.<br/>
4. EL ALIADO (Proveedor) Se compromete a mantener la información de su perfil en la plataforma actualizada, cierta, suficiente, clara sobre los productos y/o servicios gastronómicos que ofrezca, con sus debidas especificaciones en caso de menús o kits, tales como calidad, cantidad, características, con el fin de que los CLIENTES en calidad de consumidores tengan exactitud de lo que van a adquirir.<br/>
5. EL ALIADO (Proveedor) Se compromete a mantener precios justos (descuentos por volumen en los precios corporativos) También deberá Incluir el VALOR total (X PAX) en los productos y/o servicios ofrecidos con su respectivo precio por domicilio o cualquier posible recargo por hora de entrega, impuesto u otro aplicable. Se compromete a mantener actualizados los precios, que deberán ser expresados con los impuestos correspondientes incluidos, cuando corresponda la aplicación de estos, y en moneda COP. También deberá especificar VIGENCIA y todo aquello que incluya el precio total del producto o servicio a ofrecer, para evitar confusiones.<br/>
6. EL ALIADO (Proveedor) se compromete a entregar los productos y/o prestar el servicio al CLIENTE en calidad de consumidor oportunamente y en los términos definidos previamente a la aceptación de la solicitud realizada por este, y en caso de que, por algún motivo, dichas condiciones no sean posibles, estas razones deberán ser informadas a la plataforma o su titular, con suficiente tiempo de antelación, para evitar contratiempos ante el Cliente Final.<br/>
7. EL ALIADO (Proveedor) se compromete a tener afiliados a sus trabajadores al sistema de seguridad social, y protegidos de riesgos laborales ARL. Estas afiliaciones deben estar vigentes durante la entrega y/o prestación de servicio.<br/>
8. EL ALIADO (Proveedor) debe abstenerse de difundir la información de los CLIENTES en calidad de consumidores, a terceros no autorizados y también se compromete a respetar la relación comercial de cada CLIENTE o consumidor que llegue, se consiga o se gestione a través de la plataforma.<br/>
4. PAGOS Y FACTURACIÓN<br/>
Al prestar servicios y/o comercializar productos dentro de la plataforma, el ALIADO en calidad de proveedor entiende y acepta que, por cada venta o transacción realizada con un CLIENTE o consumidor al adquirir un servicio gastronómico y/o producto, deberá pagar a MENUMARKET un porcentaje del 10% sobre el valor de la intermediación, estipulado por el uso de la plataforma. (en el caso de que el valor por persona sea inferior a $100.000, se sumarán $10.000 de comisión)<br/>
El porcentaje anteriormente estipulado será recaudado directamente por la plataforma y el valor restante del producto o servicio adquirido por el CLIENTE en su calidad de consumidor le será entregado al ALIADO (proveedor) tan pronto lo pague el CLIENTE, el cual estará limitado a la fecha de pago del cliente final.<br/>
Parágrafo uno-<br/>
MENUMARKET Cumplirá con todo lo dispuesto en cuanto a términos y condiciones respecto a pagos y facturación y establecerá comunicación y demás notificaciones importantes a través de medios electrónicos.<br/>
5. MODO DE OPERACIÓN y EXHIBICIÓN DE SERVICIOS EN LA APLICACIÓN WEB<br/>
La plataforma a la que tienen acceso los ALIADOS permite la visualización de diferentes productos y/o servicios, publicados bajo la autorización expresa de la misma. El texto y fotos son aportados por los ALIADOS en su calidad de proveedores.<br/>
En la aplicación web los ALIADOS podrán acceder a funciones que les permitirán exhibir sus gastro-experiencias con el valor de cada una de ellas. Es importante agregar fecha de vigencia y actualizar el precio cada vez que se requiera.<br/>
En caso de generarse por parte del ALIADO (proveedor) alguna modificación esta será notificada al sistema de MENUMARKET mediante una alerta, quien se reserva la potestad de aceptar o rechazar que estas modificaciones sean visibles para el CLIENTE en calidad de consumidor, por lo tanto, MENUMARKET en un término no mayor a 3 días hábiles deberá permitir o no la visualización de los cambios realizados.<br/>
EL ALIADO (proveedor) (Restaurante o persona) que quiera ingresar y hacer parte de la vitrina corporativa deberá enviar al correo atencionalcliente@menumarket.co la siguiente documentación:<br/>
•Cédula de ciudadanía (representante legal)<br/>
•Correo electrónico<br/>
•Número de contacto<br/>
•RUT (en caso de persona natural)<br/>
•Certificado de existencia y representación legal (persona jurídica)<br/>
•Certificado bancario<br/>
Una vez presentada la información anterior, iniciará el proceso de validación, el cual podrá tardar un plazo máximo de 5 días hábiles, si al vencimiento del plazo aún no se ha dado respuesta a su solicitud, la misma se entenderá rechazada, caso en el cual deberá solicitar nuevamente su vinculación como ALIADO.<br/>
De ser aprobada y aceptada su solicitud y documentación, el nuevo ALIADO (Proveedor) ingresará con usuario y contraseña asignados por la aplicación web, allí puede comenzar a llenar el formato con los servicios gastronómicos y/o productos, en su categoría; (restaurantes, gastro-experiencias, talleres, catas, regalos corporativos, según guías de recomendación). Al finalizar deberá aceptar los términos y condiciones de uso, políticas de privacidad, tratamiento de datos y demás políticas contentivas.<br/>
RESPONSABILIDADES DE MENUMARKET<br/>
MENUMARKET como compañía se encargará de velar que cada ALIADO que acceda a la aplicación web, cumpla con los requisitos exigidos y respete los términos y condiciones establecidos en este documento.<br/>
MENUMARKET o su titular se reservan el derecho de suspender o cancelar la prestación del servicio al ALIADO (proveedor), cuando este estime que se han infringido los términos y condiciones aquí descritos para lo cual procederá a la notificación efectiva vía correo electrónico.<br/>
MENUMARKET o su titular no garantizan que la aplicación móvil será siempre segura o libre de cualquier clase de errores en su funcionamiento, sin embargo, la compañía se compromete a trabajar dentro de sus posibilidades para que el servicio se preste sin interrupciones o demoras.<br/>
MENUMARKET o su titular. NO asumirán responsabilidad alguna por daños o perjuicios que el ALIADO (Proveedor) pudiese causar a otro o a un tercero en razón de los servicios gastronómicos ofertados adquiridos por un CLIENTE, toda vez que como se ha definido en el “Objeto del contrato” de estos términos y condiciones, MENUMARKET es una plataforma intermediaria cuyo único fin es poner a disposición de los ALIADOS (Proveedores) una vitrina donde puedan ofertar productos y/o servicios gastronómicos, eventualmente adquiridos por CLIENTES haciendo uso de la plataforma.<br/>
En caso de que uno o más CLIENTES (empresas) inicien cualquier tipo de reclamo o acciones legales contra otro u otros ALIADOS (Proveedores), todos y cada uno de los involucrados en dichos reclamos o acciones eximen de toda responsabilidad a MENUMARKET, o su titular y a sus directores, gerentes, empleados, agentes, operarios, representantes y apoderados.<br/>
Los CLIENTES (empresas) tendrán un plazo de 15 días para iniciar algún reclamo, una vez vencido este término, no podrán iniciar una acción de reclamo a través de la plataforma. No obstante, quien deberá responder será el ALIADO (proveedor) contra quien se debe dirigir el CLIENTE; en ningún caso será MENUMARKET o su titular, pues únicamente servirán de canal para recibir la reclamación.<br/>
6. CLÁUSULA PENAL<br/>
El incumplimiento por cualquiera de las partes de la totalidad o de alguna o algunas de las obligaciones derivadas del presente contrato, dará derecho a aquella que hubiere cumplido o se hubiere allanado a cumplir, para exigir inmediatamente a título de pena aplicable a quien no cumplió o no se allanó a cumplir, el pago de una suma de dinero equivalente al veinte por ciento (20%) del precio total de los inmuebles, suma que será exigible por la vía ejecutiva, sin necesidad de requerimiento o constitución en mora, derechos estos a los cuales renuncian las partes en su recíproco beneficio. Por el pago de la pena no se extingue la obligación principal, la cual podrá ser exigida separadamente y la parte perjudicada puede escoger entre la exigencia de que el contrato se cumpla o su resolución por la vía ordinaria, en ambos casos con indemnización de perjuicios, tal como lo permiten los artículos 870 del Código de Comercio y 1546 y 1600 del Código Civil.<br/>
7. Autorización envió de información por correo electrónico<br/>
Las partes de forma expresa aceptan el envío de la información relacionada con el presente contrato a la dirección electrónica señalada en el encabezado del presente documento. Esta información incluye el envío de documentos tales como comprobantes de pago de honorarios, listas de precios, comunicados, y cualquier tipo de comunicación relacionada con el presente contrato.<br/>
El presente contrato fue leído y aceptado por el ALIADO 



                            </p>
                    </div>
                    <div className = "invoice-foot text-center">
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