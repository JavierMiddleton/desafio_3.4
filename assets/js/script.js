const propiedades_venta = [
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "imagen-venta-01.jpg",
        descripcion:
            "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: 4,
        banos: 4,
        costo: 5000,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Apartamento acogedor con vista al puente",
        src: "imagen-venta-02.jpg",
        descripcion:
            "Este apartamento acogedor está perfectamente situado con impresionantes vistas a la ciudad",
        ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
        habitaciones: 2,
        banos: 2,
        costo: 3200,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Penthouse de lujo con terraza panorámica",
        src: "imagen-venta-03.jpg",
        descripcion:
            "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        banos: 2,
        costo: 4500,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Acogedora casa en zona residencial",
        src: "imagen-venta-04.jpg",
        descripcion:
            "Casa en zona residencial pero a pocos metros de la ciudad",
        ubicacion: "968 Patricks Avenue, Rowland City, CA 85789",
        habitaciones: 4,
        banos: 4,
        costo: 3500,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Acogedora casa en el centro de Chicago",
        src: "imagen-venta-05.jpg",
        descripcion: "Casa familiar en el centro de Chicago",
        ubicacion: "180 North Michigan Avenue, Chicago, IL 60611",
        habitaciones: 3,
        banos: 2,
        costo: 3000,
        smoke: true,
        pets: false,
    },
    {
        nombre: "Departamento lujoso con vista panorámica",
        src: "imagen-venta-06.jpg",
        descripcion: "Departamento de lujo con vista hacia todo la ciudad",
        ubicacion: "180 North Michigan Avenue, Chicago, IL 60611",
        habitaciones: 3,
        banos: 2,
        costo: 3000,
        smoke: true,
        pets: true,
    },
];

const propiedades_alquiler = [
    {
        nombre: "Apartamento en el centro de la ciudad",
        src: "imagen-alquiler-01.jpg",
        descripcion:
            "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        ubicacion: "123 Main Street, Anytown, CA 912348",
        habitaciones: 2,
        banos: 2,
        costo: 2000,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Apartamento luminoso con vista al mar",
        src: "imagen-alquiler-02.jpg",
        descripcion:
            "Este hermoso apartamento ofrece una vista impresionante al mar.",
        ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones: 3,
        banos: 3,
        costo: 2500,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Condominio moderno en zona residencial",
        src: "imagen-alquiler-03.jpg",
        descripcion:
            "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: 2,
        banos: 2,
        costo: 2200,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Departamento al pie de la montaña",
        src: "imagen-alquiler-04.jpg",
        descripcion:
            "Este elegante departamento se conecta con el pie de la montaña",
        ubicacion: "280 Summer Street, Boston, MA 02210",
        habitaciones: 2,
        banos: 1,
        costo: 1800,
        smoke: true,
        pets: false,
    },
    {
        nombre: "Departamento en el corazón de la ciudad",
        src: "imagen-alquiler-05.jpg",
        descripcion:
            "Cómodo departamento ubicado en el centro de San Francisco",
        ubicacion: "1405 Sutter St, San Francisco, CA 94109",
        habitaciones: 2,
        banos: 1,
        costo: 3200,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Departamento de dos pisos",
        src: "imagen-alquiler-06.jpg",
        descripcion:
            "Departamento de dos pisos con buena conexión a locomoción",
        ubicacion: "845 N. Michigan Avenue, Chicago, IL 60611",
        habitaciones: 4,
        banos: 3,
        costo: 5200,
        smoke: false,
        pets: true,
    },
];

// TEMPLATE
const getCardsTemplate = (data, numberOfCards = data.length) => {
    let template = "";

    for (let i = 0; i < numberOfCards; i++) {
        template += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src="./assets/img/${data[i].src}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="cardd-title">
                        ${data[i].nombre}
                    </h5>
                    <p class="cardd-text">
                        ${data[i].descripcion}
                    </p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i>
                        ${data[i].ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${
                            data[i].habitaciones
                        } Habitaciones |
                        <i class="fas fa-bath"></i> ${data[i].banos} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>${data[i].costo}</p>
                    <p class="${
                        data[i].smoke ? "text-success" : "text-danger"
                    }">
                        ${
                            data[i].smoke
                                ? '<i class="fas fa-smoking"></i> Permitido fumar'
                                : '<i class="fas fa-smoking-ban"></i> No se permite fumar'
                        }
                    </p>
                    <p class="${data[i].pets ? "text-success" : "text-danger"}">
                        ${
                            data[i].pets
                                ? '<i class="fas fa-paw"></i> Mascotas permitidas'
                                : '<i class="fas fa-ban"></i> No se permiten mascotas'
                        }

                    </p>
                </div>
            </div>
        </div>
        `;
    }

    return template;
};

const sellContainer = document.querySelector("#venta .row");
const rentContainer = document.querySelector("#alquiler .row");

const currentPage = location.pathname;

switch (currentPage) {
    case "/index.html":
        rentContainer.innerHTML = getCardsTemplate(propiedades_alquiler, 3);
        sellContainer.innerHTML = getCardsTemplate(propiedades_venta, 3);
        break;

    case "/propiedades_alquiler.html":
        rentContainer.innerHTML = getCardsTemplate(propiedades_alquiler);
        break;

    case "/propiedades_venta.html":
        sellContainer.innerHTML = getCardsTemplate(propiedades_venta);
        break;

    default:
        console.error("Página no reconocida:", currentPage);
        break;
}
