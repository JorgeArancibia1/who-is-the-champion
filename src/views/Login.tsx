import {
	Activity,
	Lock,
	Mail,
	Shield,
	Trophy,
	User,
	Users,
	Zap,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface FormData {
	email: string;
	password: string;
	name?: string;
	confirmPassword?: string;
}

export const LoginView: React.FC = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [formData, setFormData] = useState<FormData>({
		email: '',
		password: '',
		name: '',
		confirmPassword: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});
	const [showSuccess, setShowSuccess] = useState(false);

	// Animación de partículas de fútbol
	const [particles, setParticles] = useState<
		Array<{ id: number; x: number; y: number }>
	>([]);

	useEffect(() => {
		const newParticles = Array.from({ length: 8 }, (_, i) => ({
			id: i,
			x: Math.random() * 100,
			y: Math.random() * 100,
		}));
		setParticles(newParticles);
	}, []);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		setFieldErrors((prev) => ({ ...prev, [name]: false }));
	};

	const handleSubmit = () => {
		// Validación básica
		if (!formData.email || !formData.password) {
			setFieldErrors({
				email: !formData.email,
				password: !formData.password,
			});
			return;
		}

		if (!isLogin && formData.password !== formData.confirmPassword) {
			setFieldErrors({ confirmPassword: true });
			return;
		}

		setIsLoading(true);

		// Simulación de envío
		setTimeout(() => {
			setIsLoading(false);
			setShowSuccess(true);
			setTimeout(() => setShowSuccess(false), 3000);
			console.log(isLogin ? 'Login exitoso' : 'Registro exitoso', formData);
		}, 2000);
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleSubmit();
		}
	};

	const toggleMode = () => {
		setIsLogin(!isLogin);
		setFormData({ email: '', password: '', name: '', confirmPassword: '' });
		setFieldErrors({});
		setShowSuccess(false);
	};

	return (
		<div className='min-h-screen w-screen bg-gradient-to-br from-green-900 via-green-700 to-emerald-900 flex items-center justify-center p-4  relative overflow-hidden'>
			{/* Animated Background Elements */}
			<div className='absolute inset-0'>
				{/* Animated gradient overlay */}
				<div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent'></div>

				{/* Soccer field pattern */}
				<div className='absolute inset-0 opacity-10'>
					<div
						className='h-full w-full'
						style={{
							backgroundImage: `
              repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 100px),
              repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 100px)
            `,
						}}
					></div>
				</div>

				{/* Floating soccer balls with different animations */}
				{particles.map((particle) => (
					<div
						key={particle.id}
						className='absolute'
						style={{
							left: `${particle.x}%`,
							top: `${particle.y}%`,
							animation: `float${particle.id % 3} ${
								15 + particle.id * 2
							}s ease-in-out infinite`,
						}}
					>
						<div className='relative'>
							<div className='w-12 h-12 bg-white rounded-full opacity-5 blur-md animate-pulse'></div>
							<div className='absolute inset-0 w-12 h-12 bg-gradient-to-br from-white/20 to-transparent rounded-full'></div>
						</div>
					</div>
				))}
			</div>

			{/* Success Notification */}
			{showSuccess && (
				<div className='fixed top-8 left-1/2 transform -translate-x-1/2 z-50 animate-bounce'>
					<div className='bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2'>
						<Shield className='w-5 h-5' />
						<span className='font-semibold'>
							{isLogin ? '¡Bienvenido de vuelta!' : '¡Registro exitoso!'}
						</span>
					</div>
				</div>
			)}

			{/* Main Container */}
			<div className='relative z-10 w-full max-w-md md:max-w-lg transform hover:scale-105 transition-transform duration-500'>
				{/* Glass Card with enhanced effects */}
				<div className='backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 rounded-3xl shadow-2xl border border-white/20 overflow-hidden'>
					{/* Animated Header */}
					<div className='relative p-8 pb-6 text-center bg-gradient-to-b from-white/20 to-transparent'>
						{/* Glowing effect */}
						<div className='absolute inset-0 bg-gradient-to-b from-yellow-400/10 to-transparent animate-pulse'></div>

						{/* Trophy Icon with Complex Animation */}
						<div className='relative inline-flex items-center justify-center w-24 h-24 mb-4'>
							<div className='absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full animate-spin-slow opacity-20 blur-xl'></div>
							<div className='relative w-20 h-20 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 rounded-full shadow-2xl flex items-center justify-center animate-bounce'>
								<Trophy className='w-12 h-12 text-white drop-shadow-lg' />
							</div>
						</div>

						<h1 className='text-4xl md:text-5xl font-black text-white mb-2 tracking-tight'>
							FútbolApp{' '}
							<span className='inline-block animate-spin-slow'>⚽</span>
						</h1>
						<p className='text-white/80 text-sm md:text-base font-medium'>
							{isLogin
								? 'Tu pasión, nuestro campo'
								: 'Únete a la revolución del fútbol'}
						</p>
					</div>

					{/* Animated Toggle Buttons */}
					<div className='flex mx-6 mb-6 p-1 bg-black/30 rounded-full backdrop-blur-sm'>
						<button
							onClick={() => !isLogin && toggleMode()}
							className={`flex-1 py-3 px-4 rounded-full font-bold transition-all duration-500 ${
								isLogin
									? 'bg-gradient-to-r from-white to-gray-100 text-green-800 shadow-xl transform scale-105'
									: 'text-white/60 hover:text-white hover:bg-white/10'
							}`}
						>
							<span className='flex items-center justify-center'>
								<User className='w-4 h-4 mr-2' />
								Iniciar Sesión
							</span>
						</button>
						<button
							onClick={() => isLogin && toggleMode()}
							className={`flex-1 py-3 px-4 rounded-full font-bold transition-all duration-500 ${
								!isLogin
									? 'bg-gradient-to-r from-white to-gray-100 text-green-800 shadow-xl transform scale-105'
									: 'text-white/60 hover:text-white hover:bg-white/10'
							}`}
						>
							<span className='flex items-center justify-center'>
								<Zap className='w-4 h-4 mr-2' />
								Registrarse
							</span>
						</button>
					</div>

					{/* Form Fields */}
					<div className='px-6 pb-6' onKeyPress={handleKeyPress}>
						<div
							className={`space-y-4 transition-all duration-500 ${
								isLoading ? 'opacity-50 pointer-events-none' : ''
							}`}
						>
							{/* Name Field (only for register) */}
							<div
								className={`transition-all duration-500 transform ${
									!isLogin
										? 'scale-100 opacity-100 max-h-20'
										: 'scale-95 opacity-0 max-h-0 overflow-hidden'
								}`}
							>
								<div className='relative group'>
									<User className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-amber-400 transition-colors z-10' />
									<input
										type='text'
										name='name'
										value={formData.name}
										onChange={handleInputChange}
										placeholder='Nombre completo'
										className='w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-amber-400/50 focus:bg-white/15 transition-all duration-300 hover:bg-white/15'
										disabled={isLoading}
									/>
								</div>
							</div>

							{/* Email Field */}
							<div className='relative group'>
								<Mail className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-amber-400 transition-colors z-10' />
								<input
									type='email'
									name='email'
									value={formData.email}
									onChange={handleInputChange}
									placeholder='Correo electrónico'
									className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-2 ${
										fieldErrors.email ? 'border-red-400/50' : 'border-white/20'
									} rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-amber-400/50 focus:bg-white/15 transition-all duration-300 hover:bg-white/15`}
									disabled={isLoading}
								/>
							</div>

							{/* Password Field */}
							<div className='relative group'>
								<Lock className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-amber-400 transition-colors z-10' />
								<input
									type='password'
									name='password'
									value={formData.password}
									onChange={handleInputChange}
									placeholder='Contraseña'
									className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-2 ${
										fieldErrors.password
											? 'border-red-400/50'
											: 'border-white/20'
									} rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-amber-400/50 focus:bg-white/15 transition-all duration-300 hover:bg-white/15`}
									disabled={isLoading}
								/>
							</div>

							{/* Confirm Password (only for register) */}
							<div
								className={`transition-all duration-500 transform ${
									!isLogin
										? 'scale-100 opacity-100 max-h-20'
										: 'scale-95 opacity-0 max-h-0 overflow-hidden'
								}`}
							>
								<div className='relative group'>
									<Lock className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-amber-400 transition-colors z-10' />
									<input
										type='password'
										name='confirmPassword'
										value={formData.confirmPassword}
										onChange={handleInputChange}
										placeholder='Confirmar contraseña'
										className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-2 ${
											fieldErrors.confirmPassword
												? 'border-red-400/50'
												: 'border-white/20'
										} rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-amber-400/50 focus:bg-white/15 transition-all duration-300 hover:bg-white/15`}
										disabled={isLoading}
									/>
								</div>
							</div>

							{/* Options */}
							<div className='flex items-center justify-between text-sm'>
								{isLogin ? (
									<>
										<label className='flex items-center text-white/60 hover:text-white/80 cursor-pointer transition-colors'>
											<input
												type='checkbox'
												className='mr-2 rounded bg-white/10 border-white/20'
											/>
											Recordarme
										</label>
										<button
											type='button'
											className='text-amber-400/80 hover:text-amber-400 transition-colors font-medium'
										>
											¿Olvidaste tu contraseña?
										</button>
									</>
								) : (
									<label className='flex items-center text-white/60 hover:text-white/80 cursor-pointer transition-colors'>
										<input
											type='checkbox'
											className='mr-2 rounded bg-white/10 border-white/20'
										/>
										Acepto los términos y condiciones del juego
									</label>
								)}
							</div>

							{/* Submit Button with Advanced Animation */}
							<button
								onClick={handleSubmit}
								disabled={isLoading}
								className='relative w-full py-4 font-black text-lg rounded-2xl shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group'
							>
								{/* Gradient Background */}
								<div className='absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600'></div>

								{/* Animated Shine Effect */}
								<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>

								{/* Button Content */}
								<span className='relative z-10 flex items-center justify-center text-white'>
									{isLoading ? (
										<>
											<Activity className='w-5 h-5 animate-spin mr-2' />
											Procesando...
										</>
									) : (
										<>
											{isLogin ? '⚽ Entrar al Partido' : '🏆 Unirme al Equipo'}
										</>
									)}
								</span>
							</button>
						</div>
					</div>

					{/* Social Login with Icons */}
					<div className='px-6 pb-8'>
						<div className='relative mb-6'>
							<div className='absolute inset-0 flex items-center'>
								<div className='w-full border-t border-white/20'></div>
							</div>
							<div className='relative flex justify-center text-sm'>
								<span className='px-4 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-full text-white/70'>
									O continúa con
								</span>
							</div>
						</div>

						<div className='grid sm:grid-cols-1 gap-3'>
							<button className='group w-full flex items-center justify-center py-3 px-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl'>
								<svg className='w-5 h-5 mr-3' viewBox='0 0 24 24'>
									<path fill='#4285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' />
									<path fill='#34A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' />
									<path fill='#FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z' />
									<path fill='#EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' />
								</svg>
								Continuar con Google
							</button>							{/* <button className='group w-full flex items-center justify-center py-3 px-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl'>
								<svg className='w-5 h-5 mr-3' viewBox='0 0 24 24' fill='#1877F2'>
									<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
								</svg>
								Continuar con Facebook
							</button>
 */}
						</div>
					</div>

					{/* Animated Stats Footer */}
					<div className='bg-gradient-to-t from-black/40 to-black/20 backdrop-blur-sm px-6 py-5 flex items-center justify-center space-x-8'>
						<div className='flex items-center text-white/70 hover:text-white transition-colors cursor-pointer group'>
							<Users className='w-5 h-5 mr-2 group-hover:animate-pulse' />
							<span className='text-sm font-semibold'>+10K Jugadores</span>
						</div>
						<div className='flex items-center text-white/70 hover:text-white transition-colors cursor-pointer group'>
							<Trophy className='w-5 h-5 mr-2 group-hover:animate-spin' />
							<span className='text-sm font-semibold'>500+ Ligas</span>
						</div>
					</div>
				</div>
			</div>

			<style>{`
				@keyframes float0 {
					0%,
					100% {
						transform: translate(0, 0) rotate(0deg);
					}
					25% {
						transform: translate(30px, -30px) rotate(90deg);
					}
					50% {
						transform: translate(-20px, -50px) rotate(180deg);
					}
					75% {
						transform: translate(-40px, -20px) rotate(270deg);
					}
				}
				@keyframes float1 {
					0%,
					100% {
						transform: translate(0, 0) rotate(0deg);
					}
					33% {
						transform: translate(-40px, 40px) rotate(120deg);
					}
					66% {
						transform: translate(40px, -20px) rotate(240deg);
					}
				}
				@keyframes float2 {
					0%,
					100% {
						transform: translate(0, 0) rotate(0deg);
					}
					20% {
						transform: translate(20px, 20px) rotate(72deg);
					}
					40% {
						transform: translate(-30px, 40px) rotate(144deg);
					}
					60% {
						transform: translate(40px, -30px) rotate(216deg);
					}
					80% {
						transform: translate(-20px, -40px) rotate(288deg);
					}
				}
				@keyframes spin-slow {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}
				.animate-spin-slow {
					animation: spin-slow 8s linear infinite;
				}
			`}</style>
		</div>
	);
};