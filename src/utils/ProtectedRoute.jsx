import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/auth'

const ProtectedRoute = ({ role, children }) => {
	const [user] = useAuth()

	if (user.role === role ) return children
	if (role === 'notAuth' && !user.isAuth) return children

	if (role === 'isAuth' || role === 'isAdmin') return <Navigate to="/login" />

	return <Navigate to="/" replace />
}

export default ProtectedRoute
