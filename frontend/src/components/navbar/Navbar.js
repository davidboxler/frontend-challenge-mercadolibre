import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo_ml.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsGift } from "react-icons/bs";
import { HiOutlineLocationMarker, HiOutlineShoppingCart } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Navbar.scss";

const Navbar = () => {
	const navigate = useNavigate()

	const [searchInput, setSearchInput] = useState();
	const updateInput = (e) => {
		let value = e.target.value;
		setSearchInput(value);
	}

	const searchData = (e) => {
		e.preventDefault()

		if (window.location.href.includes('search')) {
			navigate(`/items?search=${searchInput}`)
			window.location.reload();
		} else {
			navigate(`/items?search=${searchInput}`)
		}
	}

	return (
		<nav className="nav-navbar">
			<div className="main-container">
				<div className="navbar-search-container">
					<img
						className="header-logo"
						src={logo}
						alt="Logo de Mercado Libre"
					/>
					<form className='search-input-container' noValidate autoComplete="off" onSubmit={searchData}>
						<input className='search-input' type='text' onChange={updateInput} />
						<button className="search-icon" type='submit'>
							<AiOutlineSearch />
						</button>
					</form>

					<div className="free-shipping">
						<BsGift size="25px" />
						<h3>Envios gratis a partir de $4.500</h3>
					</div>
				</div>

				<div className="navbar-main-container">
					<div className="navbar-shipping-and-buttons">
						<div className="shipping-address">
							<HiOutlineLocationMarker className="address-icon" />
							<div>
								<p className="send-to">Enviar a</p>
								<p className="address">Buenos Aires 1337</p>
							</div>
						</div>

						<div className="navbar-buttons">
							<button>
								Categorias
								<MdKeyboardArrowDown className="arrow-categoriesBtn" />
							</button>
							<button>Ofertas</button>
							<button>Historial</button>
							<button>Supermercado</button>
							<button>Moda</button>
							<button>Vender</button>
							<button>Ayuda</button>

						</div>
					</div>

					<div className="navbar-buttons-account">
						<button>Crea tu cuenta</button>
						<button>Ingresa</button>
						<button>Mis compras</button>
						<HiOutlineShoppingCart className="cart-icon" />
					</div>
				</div>
			</div>
		</nav >
	);
}

export default Navbar;