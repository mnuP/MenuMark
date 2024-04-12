import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import imagenFondo from "../images/fondoPostulacion.jpeg";
import { useState } from "react";
import { storage } from "../firebase/firebase";
import { useNavigate, useLocation } from 'react-router-dom';
import { ref, uploadBytes,getDownloadURL} from "firebase/storage";
import {collection, addDoc, serverTimestamp} from 'firebase/firestore';
import { db } from '../firebase/firebase';


function UploadData(props) {  
  const [imageUpload, setImageUpload] = useState('');
  const [imageUpload2, setImageUpload2] = useState('');
  const [imageUpload3, setImageUpload3] = useState('');
  const [titulo, setTitulo] =useState(0);
  const [ciudad, setCiudad] =useState(0);
  const [clase, setClase] =useState(0);
  const [modality, setModality] =useState(0);
  const [dir, setDir] =useState(0);
  const [extra, setExtra] =useState(0);
  const [desc, setDesc] =useState(0);
  const [capacity, setCapacity] =useState(0);
  const [disponibility, setDisponibility] =useState(0);
  const [tiempo, setTiempo] =useState(0);
  const [precio, setPrecio] =useState(0);
  const [incluye, setIncluye] =useState(0);
  const [url, setUrl] = useState(0);
  const [url2, setUrl2] = useState(0);
  const [url3, setUrl3] = useState(0);

  const location = useLocation();
  const itemPass = location.state.itemPass;
  const navigate = useNavigate();
  

  const uploadForm = async(e) =>{   

    e.preventDefault();
    const imageRef = ref(storage, `eventos/${"Profile" + imageUpload.name}`);
    const imageRef2 = ref(storage, `eventos/${"Profile" + imageUpload2.name}`);
    const imageRef3 = ref(storage, `eventos/${"Profile" + imageUpload3.name}`);

    await uploadBytes(imageRef, imageUpload)
    await uploadBytes(imageRef2, imageUpload2)
    await uploadBytes(imageRef3, imageUpload3)

    const url = await getDownloadURL(imageRef);
    const url2 = await getDownloadURL(imageRef2);
    const url3 = await getDownloadURL(imageRef3);

    setUrl(url);
    setUrl2(url2);
    setUrl3(url3);


    try{ 
      const dataDocs = await addDoc(collection(db,"usersNoAceptados"), 
        {
          title: titulo,
          city: ciudad,
          class: clase,
          modality: modality,
          extra: extra,
          direction: dir,
          description: desc,
          capacity: capacity,
          disponibility: disponibility,
          time: tiempo,
          price: precio,
          includes: incluye,
          photo: url,
          photo2: url2,
          photo3: url3,
          timeStamp: serverTimestamp(),
          accepted: "No Aceptado",
          user: itemPass
        })
        window.alert("!Su postulacion ha sido enviada¡");
      } catch (e) {
        console.log(e);
    }
  };
  
  return (
    <div className="fondo-p">
      
      <div className="horizontal-p">
        <p className="se-parte-de">"Conecta Con Un Mundo de Posibilidades: Únete a Menumarket Hoy"</p>
      </div>
      <div className="form-p">
        <Form onSubmit={uploadForm} style={{ padding:"10vh 5vw"}}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="titulo (Nombre del restaurante, experiencia o chef)">
            <Form.Label className="flTxt">Titulo:</Form.Label>
            <Form.Control onChange={(event) => {setTitulo(event.target.value)}} type="Text" placeholder="Titulo experiencia..." maxLength={38}/>
          </Form.Group>

          <Form.Group as={Col} controlId="ciudad">
            <Form.Label className="flTxt">Ciudad:</Form.Label>
            <Form.Select onChange={(event) => {setCiudad(event.target.value)}} defaultValue="Choose...">
              <option>Seleccionar...</option>
              <option>Nacional</option>
              <option>Bogotá</option>
              <option>Medellín</option>
              <option>Cali</option>
              <option>Barranquilla</option>
              <option>Cartagena</option>
              <option>Cúcuta</option>
              <option>Santa Marta</option>
              <option>Bucaramanga</option>
              <option>Villavicencio</option>
              <option>Valledupar</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="clase">
            <Form.Label className="flTxt"> Clase:</Form.Label>
            <Form.Select onChange={(event) => {setClase(event.target.value)}} defaultValue="Choose...">
              <option>Seleccionar...</option>
              <option>Restaurantes</option>
              <option>Cata</option>
              <option>De Temporada</option>
              <option>Taller de Cocina</option>
              <option>Master Class</option>
              <option>Regalos Corporativos</option>
              <option>Catering</option>
              <option>Chef en Casa</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="tipo">
            <Form.Label className="flTxt">Modalidad:</Form.Label>
            <Form.Select onChange={(event) => {setModality(event.target.value)}} defaultValue="Choose...">
              <option>Seleccionar...</option>
              <option>Presencial</option>
              <option>Online</option>
              <option>Hibrida</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="dir">
          <Form.Label className="flTxt">Dirección:</Form.Label>
          <Form.Control onChange={(event) => {setDir(event.target.value)}} placeholder="Carrera 7a # 1-70" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="extra">
          <Form.Label className="flTxt">Anfitrión:</Form.Label>
          <Form.Control onChange={(event) => {setExtra(event.target.value)}} placeholder="Nombre del restaurante o experto culinario (Chef, Sumiller, Barista, etc.)" maxLength={47}/>
        </Form.Group>

        <Form.Label className="flTxt">Descripción (máx. 495 caracteres):</Form.Label>
        <FloatingLabel
          controlId="desc"
          label="Descripcion"
          className="mb-3"
        >
          
          <Form.Control onChange={(event) => {setDesc(event.target.value)}} as="textarea" placeholder="Leave a here" maxLength={495}/>
        </FloatingLabel>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="max">
            <Form.Label className="flTxt">Capacidad (mín. máx.)</Form.Label>
            <Form.Control placeholder="15 - 30" onChange={(event) => {setCapacity(event.target.value)}} />
          </Form.Group>

          <Form.Group as={Col} controlId="min">
            <Form.Label className="flTxt">Disponibilidad (fecha - hora)</Form.Label>
            <Form.Control placeholder="1PM a 6PM" onChange={(event) => {setDisponibility(event.target.value)}}/>
          </Form.Group>

          <Form.Group as={Col} controlId="tiempo">
            <Form.Label className="flTxt">Duración</Form.Label>
            <Form.Control placeholder="2h 30mín" onChange={(event) => {setTiempo(event.target.value)}}/>
          </Form.Group>

          <Form.Group as={Col} controlId="precio">
            <Form.Label className="flTxt">Valor (por persona)</Form.Label>
            <Form.Control onChange={(event) => {setPrecio(event.target.value)}} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="incluye">
          <Form.Label className="flTxt">Que Incluye y/o Uso del espacio: </Form.Label>
          <Form.Control onChange={(event) => {setIncluye(event.target.value)}} placeholder="50g de té. 2 infusores bola. 1 cuchara medidora. 2 cuencos de cristal. plegable informativo y envio nacional." />
        </Form.Group>

        <InputGroup className="mb-3">
          <Form.Label className="flTxt">Foto Portada &nbsp; </Form.Label>
          <Form.Control
            placeholder="Subir Imagen"
            aria-describedby="basic-addon2"
            type='file'
            onChange={(event) => {setImageUpload(event.target.files[0])}}
          />
        </InputGroup>

        <InputGroup className="mb-3">
        <Form.Label className="flTxt">Logo o Foto&nbsp;&nbsp; </Form.Label>
          <Form.Control
            placeholder="Subir Segunda Imagen"
            aria-describedby="basic-addon2"
            type='file'
            onChange={(event) => {setImageUpload2(event.target.files[0])}}
          />
        </InputGroup>

        <InputGroup className="mb-3">
        <Form.Label className="flTxt">Foto Interior &nbsp;&nbsp;&nbsp; </Form.Label>
          <Form.Control
            placeholder="Subir Tercera Imagen"
            aria-describedby="basic-addon2"
            type='file'
            onChange={(event) => {setImageUpload3(event.target.files[0])}}
          />
        </InputGroup>

        <p className='textoInformacion'>Los datos personales serán tratados como lo establece la Ley 1581 de 2012, reglamentada por el decreto 1377 de 2013, <br/>
        sobre la autorización del Titular de información para el Tratamiento de sus datos personales, las políticas de<br/>
        Tratamiento de los Responsables y Encargados, el ejercicio de los derechos de los Titulares de información,<br/>
        las transferencias de datos personales y demás inherentes a la información suministrada.</p>

        <Button variant="light" type="submit">
          Enviar
        </Button>
        <Button variant="light" style={{marginLeft: 50}} onClick={()=>{navigate("contract")}}>
          Términos y Condiciones
        </Button>
      </Form>
      </div>
      <button class="floating-button" onClick={()=>{navigate("Details")}}>Guía</button>
    </div>
  );
}

export default UploadData;