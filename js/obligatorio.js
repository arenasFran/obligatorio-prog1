document.addEventListener("DOMContentLoaded", () => {
	renderContentLoginHTML();
	renderNavHTML();
});

const HTMLNAVBAR = document.querySelector(".navBar");
HTMLNAVBAR.classList.add("fade-in-nav");
const HTMLSECTION = document.getElementById("SECTION");
let renderSection = "";
let renderNavBar = "";
let userLoged = "";
let isAdmin = false;
let isComprador = false;
let isInSales = false;
let contadorAdministradores = 1;
let contadorCompradores = 1;
let isNightMode = false;

class Sistema {
	constructor() {
		this.listaAdministradores = [
			new Administrador("juan", "juan123"),
			new Administrador("pedro", "pedro123"),
			new Administrador("Alberto2024", "Alberto2024"),
			new Administrador("programadorAdmin", "Ort2099"),
			new Administrador("soyCoder", "Codigo99"),
		];
		this.listaCompradores = [
			new Comprador(
				"alberto",
				"Fernandez",
				"alberto123",
				"contraseñaFuerte0",
				"5555-1456-2858-9999",
				"124"
			),
			new Comprador(
				"fran",
				"Rodriguez",
				"fran123",
				"contraseñaFuerte1",
				"1115-1366-9858-7799",
				"115"
			),
			new Comprador(
				"Pedro",
				"Watiimo",
				"pedrowatt",
				"contraseñaFuerte2",
				"1115-1366-9858-7799",
				"195"
			),
			new Comprador(
				"Luis",
				"Lacalle",
				"luislacalle",
				"contraseñaFuerte99999",
				"1115-1366-9858-7799",
				"999"
			),
			new Comprador(
				"Lionel",
				"Messi",
				"leomessi",
				"leoMessiElMejor",
				"1115-1366-9858-7799",
				"000"
			),
		];
		this.listaProductos = [
			new Producto(
				"Guantes de boxeo",
				"Este es el producto 1 y su descripción de guantes de boxeo",
				"https://m.media-amazon.com/images/I/51esH1W-asL._AC_UF1000,1000_QL80_.jpg",
				99,
				200,
				true
			),
			new Producto(
				"Pelota de Fútbol",
				"Pelota de fútbol profesional de alta calidad.",
				"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/%D0%A4%D0%9A_%22%D0%9A%D0%BE%D0%BB%D0%BE%D1%81%22_%28%D0%97%D0%B0%D1%87%D0%B5%D0%BF%D0%B8%D0%BB%D0%BE%D0%B2%D0%BA%D0%B0%2C_%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%29_-_%D0%A4%D0%9A_%22%D0%91%D0%B0%D0%BB%D0%BA%D0%B0%D0%BD%D1%8B%22_%28%D0%97%D0%B0%D1%80%D1%8F%2C_%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%29_%2818790931100%29.jpg/800px-thumbnail.jpg",
				35,
				150,
				true
			),
			new Producto(
				"Raqueta de Tenis",
				"Raqueta de tenis ligera y resistente para jugadores avanzados.",
				"https://t1.uc.ltmcdn.com/es/posts/6/9/5/tipos_de_deportes_con_raqueta_52596_orig.jpg",
				120,
				5,
				true
			),
			new Producto(
				"Bicicleta de Montaña",
				"Bicicleta de montaña con suspensión total y frenos de disco.",
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyetlWe_qkbTADZpDQjf81XtUYpBeuSpefkw&s",
				450,
				30,
				true
			),
			new Producto(
				"Guantes de mma",
				"Guantes de boxeo de cuero con relleno extra para mayor protección.",
				"https://m.media-amazon.com/images/I/71gGKDXdoPL._AC_UF1000,1000_QL80_.jpg",
				85,
				200,
				true
			),
			new Producto(
				"Zapatillas para Correr",
				"Zapatillas ligeras y cómodas diseñadas para maratones.",
				"https://www.hola.com/us/images/0275-1520a8373d35-1d24cebc0cf6-1000/horizontal-1200/balenciaga-zapatillas.jpg",
				60,
				100,
				true,
			),
			new Producto(
				"Pesas Ajustables",
				"Juego de pesas ajustables con incrementos de 2.5 kg.",
				"https://m.media-amazon.com/images/I/71CxDTwx03L._AC_UF894,1000_QL80_.jpg",
				150,
				50,
				true
			),
			new Producto(
				"Casco de Ciclismo",
				"Casco de ciclismo aerodinámico con ventilación mejorada.",
				"https://images.ecestaticos.com/oRpsnZZrRBfcZAzDhIseaACvYFk=/1x151:999x659/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fbd5%2Fa89%2Fc26%2Fbd5a89c26e32422bc1677edcdf1579e6.jpg",
				45,
				120,
				true
			),
			new Producto(
				"Traje de Neopreno",
				"Traje de neopreno de 3mm ideal para deportes acuáticos.",
				"https://contents.mediadecathlon.com/p1554251/k$9dd3c3eebf92602ef08663c0bd20cd6a/neopreno-surf-hombre-agua-fria-4slash3mm-negro.jpg?format=auto&quality=40&f=800x800",
				180,
				25,
				true
			),
			new Producto(
				"Saco de Dormir",
				"Saco de dormir ultraligero para acampada y senderismo.",
				"https://http2.mlstatic.com/D_NQ_NP_889663-MLU73954308613_012024-O.webp",
				70,
				80,
				true
			),
		];
		this.listaCompras = [
			new compra({
				usuario: "fran123",
				producto: this.listaProductos[1],
				precio: this.listaProductos[1].precio,
				howMany: 3,
			}),
			new compra({
				usuario: "fran123",
				producto: this.listaProductos[0],
				precio: this.listaProductos[0].precio,
				howMany: 1,
			}),
			new compra({
				usuario: "fran123",
				producto: this.listaProductos[9],
				precio: this.listaProductos[9].precio,
				howMany: 1,
			}),
			new compra({
				usuario: "luislacalle",
				producto: this.listaProductos[5],
				precio: this.listaProductos[5].precio,
				howMany: 2,
			}),
			new compra({
				usuario: "luislacalle",
				producto: this.listaProductos[6],
				precio: this.listaProductos[6].precio,
				howMany: 5,
			}),
		];
	}

