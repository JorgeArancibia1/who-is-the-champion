import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Admin } from '../views/Admin';
import { Home } from '../views/Home';

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className='main-layout text-sm'>
				<nav>
					<ul className='flex justify-center space-x-2'>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive
										? 'text-blue-400'
										: 'text-white trasition-all duration-300 ease-out hover:text-blue-500'
								}
							>
								Home
							</NavLink>
						</li>
						<li>|</li>
						<li>
							<NavLink
								to='/admin'
								className={({ isActive }) =>
									isActive
										? 'text-blue-400'
										: 'text-white trasition-all duration-500 ease-out hover:text-blue-500'
								}
							>
								Admin
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path='admin' element={<Admin />} />
					<Route path='/' element={<Home />} />
					<Route path='/*' element={<h1>No se ha encontrado la página</h1>} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
