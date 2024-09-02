import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface InputPlayerProps {
	name: string;
	index: number;
}

const InputPlayer: FC<InputPlayerProps> = ({ name, index }) => {
	const { control, getValues } = useFormContext();
	// console.log(getValues());
	const initialValues = getValues(); // Obtener los valores iniciales de los campos

	return (
		<div>
			<label>Jugador {index + 1}:</label>
			<Controller
				name={name}
				control={control}
				defaultValue={initialValues[name]} // Pasar el valor inicial al campo
				render={({ field }) => (
					<input value={field.value} onChange={field.onChange} />
				)}
			/>
		</div>
	);
};

export default InputPlayer;
