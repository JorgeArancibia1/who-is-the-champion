import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Admin } from "../views/Admin";
import { Home } from "../views/Home";

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className='main-layout'>
				<nav>
					<ul>
						<li>
							<NavLink to='/' className={({isActive}) => isActive ? 'nav-active' : '' }>Home</NavLink>
						</li>
						<li>
							<NavLink to='/admin' className={({isActive}) => isActive ? 'nav-active' : '' }>Admin</NavLink>
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
