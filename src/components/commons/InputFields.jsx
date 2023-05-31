import { Input as StyledInput, Label } from '../lib'

function Input({ label, register, name, ...rest }) {
	return (
		<div>
			<Label htmlFor={name}>{label}</Label>
			<StyledInput id={name} {...register(name)} {...rest} />
		</div>
	)
}

function Select({
	label,
	options,
	name,
	register,
	selectedOption = false,
	...rest
}) {
	return (
		<div>
			<Label htmlFor={name}>{label}</Label>
			<select
				defaultValue={selectedOption}
				className="form-select"
				aria-label="Default select example"
				{...register(name)}
				{...rest}
			>
				<option value="0">Orden</option>

				{options.map((option, i) => (
					<option key={i} value={option.path}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}

export { Input, Select }
