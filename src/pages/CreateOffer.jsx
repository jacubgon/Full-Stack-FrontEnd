import Form from '../components/commons/Form'
import offersService from '../services/offersService'
import { Link } from '../components/lib'
import {useAuth} from '../context/auth'
import { useNavigate } from "react-router-dom";

function CreateOffer() {

	const [user, dispatch] = useAuth()
	const navigate = useNavigate();

	const handleCreate = (data) => {
const offerDetails = { ...data, empresaId: user._id }
console.log(offerDetails);
		offersService
			.createOffer(offerDetails)
			.then(() => {
				console.log('Offer created successfully!');
				console.log(data);
				navigate(-1)
			
		})	
	
	}
	return (
		<>
			<Form
				inputs={[
				{ name: 'titulo', label: 'Título' },
                { name: 'descripcion', label: 'Descripcion' },
                { name: 'requisitos', label: 'Requisitos' }]}
				header="Crear Oferta"
				submitLabel="Crear"
				onSubmit={handleCreate}
				isResetAfterSubmit
			/>

			<Link to="/offers">Volver</Link>
		</>
	)
}
export default CreateOffer
