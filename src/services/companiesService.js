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

function likedCandidates(companyId, candidateId){
    return http.get(endpoint + '/' +companyId + '/liked/' + candidateId)
}

const candidatesService = {
    getAllCompanies,
    getCompanyOffers,
    likedCandidates
}

export default candidatesService