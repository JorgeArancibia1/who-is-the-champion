import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import UserImg from '../../assets/UserImg';

interface InputPlayerProps {
	name: string;
	index: number;
	colorUser: string;
}

export const InputPlayer: FC<InputPlayerProps> = ({ name, index, colorUser }) => {
	const { control, getValues } = useFormContext();

	const initialValues = getValues(); // Obtener los valores iniciales de los campos

	return (
		<div className='flex items-center space-x-4'>
			<div className='flex flex-col items-center'>
				<div
					className={`w-8 h-8 pr-1 ${
						colorUser === 'blue' ? 'bg-blue-700' : 'bg-red-700'
					}  rounded-full flex items-center justify-center `}
				>
					<UserImg />
				</div>
				<label className='text-gray-400 text-xs'>Jugador {index + 1} </label>
			</div>
			<Controller
				name={name}
				control={control}
				defaultValue={initialValues[name]} // Pasar el valor inicial al campo
				render={({ field }) => (
					<input
						className='border border-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-200 text-gray-500 p-2 text-xs w-22 sm:w-44'
						placeholder='Player name'
						value={field.value}
						onChange={field.onChange}
					/>
				)}
			/>
		</div>
	);
};
