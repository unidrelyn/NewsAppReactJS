import { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
	const [categoria, setCategoria] = useState("");
	const [noticias, setNoticias] = useState([1]);

	useEffect(() => {
		const consultarAPI = async () => {
			const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=fe9ad5a2bccc495aa9ff61e58f6712d4`;

			const respuesta = await fetch(url);
			const noticias = await respuesta.json();
			setNoticias(noticias.articles);
		};
		consultarAPI();
	}, [categoria]);
	return (
		<Fragment>
			<Header titulo={"Buscador de Noticias"} />
			<div className="container white">
				<Formulario setCategoria={setCategoria} />

				<ListadoNoticias noticias={noticias} />
			</div>
		</Fragment>
	);
}

export default App;
