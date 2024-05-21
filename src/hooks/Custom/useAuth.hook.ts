import { IFormLogin } from '@/models';
import { login } from '@/services';
import useFetchAndLoad from '../useFetchAndLoad';

export const useAuth = () => {
    const { loading, callEndpoint } = useFetchAndLoad();
    const startLogin = async (form: IFormLogin) => {
        console.log({ ...form });
        await callEndpoint(login(form));
    };
    return { startLogin, loading };
};
