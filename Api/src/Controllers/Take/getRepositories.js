const axios = require('axios');

const { take_repositories_api } = require('../../Services/Take');

async function getRepositories() {
	let data = await axios.get(take_repositories_api)
		.then(response => {
			return response.data;
		}).catch(erro => {
			return erro;
		});

	if (data.erro) {
		return { erro: data.erro }
	}

	data = data.map(repositories => {
		return {
			nome: repositories.name,
			descricao: repositories.description,
			dt_criacao: repositories.created_at
		}
	});

	return data;
}

module.exports = getRepositories;