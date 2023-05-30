import http from './httpService'

import config from  '../config.json'

const endpoint = config.apiURL + '/companies'

function getEndpoint(id) {
	return !id ? endpoint : endpoint + '/' + id
}

function getAllCompanies(){
    return http.get(getEndpoint())
}

const candidatesService = {
    getAllCompanies
}

export default candidatesService