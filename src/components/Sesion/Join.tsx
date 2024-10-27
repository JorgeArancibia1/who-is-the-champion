export const Join = ({
	closeSesion,
	openLogin,
}: {
	closeSesion: () => void;
	openLogin: () => void;
}) => {
	return (
		<>
			<div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-80'>
				<div className='relative p-4 bg-gray-800 w-full max-h-full max-w-md rounded-lg border'>
					<div className='flex items-center justify-between p-4 border-b border-gray-600'>
						<h3 className='text-2xl font-bold text-white'>Registrate</h3>
						<button
							type='button'
							className='text-gray-400 bg-transparent hover:text-white hover:bg-gray-600 flex items-center justify-center'
							onClick={closeSesion}
						>
							<svg
								className='w-3 h-3'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 14 14'
							>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6'
								/>
							</svg>
						</button>
					</div>
					<p className='text-sm font-medium text-gray-500 pt-1 text-left'>
						Si ya estas registrado ingresa{" "}
						<button
							className='bg-transparent p-0 text-sm text-blue-700 hover:underline hover:text-blue-600 focus:outline-none'
							onClick={openLogin}
						>
							AQUÍ
						</button>
					</p>
					<div className='p-4 md:p-5'>
						<form action='' className=''>
							<div>
								<label
									htmlFor='Nombre'
									className='font-semibold block mt-3 mb-1 text-left'
								>
									Nombre de Usuario
								</label>
								<input
									type='text'
									name='Nombre'
									id=''
									required
									className='border bg-gray-600 border-gray-500 text-sm rounded-lg w-full p-3 placeholder-gray-400 text-white'
								/>
							</div>
							<div>
								<label
									htmlFor='email'
									className='font-semibold block mt-3 mb-1 text-left'
								>
									Correo Electronico
								</label>
								<input
									type='email'
									name='email'
									id=''
									placeholder='correo@email.com'
									required
									className='border bg-gray-600 border-gray-500 text-sm rounded-lg w-full p-3 placeholder-gray-400 text-white'
								/>
							</div>
							<div>
								<label
									htmlFor='password'
									className='font-semibold block mt-3 mb-1 text-left'
								>
									Contraseña
								</label>
								<input
									type='password'
									name='password'
									id=''
									placeholder='••••••••'
									required
									className='border bg-gray-600 border-gray-500 text-sm rounded-lg w-full p-3 placeholder-gray-400 text-white'
								/>
							</div>
							<div>
								<label
									htmlFor='Celular'
									className='font-semibold mt-3 mb-1 text-left flex gap-2 '
								>
									Celular
									<p className='text-xs text-gray-500 pt-1'>(opcional)</p>
								</label>
								<input
									type='text'
									name='Celular'
									id=''
									required
									className='border bg-gray-600 border-gray-500 text-sm rounded-lg w-full p-3 placeholder-gray-400 text-white'
								/>
							</div>
							<button
								type='button'
								className='w-full my-3 pt-1 bg-blue-600 text-sm hover:bg-blue-700'
							>
								Registrate
							</button>
							<div className='relative'>
								<div className='absolute inset-0 flex items-center'>
									<span className='w-full border-t border-gray-600' />
								</div>
								<div className='relative flex justify-center text-xs uppercase'>
									<span className='bg-gray-800 px-2 text-gray-400'>O</span>
								</div>
							</div>
							<button
								type='button'
								className='w-full my-3 pt-1 bg-gray-950 text-sm flex items-center justify-center hover:bg-gray-700'
							>
								<svg
									className='mr-3 h-4 w-4'
									aria-hidden='true'
									focusable='false'
									data-prefix='fab'
									data-icon='google'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 488 512'
								>
									<path
										fill='currentColor'
										d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
									></path>
								</svg>
								Registrate Google
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
