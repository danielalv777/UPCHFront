// Hooks
import { useCallback, useEffect, useState } from "react";
import { useGetUsers } from "../../services/getUsers/useGetUsers";

export default function useHome() {
    
    const getUsersMutation = useGetUsers();
    const [isOpenFilter, setOpenFilter] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [listUsers, setListUsers] = useState([]);
    const [userSelected, setUserSelected] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalDeleteOpen, setModalDeleteOpen] = useState(false);

    const handleOpenFilters = () => {
        setOpenFilter(prevValue => !prevValue);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevCount => prevCount - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(prevCount => prevCount + 1);
    };

    const handleSelectUser = useCallback((user) => {
        setUserSelected(user);
    }, []);

    const CloseModal = () => {
        setIsModalOpen(false);
    };

    const CloseModalDelete = () => {
        setModalDeleteOpen(false);
    };

    const handleEditUser = () => {
        setIsModalOpen(true);
    };

    const handleDeleteUser = () => {
        setModalDeleteOpen(true);
    };

    const handleInputChange = (e) => {
        if (e.target) {
            const { name, value } = e.target;
            setUserSelected((prevUser) => ({
              ...prevUser,
              [name]: value,
            }));
        } else {
            setUserSelected((prevUser) => ({
                ...prevUser,
                gender: e.value,
            }));
        }
    };

    const handleUpdateUser = useCallback(() => {
        setListUsers((prevUsers) =>
            prevUsers.map((user) => (user.email === userSelected.email ? userSelected : user))
        );
        setIsModalOpen(false);
    },[userSelected]);

    const handleApplyDelete = useCallback(() => {
        setListUsers((prevUsers) => prevUsers.filter((user) => user.email !== userSelected.email));
        setModalDeleteOpen(false);
    }, [listUsers, userSelected])

    useEffect(() => {
        getUsersMutation.getUsers({
            pageParam: currentPage,
            setListUsers: setListUsers,
        })
    }, [currentPage]);
    
    return {
        isOpenFilter: isOpenFilter,
        listUsers: listUsers,
        handleOpenFilters: handleOpenFilters,
        currentPage: currentPage,
        handlePreviousPage: handlePreviousPage,
        handleNextPage: handleNextPage,
        handleSelectUser: handleSelectUser,
        isModalOpen: isModalOpen,
        CloseModal: CloseModal,
        handleEditUser: handleEditUser,
        handleDeleteUser: handleDeleteUser,
        userSelected: userSelected,
        handleInputChange: handleInputChange,
        handleUpdateUser: handleUpdateUser,
        isModalDeleteOpen: isModalDeleteOpen,
        CloseModalDelete: CloseModalDelete,
        handleApplyDelete: handleApplyDelete,
    };
}