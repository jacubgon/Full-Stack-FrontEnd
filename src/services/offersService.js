import http from './httpService'

import config from  '../config.json'

const endpoint = config.apiURL + '/offers'

function getEndpoint(id) {
	return !id ? endpoint : endpoint + '/' + id
}

function getAllOffers(){
    return http.get(getEndpoint())
}

function createOffer(payload) {
	return http.post(getEndpoint(), payload)
}

function getOfferById(id) {
	return http.get(getEndpoint(id))
}

function updateOffer(id, payload) {
	return http.put(getEndpoint(id), payload)
}

function deleteOffer(id) {
	return http.delete(getEndpoint(id))
}

const offersService = {
    getAllOffers,
    createOffer,
    getOfferById,
    updateOffer,
    deleteOffer
    
}

export default offersService