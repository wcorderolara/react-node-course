import departamentosApi from '../departamentos';

export const getDepartamentos = async() => {
    const response = await departamentosApi.get('/departamentos');
    return response;
}
