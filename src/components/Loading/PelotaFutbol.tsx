export const PelotaFutbol = () => {
	return (
		<div className='flex items-center justify-center min-h-screen bg-transparent'>
			<div className='animate-spin text-6xl'>⚽</div>

			{/* Texto opcional de carga */}
			<div className='ml-4'>
				<p className='text-white text-lg font-medium'>Cargando...</p>
			</div>
		</div>
	);
};
