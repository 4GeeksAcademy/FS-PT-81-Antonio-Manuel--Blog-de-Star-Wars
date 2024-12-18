import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Navbar = () => {

	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand  ms-4 mb-0 "> <img src="https://img.icons8.com/color/512/star-wars.png" alt="Star Wars" width="100" height="100" /></span>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNavDarkDropdown">
					<ul className="navbar-nav">
					<li className="nav-item dropdown">
							<button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								Deleted
							</button>
							<ul className="dropdown-menu dropdown-menu-dark">
								{store.delete?.length === 0 ? (
									<p>No tienes eliminados todavía.</p>) : (store.delete?.map((del, uid) => (
										<li key={uid}
											className="dropdown-item d-flex justify-content-between align-items-center"
										>
											{del.name}
											<button className="btn btn-secondary fa-solid fa-trash text-black ms-4 text-center btn-sm" onClick={() => actions.addDelete(del)}></button>
										</li>
									))
								)}
							</ul>
						</li>
						<li className="nav-item dropdown">
							<button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
							</button>
							<ul className="dropdown-menu dropdown-menu-dark">
								{store.favorito?.length === 0 ? (
									<p>No tienes favoritos todavía.</p>) : (store.favorito?.map((fav, uid) => (
										<li key={uid}
											className="dropdown-item d-flex justify-content-between align-items-center"
										>
											{fav.name}
											<button className="btn btn-secondary fa-solid fa-trash text-black ms-4 text-center btn-sm" onClick={() => actions.addFav(fav)}></button>
										</li>
									))
								)}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>

	);
};
