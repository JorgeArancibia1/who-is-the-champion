import { useState } from 'react';
import { LoginIn } from './LoginIn';
import { Join } from './Join';

type Props = {
	showSesion: boolean;
};
export const ButtonSesion = (props: Props) => {
	const { showSesion } = props;

	const [isShowLogin, setIsShowLogin] = useState(false);
	const [isShowJoin, setIsShowJoin] = useState(false);

	const openLogin = () => {
		setIsShowLogin(true);
		setIsShowJoin(false);
	};

	const openJoin = () => {
		setIsShowJoin(true);
		setIsShowLogin(false);
	};

	const closeSesion = () => {
		setIsShowJoin(false);
		setIsShowLogin(false);
	};

	return (
		<>
			{showSesion ? (
				<div className='h-10 flex justify-end items-center mb-4 gap-3'>
					<button
						onClick={openJoin}
						type='button'
						className='text-blue-400 border-2 border-blue-400 bg-gray-700 py-1 hover:bg-blue-400 hover:text-black'
					>
						Registrarse
					</button>
					<button
						onClick={openLogin}
						type='button'
						className='text-green-400  border-2 border-green-400 bg-gray-700 py-1 hover:bg-green-400 hover:text-black'
					>
						Ingresar
					</button>
				</div>
			) : (
				''
			)}
			{isShowLogin && <LoginIn closeSesion={closeSesion} openJoin={openJoin} />}
			{isShowJoin && <Join closeSesion={closeSesion} openLogin={openLogin} />}
		</>
	);
};
