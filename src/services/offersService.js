import http from './httpService'

import config from  '../config.json'

const endpoint = config.apiURL + '/offers'

function getEndpoint(id) {
	return !id ? endpoint : endpoint + '/' + id
}

function getAllOffers(){
    return http.get(getEndpoint())
}

const offersService = {
    getAllOffers
}

export default offersService