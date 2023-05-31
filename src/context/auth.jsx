import { createContext, useReducer, useContext } from 'react'

import authService from '../services/authService'

const user = authService.getCurrentUser()

const defaultValues = !user ? { isAuth: false } : { isAuth: true, ...user }

const AuthContext = createContext(defaultValues)
AuthContext.displayName = 'AuthProvider'

const reducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN': {
			return { isAuth: true, ...action.payload }
		}

		case 'LOGOUT': {
			return { isAuth: false }
		}

		default:
			return state
	}
}

export function AuthProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, defaultValues)

	return (
		<AuthContext.Provider value={[state, dispatch]}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
