import http from './httpService'

import config from  '../config.json'

const endpoint = config.apiURL + '/companies'

function getEndpoint(id) {
	return !id ? endpoint : endpoint + '/' + id
}

function getAllCompanies(){
    return http.get(getEndpoint())
}

function getCompanyOffers(id){
    return http.get(endpoint + '/' + id + '/offers')
}

const candidatesService = {
    getAllCompanies,
    getCompanyOffers
}

export default candidatesService