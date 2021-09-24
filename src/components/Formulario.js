import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";
import PropTypes from "prop-types";

const Formulario = ({ setCategoria }) => {
	const OPCIONES = [
		{ value: "general", label: "general" },
		{ value: "business", label: "Negocios" },
		{ value: "entertainment", label: "Entretenimiento" },
		{ value: "health", label: "Salud" },
		{ value: "science", label: "Ciencia" },
		{ value: "sports", label: "Deportes" },
		{ value: "technology", label: "Tecnologia" },
	];

	const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

	const buscarNoticia = (e) => {
		e.preventDefault();
		setCategoria(categoria);
	};

	return (
		<div className={`${styles.buscardor} row`}>
			<div className="col s12 m8 offset-m2">
				<form onSubmit={buscarNoticia}>
					<h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
					<SelectNoticias />
					<div className="input-field col s12">
						<input
							type="submit"
							className={`${styles.btn_block} btn-large amber darken-2`}
							value="Buscar"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

Formulario.propTypes = {
	setCategoria: PropTypes.func.isRequired,
};
export default Formulario;
