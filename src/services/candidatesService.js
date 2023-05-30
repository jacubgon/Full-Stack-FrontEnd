import http from './httpService'

import config from  '../config.json'

const endpoint = config.apiURL + '/candidates'

function getEndpoint(id) {
	return !id ? endpoint : endpoint + '/' + id
}

function getAllCandidates(){
    return http.get(getEndpoint())
}

const candidatesService = {
    getAllCandidates
}

export default candidatesService