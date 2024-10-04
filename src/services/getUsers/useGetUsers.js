// hooks/useAuthToken.js
import { useMutation } from 'react-query';
import { getUsers } from './getUsers';
import { useCallback } from 'react';

const GET_USERS = "getUsers";

export const useGetUsers = () => {

    const handleSuccess = useCallback((data, variables) => {
        const {
            setListUsers,
        } = variables;
        const userList = data.map(user => ({
            fullName: `${user.name.first} ${user.name.last}`,
            gender: user.gender,
            address: `${user.location.street.name} ${user.location.street.number}`,
            phone: user.phone,
            email: user.email,
            country: user.location.country,
            picture: user.picture.thumbnail,
        }));
        setListUsers?.(userList);
    }, []);

    const { mutate: getUsersRandom, isLoading, isError, error } = useMutation({
        cacheTime: 0,
        refetchOnWindowFocus: false,
        onSuccess: handleSuccess,
        mutationKey: [GET_USERS],
        mutationFn: getUsers,
    });
    
    return {
        isLoadingUsers: isLoading,
        isErrorUsers: isError,
        errorUsers: error,
        getUsers: getUsersRandom,
    };
};