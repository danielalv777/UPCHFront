// Components
import Filters from "./filters";
import Table from "./table";
import Modal from 'react-modal';
import InputText from "../../components/InputText";
import SelectUI from "../../components/SelectUI";

// Hooks
import useHome from "./useHome";

// Styles
import "./home.css";

// Icons
import ExclamationCircle from "../../assets/home/exclamation-circle.svg";

// Constants
import { genderList } from "./constants";

Modal.setAppElement('#root');

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

function Home() {

    const {
        isOpenFilter,
        listUsers,
        handleOpenFilters,
        currentPage,
        handlePreviousPage,
        handleNextPage,
        handleSelectUser,
        isModalOpen,
        CloseModal,
        handleEditUser,
        handleDeleteUser,
        userSelected,
        handleInputChange,
        handleUpdateUser,
        isModalDeleteOpen,
        CloseModalDelete,
        handleApplyDelete,
    } = useHome();

    return (
        <div className="container  pt-5">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className="dt-title ">
                        <h3>Listado de usuarios</h3>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 mt-3 ">
                    <div className="d-flex justify-content-end align-items-center">
                        <button className="btn btn-sm btn-outline-primary px-4 " onClick={handleOpenFilters}>
                            <i className="bi bi-sliders"></i> Filtros
                        </button>
                    </div>
                </div>

                {isOpenFilter && (<Filters />)}

                <div className="col-sm-12 pt-4">
                    <div className="card border rounded-2 " style={{background: "#f8f8f8"}}>
                        <div className="card-header py-3" style={{background: "#f8f8f8"}}>
                            <div className="d-flex justify-content-start align-items-center">
                                <button
                                    className="btn btn-sm btn-outline-primary px-4 me-2 editar"
                                    onClick={handleEditUser}
                                    disabled={userSelected === null}
                                >
                                    <i className="bi bi-pencil"></i> Editar
                                </button>
                                <button
                                    className="btn btn-sm btn-outline-danger px-4 me-2" id="confirmDelete"
                                    onClick={handleDeleteUser}
                                    disabled={userSelected === null}
                                >
                                    <i className="bi bi-trash3"></i> Eliminar
                                </button>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="dt-example">
                                <div className="container-table">
                                    <Table listUsers={listUsers} handleSelectUser={handleSelectUser} />
                                </div>
                            </div>
                            <div className="footer-table">
                                <span>#Registros: {listUsers.length}</span>
                                <div className="container-buttons">
                                    <button className="btn-change-page" onClick={handlePreviousPage} disabled={currentPage === 1} >Anterior</button>
                                    <div className="container-page">{currentPage}</div>
                                    <button className="btn-change-page" onClick={handleNextPage}>Siguiente</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={CloseModal} style={customStyles}>
                <div className="modal-header">
                    <h3>Editar Usuario</h3>
                    <button onClick={CloseModal} className="btn-change-page">
                        <h3 className="h3-close-modal">x</h3>
                    </button>
                </div>
                <div className="modal-content">
                    <div className="container-info-modal">
                        <InputText 
                            textLabel="Nombre"
                            name="fullName"
                            value={userSelected?.fullName}
                            containerClassName="first-input-modal"
                            onChange={handleInputChange}
                        />
                        <SelectUI
                            textLabel="Género"
                            options={genderList}
                            name='gender'
                            placeholder={userSelected?.gender}
                            containerClassName="select-modal-rigth"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="container-info-modal">
                        <InputText
                            textLabel="Dirección"
                            name="address"
                            value={userSelected?.address}
                            onChange={handleInputChange}
                        />
                        <InputText
                            textLabel="Teléfono"
                            name="phone"
                            value={userSelected?.phone}
                            containerClassName="input-modal-rigth"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="container-info-modal">
                        <InputText
                            textLabel="Correo electrónico"
                            name="email"
                            disabled={true}
                            value={userSelected?.email}
                            onChange={handleInputChange}
                        />
                        <InputText
                            textLabel="País"
                            name="country"
                            value={userSelected?.country}
                            containerClassName="input-modal-rigth"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="btn-modal-save" onClick={handleUpdateUser}>
                        Guardar Cambios
                    </button>
                </div>
            </Modal>

            <Modal isOpen={isModalDeleteOpen}  onRequestClose={CloseModalDelete} style={customStyles}>
                <div className="main-container-delete">
                    <img src={ExclamationCircle} alt="exclamation" className="alert-icon-delete"/>
                    <div className="container-title-delete">
                        <h2>¿Estás seguro de eliminar este usuario?</h2>
                    </div>
                    <div className="container-buttons-delete">
                        <button className="btn-yes-delete" onClick={handleApplyDelete}>Sí, eliminar</button>
                        <button className="btn-no-delete" onClick={CloseModalDelete}>No, cancelar</button>
                    </div>
                </div>
                
            </Modal>
        </div>
    );
};

export default Home;