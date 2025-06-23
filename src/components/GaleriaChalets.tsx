import { createResource, Show, For } from 'solid-js';
import star from '../assets/star.png';

const fetchCasas = async () => {
    const res = await fetch('http://localhost:3001/casas');
    if (!res.ok) throw new Error('Error al obtener las casas');
    return res.json();
};

export default function ListadoChalets() {
    const [casas] = createResource(fetchCasas);

    return (
        <div>
            <Show when={casas()} fallback={<p>Cargando casas...</p>}>
                <For each={casas()}>
                    {(casa) => (
                        <a
                            href="#"
                            class="block rounded-lg p-4 shadow-xs shadow-indigo-100"
                        >
                            <img
                                alt={casa.nombre}
                                src={`/fotos/casas/${casa.codigo.toLowerCase()}/${casa.codigo.toLowerCase()}-1.jpg`}
                                class="h-56 w-full rounded-md object-cover"
                            />

                            <div class="mt-2">
                                <dl>
                                    <div>
                                        <dt class="sr-only">Nombre</dt>
                                        <dd class="font-medium">{casa.nombre}</dd>
                                        <img src={star.src} alt="star" />
                                    </div>
                                    <div>
                                        <dt class="sr-only">Precio</dt>
                                        <dd class="text-sm text-gray-500">
                                            ${casa.precioAlta}
                                        </dd>
                                        <dt class="sr-only">Precio</dt>
                                        <dd class="text-sm text-gray-500">
                                            ${casa.precioMedia}
                                        </dd>
                                        <dt class="sr-only">Precio</dt>
                                        <dd class="text-sm text-gray-500">
                                            ${casa.precioBaja}
                                        </dd>
                                    </div>
                                </dl>

                                <div class="mt-6 flex items-center gap-8 text-xs">
                                    <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                        <svg
                                            class="size-4 text-indigo-700"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                            />
                                        </svg>
                                        <div class="mt-1.5 sm:mt-0">
                                            <p class="text-gray-500">Huéspedes</p>
                                            <p class="font-medium">{casa.cantHuespedes}</p>
                                        </div>
                                    </div>

                                    <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                        <svg
                                            class="size-4 text-indigo-700"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                            />
                                        </svg>
                                        <div class="mt-1.5 sm:mt-0">
                                            <p class="text-gray-500">Ambientes</p>
                                            <p class="font-medium">{casa.cantAmbientes}</p>
                                        </div>
                                    </div>

                                    <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                        <svg
                                            class="size-4 text-indigo-700"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                            />
                                        </svg>
                                        <div class="mt-1.5 sm:mt-0">
                                            <p class="text-gray-500">Baños</p>
                                            <p class="font-medium">{casa.cantBanios}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    )}
                </For>
            </Show>
        </div>
    );
}









