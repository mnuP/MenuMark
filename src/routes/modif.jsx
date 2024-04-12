import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import imagenFondo from "../images/fondoPostulacion.jpg";
import imagenBox from "../images/imagen-fondo-proveedor.png";
import imagenLog from "../images/adBg.jpg";
import { useEffect, useState } from "react";
import { storage, auth } from "../firebase/firebase";
import { ref, uploadBytes,getDownloadURL} from "firebase/storage";
import {collection, addDoc, deleteDoc, serverTimestamp, onSnapshot, doc} from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import style from "../styleForm.css";
import { useNavigate, useLocation } from 'react-router-dom';

export const Modif = (props) => {  
  const navigate = useNavigate();
  const location = useLocation();
  const itemPass = location.state.item;

  const [titulo, setTitulo] =useState(itemPass.title);
  const [ciudad, setCiudad] =useState(itemPass.city);
  const [clase, setClase] =useState(itemPass.class);
  const [modality, setModality] =useState(itemPass.modality);
  const [dir, setDir] =useState(itemPass.direction);
  const [desc, setDesc] =useState(itemPass.description);
  const [capacity, setCapacity] =useState(itemPass.capacity);
  const [disponibility, setDisponibility] =useState(itemPass.disponibility);
  const [tiempo, setTiempo] =useState(itemPass.time);
  const [precio, setPrecio] =useState(itemPass.price);
  const [incluye, setIncluye] =useState(itemPass.includes);
  const [extra, setExtra] =useState(itemPass.extra);
  const [url, setUrl] = useState(itemPass.photo);
  const [url2, setUrl2] = useState(itemPass.photo2);
  const [url3, setUrl3] = useState(itemPass.photo3);
  const [itemID, setItemID] = useState(itemPass.id);
  const collectionRef = collection(db, "usersPrincipal");
  const [user, setUser] = useState(itemPass.user);
    

  async function deleteDocument(){
    try {
      const docRef = doc(db, 'usersPrincipal', itemID);
      deleteDoc(docRef);

    }catch(err){
      console.log(err);
    };
  }

  async function deleteDocumentDir(){
    try {
      const docRef = doc(db, 'usersPrincipal', itemID);
      deleteDoc(docRef);
      window.alert("La experiencia ha sido eliminada");
      navigate(-1);

    }catch(err){
      console.log(err);
    };
  }
  
  const uploadForm = async(e) =>{  

    e.preventDefault();
    /*const imageRef = ref(storage, `eventos/${"Profile" + imageUpload.name}`);
    await uploadBytes(imageRef, imageUpload)
    const url = await getDownloadURL(imageRef);
    setUrl(url);*/

    try{ 
      const dataDocs = await addDoc(collectionRef, 
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
          user: user
        })

        deleteDocument();
        window.alert("La experiencia ha sido actualizada");
      } catch (e) {
        window.alert(e);
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${imagenLog})`,
    backgroundSize: 'cover',
  };

  const frameStyle = {
    background: `url(${imagenBox}) no-repeat center center`,
    backgroundSize: 'cover',
    padding: '80px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
    textAlign: 'center',
    color: '#fff',
  };

  
  
  return (
      <div className="fondo-p">
        
        <div className="form-p">
          <Form onSubmit={uploadForm} style={{ padding:"10vh 5vw"}}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="titulo (Nombre restaurante, experiencia o chef)">
              <Form.Label className="flTxt">Titulo:</Form.Label>
              <Form.Control onChange={(event) => {setTitulo(event.target.value); }} type="Text" value={titulo} />
            </Form.Group>
  
            <Form.Group as={Col} controlId="ciudad">
              <Form.Label className="flTxt">Ciudad:</Form.Label>
              <Form.Select onChange={(event) => {setCiudad(event.target.value)}} value={ciudad}>
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
                <option>Armenia</option>
                <option>Arauca</option>
              </Form.Select>
            </Form.Group>
          </Row>
  
          <Row className="mb-3">
            <Form.Group as={Col} controlId="clase">
              <Form.Label className="flTxt"> Clase:</Form.Label>
              <Form.Select onChange={(event) => {setClase(event.target.value)}} value={clase}>
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
              <Form.Select onChange={(event) => {setModality(event.target.value)}} value={modality}>
                <option>Seleccionar...</option>
                <option>Presencial</option>
                <option>Online</option>
                <option>Hibrida</option>
              </Form.Select>
            </Form.Group>
          </Row>
  
          <Form.Group className="mb-3" controlId="dir">
            <Form.Label className="flTxt">Direccion:</Form.Label>
            <Form.Control onChange={(event) => {setDir(event.target.value)}} value={dir}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="extra">
            <Form.Label className="flTxt">Especialidad o Anfitrion:</Form.Label>
            <Form.Control onChange={(event) => {setExtra(event.target.value)}} placeholder="Especialidad del restaurante o Nombre del Anfitrion" />
          </Form.Group>
  
          <FloatingLabel
            controlId="desc"
            className="mb-3"
          >
            
            <Form.Control onChange={(event) => {setDesc(event.target.value)}} as="textarea" value={desc}/>
          </FloatingLabel>
  
          <Row className="mb-3">
            <Form.Group as={Col} controlId="max">
              <Form.Label className="flTxt">Capacidad Min-Max</Form.Label>
              <Form.Control onChange={(event) => {setCapacity(event.target.value)}} value={capacity}/>
            </Form.Group>
  
            <Form.Group as={Col} controlId="min">
              <Form.Label className="flTxt">Disponibilidad</Form.Label>
              <Form.Control value={disponibility} onChange={(event) => {setDisponibility(event.target.value)}}/>
            </Form.Group>
  
            <Form.Group as={Col} controlId="tiempo">
              <Form.Label className="flTxt">Tiempo(h)</Form.Label>
              <Form.Control value={tiempo} onChange={(event) => {setTiempo(event.target.value)}}/>
            </Form.Group>
  
            <Form.Group as={Col} controlId="precio">
              <Form.Label className="flTxt">Precio P/P</Form.Label>
              <Form.Control onChange={(event) => {setPrecio(event.target.value)}} value={precio}/>
            </Form.Group>
          </Row>
  
          <Form.Group className="mb-3" controlId="incluye">
            <Form.Label className="flTxt">Incluye:</Form.Label>
            <Form.Control onChange={(event) => {setIncluye(event.target.value)}} value={incluye} placeholder="Si es restaurante (Uso de espacio, capacidad y equipamiento), Si es online (¿Se envian kits?)" />
          </Form.Group>

          <br></br>
  
          <Button variant="success" type="submit">
            Actualizar
          </Button>
          <Button variant="danger" onClick={deleteDocumentDir} style={{marginLeft:"2vw"}}>
            Eliminar
          </Button>
        </Form>
        </div>
      </div>
    );
  }