	esUsuarioUnico(usuario) {
		for (let comprador of this.listaCompradores) {
			if (comprador.usuario === usuario) {
				return false;
			}
		}

		for (let admin of this.listaAdministradores) {
			if (admin.usuario === usuario) {
				return false;
			}
		}
		return true;
	}
}

class Administrador {
	constructor(usuario, pass) {
		this.id = contadorAdministradores;
		this.usuario = usuario;
		this.pass = pass;
		contadorAdministradores++;
	}
}

class Comprador {
	constructor(
		nombre,
		apellido,
		usuario,
		pass,
		tarjeta,
		cvc,
		saldo = 3000,
		totalComprasAprobadas = 0
	) {
		this.id = contadorCompradores;
		this.nombre = nombre;
		this.apellido = apellido;
		this.usuario = usuario.toLowerCase();
		this.pass = pass;
		this.tarjeta = tarjeta;
		this.cvc = cvc;
		this.saldo = saldo;
		this.totalComprasAprobadas = totalComprasAprobadas;
		contadorCompradores++;
	}
}

class Producto {
	static ultimoId = 0;
	constructor(
		nombre,
		descripcion,
		urlImagen,
		precio,
		stock,
		isAvailable = true,
		isSale = false,
		rating = getRandomNumber()
	) {
		this.isAvailable = isAvailable;
		(this.id = `PROD_ID_${++Producto.ultimoId}`),
			(this.rating = rating),
			(this.nombre = nombre),
			(this.descripcion = descripcion),
			(this.urlImagen = urlImagen),
			(this.precio = precio),
			(this.stock = stock),
			(this.isSale = isSale);
	}
}

class compra {
	static ultimoId = 0;
	constructor({ usuario, precio, howMany, status = "pendiente", producto }) {
		(this.id = `${++compra.ultimoId}`), (this.usuario = usuario);
		this.precio = precio;
		this.howMany = Number(howMany);
		this.status = status;
		this.producto = producto;
	}
}

/*COMMON------------------------------------------*/

function addEventListenerSafely(selector, event, handler) {
	const element = document.querySelector(selector);
	if (element) {
		element.addEventListener(event, handler);
	}
}
function renderNavHTML() {
	if (isAdmin) {
		renderNavBar = /*html*/ `
			<img   class="img-logo"
					src="https://www.creativefabrica.com/wp-content/uploads/2022/06/21/Fitness-Sale-Icon-Gym-Shop-Logo-Design-Graphics-32726026-2-580x386.jpg"
					alt="Logo" />
		<ul class="navBarAdmin">
			<li>
				<a class="viewRevenueReport">Ver informe de ganancias</a>
			</li>
			<li>
				<a class="administrateProducts">Administrar productos</a>
			</li>
			<li>
				<a class="createProduct">Crear producto</a>
			</li>	
			<li>
				<a class='viewPurchases'>Administrar compras</a>
			</li>
		
			<li>
				<a class="signOut">Deslogearse</a>
			</li>

			
		</ul>
			`;

		HTMLNAVBAR.innerHTML = renderNavBar;
	} else if (isComprador) {
		renderNavBar = `
			<img	class="img-logo"
					src="https://www.creativefabrica.com/wp-content/uploads/2022/06/21/Fitness-Sale-Icon-Gym-Shop-Logo-Design-Graphics-32726026-2-580x386.jpg"
					alt="Logo" />
		<ul class="navBarUser">
			<li>
				<span class="changeSectionToPurchaseHistory">Historial de compra</span>
			</li>
			<li>
				<span class="buttonSectionChange">Ofertas</span>
			</li>
			<li>
				<a class="signOut">Deslogearse</a>
			</li>
		
		</ul>
			`;

		HTMLNAVBAR.innerHTML = renderNavBar;
	} else {
		renderNavBar = `
		<img	class="img-logo"
				src="https://www.creativefabrica.com/wp-content/uploads/2022/06/21/Fitness-Sale-Icon-Gym-Shop-Logo-Design-Graphics-32726026-2-580x386.jpg"
				alt="Logo" />
	
	
			<span class="">Debe iniciar sesión :) </span>




					<label>
		<input class="toggle-checkbox"  type="checkbox" ${isNightMode ? "checked" : ""}>
		<div class="toggle-slot">
			<div class="sun-icon-wrapper">
			<div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
			</div>
			<div class="toggle-button"></div>
			<div class="moon-icon-wrapper">
			<div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
			</div>
		</div>
		</label>
		`;
		HTMLNAVBAR.innerHTML = renderNavBar;
		document
			.querySelector(".toggle-checkbox")
			.addEventListener("change", handleNightMode);
	}
	addEventListenerSafely(
		".viewRevenueReport",
		"click",
		renderAndHandleProfitInform
	);
	addEventListenerSafely(".signOut", "click", handleSignOut);
	addEventListenerSafely(".buttonSectionChange", "click", handleProductsView);
	addEventListenerSafely(
		".changeSectionToPurchaseHistory",
		"click",
		renderHistoryOfPurchasesHTML
	);
	addEventListenerSafely(
		".administrateProducts",
		"click",
		renderAdministrateProductsHTML
	);
	addEventListenerSafely(".createProduct", "click", renderAddNewProductAdmin);
	addEventListenerSafely(
		".viewPurchases",
		"click",
		renderContentAdminListPurchasesHTML
	);
}
function renderContentLoginHTML() {
	renderSection = /*html*/ `
	<div class="fade-in">
			<h2>Login</h2>
			<label for="txtLoginUsuario">Usuario</label>
			<input type="text" id="txtLoginUsuario" />
			<label for="txtPass">Contraseña</label>
			<div class="btnsLoginContainer">
				<input type="text" id="txtPass" />
				<input type="button" value="Login" id="btnLogin" />
			</div>
			<input
				type="button"
				value="Registrar comprador"
				id="btnRegistrarComprador" />
				</div>`;

	HTMLSECTION.innerHTML = renderSection;

	addEventListenerSafely(
		"#btnRegistrarComprador",
		"click",
		renderContentRegistrarCompradorHTML
	);

	addEventListenerSafely("#btnLogin", "click", handleLogin);
}
function renderPopUpHTML(tittle, advise, returnFunction) {
	renderSection = /*html*/ `
	<div class="dot-spinner">
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
</div>		
		`;
	HTMLSECTION.innerHTML = renderSection;

	setTimeout(() => {
		renderSection = /*html*/ `
		<div class="popUp">
			<div class="popUp-exitButton-container">
				<img class="popUp-exitButton" src="/assets/cancelado-icon.svg" />
			</div>
			<div class="popUp-content">
				<h3 class="popUp-title">${tittle}</h3>
				<p>${advise}</p>
			</div>
		</div>
		`;
		HTMLSECTION.innerHTML = renderSection;
		addEventListenerSafely(".popUp-exitButton", "click", returnFunction);
	}, 700);
}

