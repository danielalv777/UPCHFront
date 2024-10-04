// Libraries
import PropTypes from "prop-types";

function Table({listUsers, handleSelectUser}) {
    return (
        <table className="table table-hover table-light" id="example">
            <thead>
                <tr>
                    <th scope="col"><i className="bi bi-check-lg"></i></th>
                    <th scope="col"></th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Genero</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Teléfono</th>

                    <th scope="col">Correo electrónico</th>

                    <th scope="col">País</th>
                </tr>
            </thead>
            <tbody>
                {listUsers?.map(user => (
                    <tr key={user.phone}>
                        <td>
                            <input
                                className="form-check-input"
                                type="checkbox" value=""
                                onChange={() => handleSelectUser(user)}
                            />
                        </td>
                        <td>
                            <img src={user.picture} alt="userPicture"
                                className="img-user-table" />
                        </td>

                        <td>{user.fullName}</td>
                        <td>{user.gender}</td>
                        <td>{user.address}</td>
                        <td>{user.phone}</td>

                        <td>{user.email}</td>


                        <td>{user.country}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Table.propTypes = {
    listUsers: PropTypes.array,
    handleSelectUser: PropTypes.func,
};

export default Table;