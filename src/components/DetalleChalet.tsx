import { createResource, Show } from 'solid-js';
import type { Component } from 'solid-js';
import star from '../assets/star.png';
import IconoCheck from './IconoCheck';
import IconoNotCheck from './IconoNotCheck';
import FormatPrecio from '../utils/FormateadorMoneda';

const API_BASE_URL = import.meta.env.PUBLIC_API_BASE_URL;

interface Props {
    id: string;
}

const DetalleChalet: Component<Props> = (props) => {
    const fetchCasa = async () => {
        try {
            console.log(props.id);
            const res = await fetch(`${API_BASE_URL}/casas/${props.id}`);
            if (!res.ok) {
                throw new Error(`Error al obtener la casa (${res.status})`);
            }
            return await res.json();
        } catch (err) {
            console.error(err);
            throw err;
        }
    };

    const [casa] = createResource(fetchCasa);

    return (
        <>
            <Show when={casa.error}>
                <div class="text-red-500">Error al cargar la casa</div>
            </Show>

            <Show when={casa()} fallback={<div>Cargando...</div>}>
                {(c) => (
                    <div class="flex justify-center">
                        <div class="flex flex-col w-[500px]">
                            <img
                                alt={c().nombre}
                                src={`/fotos/casas/${c().codigo.toLowerCase()}/${c().codigo.toLowerCase()}-1.jpg`}
                                class="rounded-md object-cover p-4"
                            />

                            <div class="flex items-center justify-between">
                                <h1 class="text-3xl font-bold text-gray-900">{casa().nombre}</h1>
                                <div class="flex align-center">
                                    <h3>{c().puntaje}</h3>
                                    <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.54 1.118l-3.124-2.27a1 1 0 00-1.176 0l-3.124 2.27c-.784.57-1.838-.197-1.54-1.118l1.2-3.674a1 1 0 00-.364-1.118L2.41 9.101c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" />
                                    </svg>
                                </div>
                            </div>

                            <div class="grid grid-cols-3 gap-4 text-sm text-gray-600">
                                <div class="flex flex-col text-xl font-medium"><p>Tarifas:</p>
                                    <div class="flex">
                                        <p class="flex">Alta:</p><p><FormatPrecio monto={c().precioAlta} /></p>
                                    </div>
                                    <div class="flex">
                                        <p class="font-large">Media:</p><p><FormatPrecio monto={c().precioMedia} /></p>
                                    </div>
                                    <div class="flex">
                                        <p class="font-large">Baja:</p><p><FormatPrecio monto={c().precioBaja} /></p>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex flex-column mt-4 mb-2">
                                <b class="bold">Comodidades Premium</b>
                                <img src="" style="margin-top: 5px; max-width: 100px;" />
                            </div>

                            <div class="row">
                                <div class="flex col-12 col-sm-6 py-1 bold"><IconoCheck /> Servicio de mucama</div>
                                <div class="flex col-12 col-sm-6 py-1 bold"><IconoCheck /> Wifi StarLink</div>
                                <div class="flex col-12 col-sm-6 py-1 bold"><IconoCheck /> Casa sobre barranco</div>
                                <div class="flex col-12 col-sm-6 py-1 bold"><IconoCheck /> Direct Tv HD con pack Premium</div>
                                <div class="flex col-12 col-sm-6 py-1 bold"><IconoCheck /> Gimnasio cubierto</div>
                                <div class="flex col-12 col-sm-6 py-1 bold"><IconoCheck /> Hidromasaje</div>
                                <div class="flex col-12 col-sm-6 py-1 bold"><IconoCheck /> Minicine 4K</div>
                                <div class="flex col-12 col-sm-6 py-1 bold"><IconoCheck /> Piscina privada exterior</div>
                                <div class="flex col-12 col-sm-6 py-1 bold"><IconoCheck /> Piscina privada interior</div>
                                <div class="flex col-12 col-sm-6 py-1 bold"><IconoCheck /> Plataforma Streaming por 3</div>
                                <div class="flex col-12 col-sm-6 py-1 bold"><IconoCheck /> Sala de Juegos</div>
                                <div class="flex col-12 col-sm-6 py-1 bold"><IconoCheck /> Sommiers King size</div>
                                <div class="flex col-12 col-sm-6 py-1 bold"><IconoCheck /> Toalleros calefaccionados</div>
                            </div>

                            <div class="d-flex flex-column mt-4 mb-2">
                                <b class="bold">Comodidades Generales</b>
                                <img src="" style="margin-top: 5px; max-width: 100px;" />
                            </div>

                            <div class="row">
                                <div class="flex col-12 col-sm-4 py-1"><IconoCheck /> Cafetera eléctrica</div>
                                <div class="flex col-12 col-sm-4 py-1"><IconoCheck /> Caja de seguridad</div>
                                <div class="flex col-12 col-sm-4 py-1"><IconoCheck /> Lavarropas</div>
                                <div class="flex col-12 col-sm-4 py-1"><IconoCheck /> Licuadora</div>
                                <div class="flex col-12 col-sm-4 py-1"><IconoCheck /> Microondas</div>
                                <div class="flex col-12 col-sm-4 py-1"><IconoCheck /> Mosquiteros</div>
                                <div class="flex col-12 col-sm-4 py-1"><IconoCheck /> Pava eléctrica</div>
                                <div class="flex col-12 col-sm-4 py-1"><IconoCheck /> Plancha con tabla</div>
                                <div class="flex col-12 col-sm-4 py-1"><IconoCheck /> Secador de pelo</div>
                                <div class="flex col-12 col-sm-4 py-1"><IconoCheck /> Tostadora eléctrica</div>
                                <div class="flex col-12 col-sm-4 py-1"><IconoCheck /> Wifi</div>
                            </div>

                            <div class="d-flex flex-column mt-4 mb-2">
                                <b class="bold">Comodidades Exteriores</b>
                                <img src="" style="margin-top: 5px; max-width: 100px;" />
                            </div>

                            <div class="row">
                                <div class="flex col-12 col-sm-6 py-1"><IconoCheck /> Espacio semicubierto o galería</div>
                                <div class="flex col-12 col-sm-6 py-1"><IconoCheck /> Juego de comedor exterior</div>
                                <div class="flex col-12 col-sm-6 py-1"><IconoCheck /> Juego de living exterior</div>
                                <div class="flex col-12 col-sm-6 py-1"><IconoCheck /> Parrilla cubierta</div>
                                <div class="flex col-12 col-sm-6 py-1"><IconoCheck /> Playa húmeda</div>
                                <div class="flex col-12 col-sm-6 py-1"><IconoCheck /> Solarium con reposeras</div>
                                <div class="flex col-12 col-sm-6 py-1"><IconoCheck /> Tobogán acuático</div>
                            </div>

                            <div class="d-flex flex-column mt-4 mb-2">
                                <b class="bold">Reglas del chalet</b>
                                <img src="" style="margin-top: 5px; max-width: 100px;" />
                            </div>

                            <div class="row">
                                <div class="flex col-12 py-1"><IconoNotCheck /> No acepta mascotas</div>
                                <div class="flex col-12 py-1"><IconoNotCheck /> No acepta visitas</div>
                            </div>

                        </div>
                    </div>
                )}
            </Show >
        </>
    );
};

export default DetalleChalet;