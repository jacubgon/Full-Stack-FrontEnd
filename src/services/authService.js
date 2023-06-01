import http from './httpService'
import { decodeToken } from 'react-jwt'
import config from '../config.json'

const endpointCandidates = config.apiURL + '/candidates'
const endpointCompanies = config.apiURL + '/companies'

function setJWT(jwt) {
	localStorage.setItem('token', jwt)
	http.setToken(jwt)
	

	return decodeToken(jwt)
}

async function signup(payload) {
	const { headers } = await http.post(endpointCandidates + '/signup', payload)
	let token = headers['x-auth-token']
if (!token)	{
	const { headers } = await http.post(endpointCompanies + '/signup', payload)
	token = headers['x-auth-token']
}

	return setJWT(token)
}

async function signupCompany(payload) {
	const { headers } = await http.post(endpointCompanies + '/signup', payload)

	return setJWT(headers['x-auth-token'])
}

async function login(payload) {
	const { headers } = await http.post(endpointCandidates + '/signin', payload)

	return setJWT(headers['x-auth-token'])
}

// async function login(payload) {
// 	const { headers } = await http.post(endpointCompanies + '/signin', payload)

// 	return setJWT(headers['x-auth-token'])
// }

function logout() {
	localStorage.removeItem('token')
}

function getCurrentUser() {
	try {
		const jwt = localStorage.getItem('token')

		if (!jwt) return null

		http.setToken(jwt)

		return decodeToken(jwt)
	} catch (err) {
		console.log(err)
	}
}

const authService = {
	signup,
	signupCompany,
	login,
	logout,
	getCurrentUser,
}

export default authService
