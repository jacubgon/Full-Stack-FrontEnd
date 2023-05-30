import { Outlet } from 'react-router-dom'

function Layout() {
	return (
		<>
			<h2>Hola</h2>
            <Outlet />
            
		</>
	)
}

export default Layout