function Filters() {
    return (
        <div className="col-sm-12 mt-4 filtros-content">
            <div className="card border-0 shadow-sm">
                <div className="card-body ">
                    <div className="row py-3">
                        <div className="form-group  col-sm-12 col-lg-4 ">
                            <div className="input-group ">
                                <select className="form-select form-select-sm single-select select-bs">
                                    <optgroup label="NACIONALIDAD">
                                        <option value="1">US</option>
                                        <option value="2">AU</option>
                                        <option value="3">BR</option>
                                        <option value="4">CH</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="form-group  col-sm-12 col-lg-4 ">
                            <div className="input-group ">
                                <select className="form-select form-select-sm single-select select-bs">
                                    <optgroup label="GENERO">
                                        <option value="1">FEMALE</option>
                                        <option value="2">MALE</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <button className="btn btn-sm btn-primary px-4  btn-search">
                                <i className="bi bi-search me-2"></i> Buscar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filters;