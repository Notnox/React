import axios from 'axios';

import * as constants from './Constantes';

const BASE_URL = `${constants.DEVINHOUSE_API}/tAlunos`;

class AlunoService {
    buscarAlunos() {
        return axios.get(BASE_URL)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }

    excluirAluno(id) {
		return axios.delete(`${BASE_URL}/${id}`)
            .catch(error => {
				throw error;
			});
    }
}

export default new AlunoService()