/*USER--------------------------------------------*/

function renderContentRegistrarCompradorHTML() {
	const renderSection = /*html*/ `
    <div class="fade-in">
    <h2>Registrar Usuario</h2>
                <form class="formRegistro">
                    <div>
                        <label for="txtNombre">Nombre</label>
                        <input type="text" id="txtNombre" required /> <br />

                        <label for="txtApellido">Apellido</label>
                        <input type="text" id="txtApellido" required /> <br />

                        <label for="txtUsuario">Usuario</label>
                        <input type="text" id="txtUsuario" required /> <br />
                    </div>
                    <div>
                        <label for="txtContraseña">Contraseña</label>
                        <input type="text" id="txtContraseña" required /> <br />

                        <label for="txtTarjeta">Tarjeta</label>
                        <input type="text" id="txtTarjeta" required /> <br />

                        <label for="txtCvc">Cvc</label>
                        <input type="text" id="txtCvc" required /> <br />
                    </div>
                </form>
                <div class="buttonsContainerRegistro">
                    <input type="button" value="Volver" id="btnVolver" />
                    <input type="button" id="btnRegistrar" value="Registrar" />
                </div>
                </div>
                `;
	HTMLSECTION.innerHTML = renderSection;

	addEventListenerSafely("#btnVolver", "click", renderContentLoginHTML);
	addEventListenerSafely("#btnRegistrar", "click", handleRegistrarComprador);

	const tarjetaInput = document.querySelector("#txtTarjeta");
	tarjetaInput.addEventListener("input", function () {
		handleFormatCardNumber(tarjetaInput);
	});
}
function renderContentHomeHTML() {
	renderSection = /*html*/ `
				<div class="fade-in">
				<h2>Home</h2>
				<div class="productosContainer  ${isNightMode ? "nightMode" : ""}"></div>
				</div>
			`;

	HTMLSECTION.innerHTML = renderSection;

	sistema.listaProductos.forEach((producto) => {
		if (producto.stock > 0 && producto.isAvailable && !producto.isSale) {
			const productoHTML = `
			  <div class="producto">
				<div class='img-container'>
				  <img src="${producto.urlImagen}" alt="${producto.nombre}">
				  <div class="parrafoContainerProducto"> <p>$${producto.precio}</p></div>
				 
				</div>
				<div class="producto-info">
				  <h3>${producto.nombre}</h3>
				  <span class="ratingProducto">${handleRating(producto.rating)}</span>
				</div>
		
		
				<button  
				type="button"
				value="Ver producto"
				class="btnComprarPruducto btn-shine "
				data-idProducto="${producto.id}" >
				<span>Ver Producto</span>
			</button>
			`;
			document.querySelector(".productosContainer").innerHTML += productoHTML;
		}
	});

	const botonesComprar = document.querySelectorAll(".btnComprarPruducto");
	botonesComprar.forEach((boton) => {
		boton.addEventListener("click", () => {
			renderProductDetailsHTML(boton.dataset.idproducto);
		});
	});
}
function renderProductDetailsHTML(idProducto) {
	const selectedProduct = sistema.listaProductos.find(
		(producto) => producto.id === idProducto
	);
	renderSection = /*html*/ `
	  <div class="productoDetailsContainer  fade-in ${
			isNightMode ? "nightMode" : ""
		}">
		<div class="exitButtonDetailsContainer">
		  <button class="exitButtonDetails">
		  <span class="X"></span>
		  <span class="Y"></span>
		  <div class="close">Close</div>
		  </button>
		</div>
		<h2 class="titleProductoDetails">${selectedProduct.nombre}</h2>
		<div class="productoDetailsContainerImg">
		  <img src="${selectedProduct.urlImagen}" alt="imagenRandome" />
		</div>
		<div class='spansContainerProductoDetails'>
		  <span>${selectedProduct.descripcion}</span>    
		  <div class="priceAndStockContainer">
			<span class="priceProductoDetails">$ ${selectedProduct.precio}</span>
			<span class="stockProductoDetails">Stock: ${selectedProduct.stock}</span>
		  </div>
		  <span class="ratingProductoDetails">${handleRating(
				selectedProduct.rating
			)}</span>
		</div>
		<div class="productoDetailsControlsContainer">
		  <label>Cuantas unidades?<input type="number" min="1" id="btnSelectStockBuyer" placeholder="1" value="selectStock" /></label>
		  <button class="CartBtn">
	  <span class="IconContainer"> 
		<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
	  </span>
	  <p class="text">Add to Cart</p>
	</button>
		</div>
	  </div>
	  `;

	HTMLSECTION.innerHTML = renderSection;

	addEventListenerSafely(
		".exitButtonDetails",
		"click",
		isInSales ? renderSalesProductsHTML : renderContentHomeHTML
	);
	document.querySelectorAll(".CartBtn").forEach((btn) => {
		btn.addEventListener("click", () => {
			handleAddProductToCart(selectedProduct);
			renderPopUpHTML(
				"Compra agregada",
				`La compra de ${selectedProduct.nombre} se ha agregado correctamente a la lista.`,
				isInSales ? renderSalesProductsHTML : renderContentHomeHTML
			);
		});
	});
}
function renderSalesProductsHTML() {
	renderSection = /*html*/ `
	<div class="fade-in">
	<h2>Ofertas</h2>
	<div class="productosEnOfertaContainer"></div>	
	</div>
	`;
	HTMLSECTION.innerHTML = renderSection;

	sistema.listaProductos.forEach((producto) => {
		if (producto.stock > 0 && producto.isAvailable && producto.isSale) {
			const productoHTML = `
      <div class="producto ${isNightMode ? "nightMode" : ""}">
        <div class='img-container'>
          <img src="${producto.urlImagen}" alt="${producto.nombre}">
          <div class="parrafoContainerProducto"> <p>$${
						producto.precio
					}</p></div>
         
        </div>
        <div class="producto-info">
          <h3>${producto.nombre}</h3>
          <span class="ratingProducto">${handleRating(producto.rating)}</span>
        </div>


        <button  
        type="button"
        value="Ver producto"
        class="btnComprarPruducto btn-shine "
        data-idProducto="${producto.id}" >
        <span>Ver Producto</span>
    </button>

   
    `;
			document.querySelector(".productosEnOfertaContainer").innerHTML +=
				productoHTML;
		}
	});

	const botonesComprar = document.querySelectorAll(".btnComprarPruducto");
	botonesComprar.forEach((boton) => {
		boton.addEventListener("click", () => {
			renderProductDetailsHTML(boton.dataset.idproducto);
		});
	});
}
function renderHistoryOfPurchasesHTML() {
	const user = sistema.listaCompradores.find(
		(comprador) => comprador.usuario === userLoged
	);

	let actualSectionIndex = 0;
	const sections = [
		"Todas las compras",
		"compras pendientes",
		"compras canceladas",
		"compras aprobadas",
	];

	function renderPurchases(section) {
		const purchasesContainer = document.querySelector(
			".historyOfPurchasesContainer"
		);
		purchasesContainer.innerHTML = "";

		const filteredPurchases = sistema.listaCompras.filter((compra) => {
			if (compra.usuario !== userLoged) return false;
			if (section === "Todas las compras") return true;
			if (section === "compras pendientes" && compra.status === "pendiente")
				return true;
			if (section === "compras canceladas" && compra.status === "cancelada")
				return true;
			if (section === "compras aprobadas" && compra.status === "aprobada")
				return true;
			return false;
		});

		if (filteredPurchases.length === 0) {
			purchasesContainer.innerHTML += `
                <div class="no-purchases-container">
                    <img
                        src="https://cdn-icons-png.freepik.com/512/7486/7486744.png"
                        alt="No hay compras"
                        class="noPurchasesImage"
                        style="margin-right: 8rem;"
                    />
                </div>
            `;
		} else {
			filteredPurchases.forEach((compra) => {
				let statusHtml = "";
				if (compra.status === "pendiente") {
					statusHtml = `
                        <button class="btnChangeStatusToCanceled" data-compra-id="${compra.id}">Cancelar producto</button>
                    `;
				} else if (compra.status === "aprobada") {
					statusHtml =
						"<img alt='compra aprobada' src='/assets/comprobado-icon.svg' />";
				} else {
					statusHtml =
						"<img alt='compra cancelada' src='/assets/cancelado-icon.svg' />";
				}

				purchasesContainer.innerHTML += `
                    <div class="purchase-container">
                        <div class="order-list">
                            <div class="order-item">
                                <img
                                    src="${compra.producto.urlImagen}"
                                    alt="${compra.producto.nombre}"
                                    width="80"
                                    height="80"
                                    class="order-image"
                                />
                                <div class="order-info">
                                    <h3 class="order-title">${
																			compra.producto.nombre
																		}</h3>
                                    <div class="order-price">$ ${
																			compra.precio * compra.howMany
																		}</div>
                                    <p class="order-quantity">${
																			compra.howMany
																		} unidades</p>
                                </div>
                                <div class="order-status">
                                    <span>Estado:</span>
                                    <p>${compra.status}</p>
                                    ${statusHtml}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
			});
		}

		purchasesContainer.innerHTML += `
            <div class="balanceContainer">
                <p>Las compras suman: $ ${user.totalComprasAprobadas}</p>
                <p>El saldo actual es: $ ${user.saldo}</p>
            </div>
        `;

		const cancelButtons = document.querySelectorAll(
			".btnChangeStatusToCanceled"
		);
		cancelButtons.forEach((button) => {
			button.addEventListener("click", handleCancelPurchase);
		});
	}

	function updateSection() {
		const actualSection = sections[actualSectionIndex];
		document.querySelector(".divArrowContainer h3").textContent = actualSection;
		renderPurchases(actualSection);
	}

	function handleLeftArrowClick() {
		if (actualSectionIndex > 0) {
			actualSectionIndex--;
		} else {
			actualSectionIndex = sections.length - 1;
		}
		updateSection();
	}

	function handleRightArrowClick() {
		if (actualSectionIndex < sections.length - 1) {
			actualSectionIndex++;
		} else {
			actualSectionIndex = 0;
		}
		updateSection();
	}

	let renderSection = /*html*/ `
        <div class="fade-in">
            <h2>Historial de compras</h2>
            <div class="divArrowContainer">
                <img src="../assets/flecha-icon.png" class="leftArrow" />
                <h3>${sections[actualSectionIndex]}</h3>
                <img src="../assets/flecha-icon.png" class="rightArrow" />
            </div>
            <div class="historyOfPurchasesContainer"></div>
        </div>
    `;

	HTMLSECTION.innerHTML = renderSection;

	document
		.querySelector(".leftArrow")
		.addEventListener("click", handleLeftArrowClick);
	document
		.querySelector(".rightArrow")
		.addEventListener("click", handleRightArrowClick);

	updateSection();
}

/*ADMIN ----------------------------------------*/

function renderAdministrateProductsHTML() {
	renderSection = /*html*/ `
	<div class="fade-in">
		<h2>Administrar productos</h2>
		<div class="productsContainerAdminView"></div>
	</div>
	`;
	HTMLSECTION.innerHTML = renderSection;

	sistema.listaProductos.forEach((producto) => {
		const productoHTML = `
		<div class="productAdminView ">
			<div class='imgContainerAdminView' >
				<img src="${producto.urlImagen}" class="imgAdminProduct ${producto.nombre}">
				<div class="parrafoContainerProducto" id="parrafoContainerProductoAdmin"> <p>$${
					producto.precio
				}</p></div>
			</div>
			<div class="producto-info" id="producto-info-admin">
				<h3 id="producto-title-admin" class="${isNightMode ? "nightModeWhite" : ""}">${
			producto.nombre
		}</h3>
				<div id="producto-description-admin">
					<span class="stockProductoDetails ${
						isNightMode ? "nightModeWhite" : ""
					}" id="stockProductoDetails-admin">Stock actual: ${
			producto.stock
		}</span>
					<p>Ingresar nuevo stock</p>
					<input type="number" id="stock" min="0" value="${producto.stock}" />
				</div>
				<legend class="isAvilable"> Disponible? <input type="checkbox" class="check" id="isAvilable" ${
					producto.isAvailable ? "checked" : ""
				} /></legend>
				<legend class="isSale"> Está en oferta? <input type="checkbox" class="check" id="isSale" ${
					producto.isSale ? "checked" : ""
				} /></legend>
			</div>
			<div class="btnsAdminActualizePoroduct">
			<button
				id="btn-update-producto-admin"
				type="button"
				value="Ver producto"
				class="btnComprarPruducto btn-shine "
				data-idProducto="${producto.id}" >
				<span data-idProducto=${producto.id}>Actualizar <br/> producto</span>
			</button>
			</div>
		</div>
			`;
		document.querySelector(".productsContainerAdminView").innerHTML +=
			productoHTML;
	});

	document.querySelectorAll(".btnComprarPruducto").forEach((btn) => {
		btn.addEventListener("click", (event) => {
			const productId = event.currentTarget.getAttribute("data-idProducto");
			handleAdministrateProducts(productId);
		});
	});
}

function renderContentAdminListPurchasesHTML() {
	renderSection = /*html*/ `
	<div class="adminHome fade-in"> 
	<h2>Lista de compras</h2>
	<div class="purchasesListsContainer">
	<div class="purchasesPendingList"><p class="parrafo-tittle-admin-container">Compras pendientes</p></div>
	<div class="purchasesApprovedList"><p class="parrafo-tittle-admin-container">Compras aprobadas</p></div>
	<div class="purchasesCancelList"><p class="parrafo-tittle-admin-container">Compras canceladas</p></div>
	</div>
	</div>
	`;
	HTMLSECTION.innerHTML = renderSection;
	let purchaseHTML = "";
	const HTMLpurchasesPendingList = document.querySelector(
		".purchasesPendingList"
	);
	const HTMLpurchasesApprovedList = document.querySelector(
		".purchasesApprovedList"
	);
	const HTMLpurchasesCancelList = document.querySelector(
		".purchasesCancelList"
	);

	if (sistema.listaCompras.length === 0) {
		purchaseHTML = /*html*/ `
        <div class="no-purchases-container">
            <img
                src="https://cdn-icons-png.freepik.com/512/7486/7486744.png"
                alt="No hay compras"
                class="noPurchasesImage"
            />
        </div>
    `;
		HTMLpurchasesPendingList.innerHTML += purchaseHTML;
		HTMLpurchasesApprovedList.innerHTML += purchaseHTML;
		HTMLpurchasesCancelList.innerHTML += purchaseHTML;
	} else {
		sistema.listaCompras.forEach((compra) => {
			const user = sistema.listaCompradores.find(
				(user) => user.usuario === compra.usuario
			);
			purchaseHTML = /*html*/ `
		<div class="purchase-container-admin">
			<div class="order-list-admin">
				<div class="order-item-admin">
					<img
						src="${compra.producto.urlImagen}"
						alt="${compra.producto.nombre}"
						width="80"
						height="80"
						class="order-image-admin"
					/>
					<div class="order-info-admin">
						<h3 class="order-title">${compra.producto.nombre}</h3>
						<p class="order-quantity">${compra.howMany} unidades</p>
						<p class="order-user">Usuario: ${compra.usuario}</p>
						<p class="order-quantity">El saldo del usuario es:$ ${user.saldo}</p>
					</div>
					<div class="order-status-admin-${compra.status}">
					</div>
				</div>
			</div>
		</div>
		`;

			if (compra.status === "pendiente") {
				HTMLpurchasesPendingList.innerHTML += purchaseHTML;
			} else if (compra.status === "aprobada") {
				HTMLpurchasesApprovedList.innerHTML += purchaseHTML;
			} else {
				HTMLpurchasesCancelList.innerHTML += purchaseHTML;
			}
		});
	}

	document
		.querySelectorAll(".order-status-admin-pendiente")
		.forEach((container, index) => {
			const compra = sistema.listaCompras.filter(
				(c) => c.status === "pendiente"
			)[index];
			container.innerHTML = /*html*/ `
			<div class='btns-admin'>
				<div class="order-price">$ ${compra.precio * compra.howMany}</div>
				<button class="btn-approve" ACTION_TO_DO="aprobar" id="${
					compra.id
				}">Aprobar</button>
				<button class="btn-cancel" ACTION_TO_DO="cancelar" id="${
					compra.id
				}">Cancelar</button>
			</div>
		`;
		});

	document
		.querySelectorAll(".order-status-admin-aprobada")
		.forEach((container, index) => {
			const compra = sistema.listaCompras.filter(
				(c) => c.status === "aprobada"
			)[index];
			container.innerHTML = /*html*/ `
				<div class="order-price">$ ${compra.precio * compra.howMany}</div>
				<img alt='compra aprobada' src='/assets/comprobado-icon.svg' />
			`;
		});

	document
		.querySelectorAll(".order-status-admin-cancelada")
		.forEach((container, index) => {
			const compra = sistema.listaCompras.filter(
				(c) => c.status === "cancelada"
			)[index];
			container.innerHTML = /*html*/ `
				<div class="order-price">$ ${compra.precio * compra.howMany}</div>
				<img alt='compra cancelada' src='/assets/cancelado-icon.svg' />
			`;
		});

	document.querySelectorAll(".btn-approve").forEach((btn) => {
		btn.addEventListener("click", () => {
			const compraId = btn.id;
			handleStatePurchases(compraId, "aprobar");
		});
	});

	document.querySelectorAll(".btn-cancel").forEach((btn) => {
		btn.addEventListener("click", () => {
			const compraId = btn.id;
			handleStatePurchases(compraId, "cancelar");
		});
	});
}
function renderAddNewProductAdmin() {
	renderSection = `
    <div id="createProductForm" class="fade-in">
        <label for="txtName">Nombre del producto:</label>
        <input type="text" id="txtName" required>

        <label for="productValue">Precio:</label>
        <input type="number" id="productValue" min="0" required>

        <label for="productDescription">Descripción:</label>
        <input type="text" id="productDescription" required>

        <label for="urlImage">Url de la Imagen:</label>
        <input type="text" id="urlImage" required>

        <label for="productStock">Cantidad de stock disponible:</label>
        <input type="number" id="productStock" min="0" required>

        <button class="btnForm">Crear Producto</button>
    </div>
		<div id="productPreview"></div>	
    `;
	HTMLSECTION.innerHTML = renderSection;
	document.querySelectorAll("#createProductForm input").forEach((input) => {
		input.addEventListener("input", handleUpdateProductPreview);
	});

	addEventListenerSafely(".btnForm", "click", handleAddNewProductAdmin);
}
function renderAndHandleProfitInform() {
	let cantidadTotalAcumulada = 0;
	renderSection =
		"<div class=containerInforme style='text-align: center; display: flex; flex-direction:column; justify-content: center; align-items: center;'><h2>Informe de ganancias</h2></div>";
	HTMLSECTION.innerHTML = renderSection;
	let informe = sistema.listaProductos.map((producto) => ({
		nombre: producto.nombre,
		cantidadVendida: 0,
		gananciaTotal: 0,
	}));

	sistema.listaCompras.forEach((compra) => {
		if (compra.status === "aprobada") {
			let producto = informe.find(
				(itme) => itme.nombre === compra.producto.nombre
			);
			if (producto) {
				producto.cantidadVendida += compra.howMany;
				producto.gananciaTotal += compra.precio * compra.howMany;
			}
		}
	});

	let informeHTML = "<h3>Informe de ganancias</h3>";
	informe.forEach((producto) => {
		if (producto.cantidadVendida > 0) {
			informeHTML += `<p>Producto: ${producto.nombre}- 
			Cantidad vendida: ${producto.cantidadVendida} - 
			Ganancia de la venta: ${producto.gananciaTotal}</p>`;
			cantidadTotalAcumulada += producto.gananciaTotal;
		}
	});
	let informeHTML2 = `<p>Ganancias totales:$ ${cantidadTotalAcumulada}</p>`;
	document.querySelector(".containerInforme").innerHTML =
		informeHTML + informeHTML2;
}

/*HANDLES --------------------------------------*/
function handleAdministrateProducts(idProducto) {
	let newIsAvailable = false;
	const producto = sistema.listaProductos.find(
		(producto) => producto.id === idProducto
	);
	if (producto) {
		const productContainer = document
			.querySelector(`button[data-idProducto="${idProducto}"]`)
			.closest(".productAdminView");

		const newStock = parseInt(
			productContainer.querySelector("#stock").value,
			10
		);
		if (newStock < 1) {
			producto.isAvailable = false;
		} else {
			newIsAvailable = productContainer.querySelector("#isAvilable").checked;
			producto.isAvailable = newIsAvailable;
		}

		const newIsSale = productContainer.querySelector("#isSale").checked;
		producto.stock = newStock;
		producto.isSale = newIsSale;

		renderPopUpHTML(
			"Producto actualizado",
			`${producto.nombre}, <br/>
			stock actual: ${producto.stock}, <br/>
			${
				producto.isAvailable
					? `El producto estará disponible`
					: "El producto NO estará disponible"
			},<br/>  ${
				producto.isSale
					? "El producto estará en oferta"
					: "El producto NO estará en oferta"
			}`,
			renderAdministrateProductsHTML
		);
	} else {
		console.error("Producto no encontrado");
	}
}
function handleUpdateProductPreview() {
	const name =
		document.getElementById("txtName").value || "Nombre del producto";
	const price = document.getElementById("productValue").value || 0;
	const description =
		document.getElementById("productDescription").value ||
		"Descripción del producto";
	const urlImage =
		document.getElementById("urlImage").value ||
		"https://camarasal.com/wp-content/uploads/2020/08/default-image-5-1.jpg";
	const stock = document.getElementById("productStock").value || 0;
	const rating = 5;

	const renderSectionProductPreview = /*html*/ `
	<h3>Preview</h3>
      <div class="productoDetailsContainer  productoDetailsContainerPreview ${
				isNightMode ? "nightMode" : ""
			}">
        <h2 class="titleProductoDetails">${name}</h2>
        <div class="productoDetailsContainerImg">
          <img src="${urlImage}" alt="imagenRandome" />
        </div>
        <div class='spansContainerProductoDetails'>
          <span>${description}</span>    
          <div class="priceAndStockContainer">
            <span class="priceProductoDetails">$ ${price}</span>
            <span class="stockProductoDetails">Stock: ${stock}</span>
          </div>
          <span class="ratingProductoDetails">${handleRating(rating)}</span>
        </div>
        <div class="productoDetailsControlsContainer">
          <label>Cuantas unidades?<input type="number" min="1" id="btnSelectStockBuyer" placeholder="1" value="selectStock" /></label>
          <button class="CartBtn">
      <span class="IconContainer"> 
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
      </span>
      <p class="text">Add to Cart</p>
    </button>
        </div>
      </div>
    `;

	const productPreviewElement = document.getElementById("productPreview");
	if (productPreviewElement) {
		productPreviewElement.innerHTML = renderSectionProductPreview;
	}
}
function handleProductsView() {
	if (isInSales) {
		isInSales = false;
		document.querySelector(".buttonSectionChange").innerHTML = "Ofertas";
		renderContentHomeHTML();
	} else {
		isInSales = true;
		document.querySelector(".buttonSectionChange").innerHTML = "Home";

		renderSalesProductsHTML();
	}
}
function handleSignOut() {
	isAdmin = false;
	isComprador = false;
	userLoged = "";
	renderSection = "";
	renderContentLoginHTML();
	renderNavHTML();
}
function handleLogin() {
	let usuario = document.querySelector("#txtLoginUsuario").value.toLowerCase();
	let pass = document.querySelector("#txtPass").value;
	let userFound = false;
	isAdmin = false;
	isComprador = false;

	sistema.listaAdministradores.forEach((admin) => {
		if (admin.usuario === usuario) {
			userFound = true;
			if (admin.pass === pass) {
				isAdmin = true;
				userLoged = admin.usuario;
				renderNavHTML();
				renderContentAdminListPurchasesHTML();
				return;
			} else {
				renderPopUpHTML(
					"Datos incorrectos",
					"La contraseña ingresada no es correcta para ingresar como administrador",
					renderContentLoginHTML
				);
				return;
			}
		}
	});

	if (!isAdmin) {
		sistema.listaCompradores.forEach((comprador) => {
			if (comprador.usuario === usuario) {
				userFound = true;
				if (comprador.pass === pass) {
					isComprador = true;
					userLoged = comprador.usuario;
					renderNavHTML();
					renderContentHomeHTML();
					return;
				} else {
					renderPopUpHTML(
						"Datos incorrectos",
						`La contraseña ingresada no es correcta para ingresar como el usuario ${comprador.usuario}`,
						renderContentLoginHTML
					);
					return;
				}
			}
		});
	}

	if (!userFound) {
		renderPopUpHTML(
			"Datos incorrectos",
			`El usuario: ${usuario} no existe`,
			renderContentLoginHTML
		);
	}
}
function handleRegistrarComprador() {
	let nombre = document.getElementById("txtNombre").value;
	let apellido = document.getElementById("txtApellido").value;
	let usuario = document.getElementById("txtUsuario").value.toLowerCase();
	let pass = document.getElementById("txtContraseña").value;
	let tarjeta = Number(document.getElementById("txtTarjeta").value);
	let cvc = document.getElementById("txtCvc").value;
	const nuevoComprador = new Comprador(
		nombre,
		apellido,
		usuario,
		pass,
		tarjeta,
		cvc
	);

	const formatoPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{5,}$/;
	const formatoCvc = /^[0-9]{3}$/;

	let numeroTarjeta = document
		.getElementById("txtTarjeta")
		.value.replace(/-/g, "");
	let esTarjetaValida = handleAlgorithmLuhn(numeroTarjeta);

	if (
		sistema.esUsuarioUnico(usuario) &&
		formatoPass.test(pass) &&
		formatoCvc.test(cvc) &&
		esTarjetaValida
	) {
		sistema.listaCompradores.push(nuevoComprador);
		renderPopUpHTML(
			"Usuario registrado correctamente",
			`El usuario: ${nuevoComprador.usuario} se ha registrado correctamente.`,
			renderContentLoginHTML
		);
	} else if (!sistema.esUsuarioUnico(usuario)) {
		renderPopUpHTML(
			"Fallo al registrar usuario",
			`El usuario: ${usuario} ya existe, debe usar otro username.`,
			renderContentRegistrarCompradorHTML
		);
	} else if (!formatoPass.test(pass)) {
		renderPopUpHTML(
			"Fallo al registrar usuario",
			`La contraseña ingresada no es valida, debe tener al menos 5 caracteres y poseer al menos una letra mayúscula, una minúscula y un número.`,
			renderContentRegistrarCompradorHTML
		);
	} else if (!formatoCvc.test(cvc)) {
		renderPopUpHTML(
			"Fallo al registrar usuario",
			`El código de verificación de la tarjeta no es válido.`,
			renderContentRegistrarCompradorHTML
		);
	} else if (!esTarjetaValida) {
		renderPopUpHTML(
			"Fallo al registrar usuario",
			`La tarjeta ingresada no es válida.`,
			renderContentRegistrarCompradorHTML
		);
	}
}
function handleAddProductToCart(selectedProduct) {
	let selectedStock = Number(
		document.querySelector("#btnSelectStockBuyer").value
	);

	sistema.listaCompras.push(
		new compra({
			usuario: userLoged,
			producto: selectedProduct,
			precio: selectedProduct.precio,
			howMany:
				selectedStock == 0 || selectedStock === undefined
					? (selectedStock = 1)
					: selectedStock,
		})
	);
}
function handleRating(rating) {
	switch (rating) {
		case 1:
			return "⭐ (1/5)";
		case 2:
			return "⭐⭐ (2/5)";
		case 3:
			return "⭐⭐⭐ (3/5)";
		case 4:
			return "⭐⭐⭐⭐ (4/5)";
		case 5:
			return "⭐⭐⭐⭐⭐ (5/5)";
		default:
			return "⭐⭐⭐⭐⭐⭐(6/5)";
	}
}
function handleNightMode() {
	isNightMode = !isNightMode;
	if (isNightMode) {
		document.body.style.cssText = "background-color: #211e1e; color: #cecece;";
	} else {
		document.body.style.cssText = "";
	}
}
function getRandomNumber() {
	return Math.floor(Math.random() * 5) + 1;
}
function handleStatePurchases(id, actionToDo) {
	const compra = sistema.listaCompras.find((compra) => compra.id === id);
	const user = sistema.listaCompradores.find(
		(comprador) => comprador.usuario === compra.usuario
	);
	const compraCost = compra.precio * compra.howMany;
	const stock = compra.producto.stock;

	if (compra) {
		if (
			actionToDo === "aprobar" &&
			compraCost <= user.saldo &&
			compra.howMany <= stock &&
			compra.producto.isAvailable
		) {
			compra.status = "aprobada";
			user.saldo -= compraCost;
			user.totalComprasAprobadas += compraCost;
			compra.producto.stock -= compra.howMany;

			renderPopUpHTML(
				"Compra aprobada",
				`La compra de ${compra.producto.nombre} ha sido aprobada, stock restante ${compra.producto.stock} y saldo restante del usario ${user.usuario} es:$ ${user.saldo}`,
				renderContentAdminListPurchasesHTML
			);

			if (compra.producto.stock < 1) {
				compra.producto.isAvailable = false;
				renderPopUpHTML(
					"Compra aprobada",
					`La compra de ${compra.producto.nombre} ha sido aprobada, pero el stock del producto ha llegado a cero, no se puede comprar más.`,
					renderContentAdminListPurchasesHTML
				);
			}
		} else if (
			(actionToDo === "aprobar" && !(compraCost <= user.saldo)) ||
			!(compra.howMany <= stock) ||
			!compra.producto.isAvailable
		) {
			compra.status = "cancelada";

			let reasons = [];

			if (!(compraCost <= user.saldo)) {
				reasons.push("no tiene saldo suficiente");
			}

			if (!(compra.howMany <= stock)) {
				reasons.push("no hay suficiente stock");
			}

			if (!compra.producto.isAvailable) {
				reasons.push("el producto no está disponible");
			}

			let reasonsText = reasons.join(", ");

			renderPopUpHTML(
				"Compra cancelada",
				`La compra de ${compra.producto.nombre} no se ha aprobado porque ${reasonsText}.`,
				renderContentAdminListPurchasesHTML
			);
		} else if (actionToDo === "cancelar") {
			compra.status = "cancelada";
			renderContentAdminListPurchasesHTML();
		}
	}
}
function handleAlgorithmLuhn(numeroTarjeta) {
	let tarjetaValida = false;
	let digitoAVerificar = numeroTarjeta.charAt(numeroTarjeta.length - 1);
	let acumulador = 0;

	for (let i = 0; i < numeroTarjeta.length - 1; i++) {
		if (i % 2 === 0) {
			let duplicado = Number(numeroTarjeta.charAt(i)) * 2;
			if (duplicado >= 10) {
				let duplicadoString = String(duplicado);
				let resultado =
					Number(duplicadoString.charAt(0)) + Number(duplicadoString.charAt(1));
				acumulador += resultado;
			} else {
				acumulador += duplicado;
			}
		} else {
			acumulador += Number(numeroTarjeta.charAt(i));
		}
	}

	let multiplicadoPor9 = acumulador * 9;
	let multiplicadoPor9String = String(multiplicadoPor9);
	let digitoVerificador = multiplicadoPor9String.charAt(
		multiplicadoPor9String.length - 1
	);

	if (digitoAVerificar === digitoVerificador) {
		tarjetaValida = true;
	}
	return tarjetaValida;
}
function handleAddNewProductAdmin() {
	const name = document.getElementById("txtName").value.trim();
	const description = document
		.getElementById("productDescription")
		.value.trim();
	const imageUrl = document.getElementById("urlImage").value.trim();
	const price = Number(document.getElementById("productValue").value);
	const stock = Number(document.getElementById("productStock").value);

	if (!name || !description || !imageUrl || price <= 0 || stock <= 0) {
		renderPopUpHTML(
			"Error",
			"Por favor, complete todos los campos y asegúrese de que el precio y el stock sean mayores a 0.",
			renderAddNewProductAdmin
		);
		return;
	}

	const newProduct = new Producto(name, description, imageUrl, price, stock);

	sistema.listaProductos.push(newProduct);

	renderPopUpHTML(
		"Producto creado",
		`Se ha creado un nuevo producto : ${newProduct.nombre} `,
		renderAddNewProductAdmin
	);
}
function handleCancelPurchase(event) {
	const compraId = event.target.dataset.compraId;
	const compraIndex = sistema.listaCompras.findIndex((c) => c.id === compraId);
	if (compraIndex !== -1) {
		sistema.listaCompras[compraIndex].status = "cancelada";
		renderHistoryOfPurchasesHTML();
	}
}
function handleFormatCardNumber(input) {
	const value = input.value.replace(/\D/g, "").substring(0, 16);
	const formattedValue = value.replace(/(.{4})/g, "$1-").trim();
	input.value = formattedValue.endsWith("-")
		? formattedValue.slice(0, -1)
		: formattedValue;
}
const sistema = new Sistema();

(function () {
  let mensaje = "Administradores:\n";
  for (let admin of sistema.listaAdministradores) {
    mensaje += `Usuario: ${admin.usuario}, Contraseña: ${admin.pass}\n`;
  }

  mensaje += "\nCompradores:\n";
  for (let comprador of sistema.listaCompradores) {
    mensaje += `Usuario: ${comprador.usuario}, Contraseña: ${comprador.pass}\n`;
  }

  alert(mensaje);
})();

