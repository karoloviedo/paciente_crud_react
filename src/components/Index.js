import React from 'react';
import { Link } from "react-router-dom";
import Api from "../servicios/api";
import { Modal, Button } from 'react-bootstrap';
import Footer from './layouts/footer';
import Header from './layouts/header';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            paciente: [],
            showConfirmModal: false,
            pacienteEliminarId: null
        };
    }

    borrarRegistros = (id) => {
        // Guardar el ID del paciente que se va a eliminar
        this.setState({
            showConfirmModal: true,
            pacienteEliminarId: id
        });
    }

    confirmarEliminar = () => {
        const { pacienteEliminarId } = this.state;
        fetch(Api + '?borrar=' + pacienteEliminarId)
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta);
                this.cargarDatos();
                this.cerrarConfirmModal();
            })
            .catch(console.log)
    }

    cerrarConfirmModal = () => {
        this.setState({
            showConfirmModal: false,
            pacienteEliminarId: null
        });
    }

    cargarDatos() {
        fetch(Api)
          .then(respuesta => {
            console.log(respuesta);
            return respuesta.json();
          })
          .then((datosRespuesta) => {
            console.log(datosRespuesta);
            if (datosRespuesta.success === 0) {
              console.log("No se pudo conectar a la base de datos PostgreSQL");
            } else {
              const pacientes = Array.isArray(datosRespuesta) ? datosRespuesta : [];
              this.setState({ datosCargados: true, paciente: pacientes });
            }
          })
          .catch((error) => {
            console.error("Error al cargar los datos:", error);
          });
      }
      

    componentDidMount() {
        this.cargarDatos();
        const pacienteCreado = localStorage.getItem('pacienteCreado');
        if (pacienteCreado === 'true') {
          this.setState({ pacienteCreado: true });
          localStorage.removeItem('pacienteCreado'); 
        }
    }

    render() {
        const { datosCargados, paciente, showConfirmModal} = this.state;

        //Ordenar los datos de menor a mayor
        const pacientesOrdenados = paciente.slice().sort((a, b) => a.id - b.id); 
        
        if (!datosCargados) {
            return (<div>Cargando...</div>);
        } else {
            return (
                <div>
                    <Header></Header>
                <div className="card">
                    <div className="card-header">
                        <Link to={"/create"} className='btn btn-success m-2'>Agrega un nuevo Paciente</Link>
                    </div>
                    <div className="card-body">
                        <div className="container">
                            <div className="mb-4">
                                <h4>Lista de Pacientes</h4>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover table-bordered" id="nuestratabla">
                                    <thead className="bg-primary text-white">
                                        <tr>
                                            <th className="text-center">Id</th>
                                            <th className="text-center"># ID</th>
                                            <th className="text-center">Nombre</th>
                                            <th className="text-center">Apellido</th>
                                            <th className="text-center">Telefono</th>
                                            <th className="text-center">Email</th>
                                            <th className="text-center">Genero</th>
                                            <th className="text-center">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pacientesOrdenados.map(
                                            (paciente) => (
                                                <tr key={paciente.id}>
                                                    <td className="text-center">{paciente.id}</td>
                                                    <td className="text-center">{paciente.type_id}</td>
                                                    <td className="text-center">{paciente.nombre}</td>
                                                    <td className="text-center">{paciente.apellido}</td>
                                                    <td className="text-center">{paciente.telefono}</td>
                                                    <td className="text-center">{paciente.email}</td>
                                                    <td className="text-center">{paciente.genero}</td>
                                                    <td className="text-center">
                                                        <div className="btn-group" role="group" aria-label="">
                                                            <Link to={`/edit/${paciente.id}`} className="btn btn-primary m-1">Editar</Link>
                                                            <button type='button' className='btn btn-danger m-1' onClick={() => this.borrarRegistros(paciente.id)}>Eliminar</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            <div>
            <Footer></Footer>
        </div>

                    {/* Modal de confirmación de eliminación */}
                    <Modal show={showConfirmModal} onHide={this.cerrarConfirmModal} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirmar Eliminación</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            ¿Estás seguro de que deseas eliminar este paciente?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.cerrarConfirmModal}>Cancelar</Button>
                            <Button variant="danger" onClick={this.confirmarEliminar}>Eliminar</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            );
        }
    }
}

export default Index;
