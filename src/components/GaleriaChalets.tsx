import { createResource, Show, For } from 'solid-js';
import star from '../assets/star.png';
import FormatPrecio from '../utils/FormateadorMoneda';

const API_BASE_URL = import.meta.env.PUBLIC_API_BASE_URL

const fetchCasas = async () => {
    const res = await fetch(`${API_BASE_URL}/casas`);
    if (!res.ok) throw new Error('Error al obtener las casas');
    return res.json();
};

export default function ListadoChalets() {
    const [casas] = createResource(fetchCasas);

    return (
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            <Show when={casas()} fallback={<p>Cargando casas...</p>}>
                <For each={casas()}>
                    {(casa) => (
                        <a href={`/casas/${casa.id}`}>
                            <div class="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white p-2">
                                <img
                                    alt={casa.nombre}
                                    src={`/fotos/casas/${casa.codigo.toLowerCase()}/${casa.codigo.toLowerCase()}-1.jpg`}
                                    class="h-56 w-full rounded-md object-cover"
                                />

                                <div class="p-4 space-y-4">

                                    <div class="flex items-center justify-between">
                                        <h2 class="text-lg font-semibold text-gray-800">{casa.nombre}</h2>
                                        <div class="flex align-center">
                                            <h3>{casa.puntaje}</h3>
                                            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.54 1.118l-3.124-2.27a1 1 0 00-1.176 0l-3.124 2.27c-.784.57-1.838-.197-1.54-1.118l1.2-3.674a1 1 0 00-.364-1.118L2.41 9.101c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" />
                                            </svg>
                                        </div>
                                    </div>


                                    <div class="grid grid-cols-3 gap-4 text-sm text-gray-600">
                                        <div class="flex flex-col"><p>Tarifas:</p>
                                            <div class="flex">
                                                <p class="font-medium">Alta:</p><p><FormatPrecio monto={casa.precioAlta} /></p>
                                            </div>
                                            <div class="flex">
                                                <p class="font-medium">Media:</p><p><FormatPrecio monto={casa.precioMedia} /></p>
                                            </div>
                                            <div class="flex">
                                                <p class="font-medium">Baja:</p><p><FormatPrecio monto={casa.precioBaja} /></p>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="flex justify-between items-center border-t pt-4 text-xs text-gray-600 gap-2">
                                        <div class="flex items-center justify-center gap-1 flex-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" version="1.1">
                                                <path d="M 20.168 4.595 C 18.376 5.850, 17.956 6.969, 18.195 9.845 C 18.430 12.658, 17.982 13.920, 16.250 15.323 C 14.347 16.864, 14 18.118, 14 23.450 C 14 30.224, 15.505 32.793, 18.737 31.540 C 20.415 30.890, 20.416 30.795, 18.750 29.568 C 16.522 27.928, 16.284 18.839, 18.422 17.064 C 19.218 16.404, 21.969 16.020, 24.664 16.192 C 28.802 16.456, 29.671 16.892, 30.806 19.270 C 31.533 20.793, 32.549 21.779, 33.064 21.460 C 34.660 20.474, 34.101 18.009, 31.750 15.670 C 30.076 14.004, 29.578 12.503, 29.805 9.810 C 30.044 6.970, 29.619 5.846, 27.832 4.595 C 24.957 2.581, 23.043 2.581, 20.168 4.595 M 21.709 6.624 C 20.432 7.901, 20.966 11.773, 22.500 12.362 C 25.172 13.387, 27.128 11.915, 26.804 9.122 C 26.505 6.547, 23.339 4.995, 21.709 6.624 M 31.639 24.694 C 31.288 25.046, 31 26.158, 31 27.167 C 31 28.175, 30.325 29, 29.500 29 C 28.321 29, 28 30.389, 28 35.500 C 28 40.611, 27.679 42, 26.500 42 C 25.389 42, 25 40.833, 25 37.500 C 25 35.025, 24.550 33, 24 33 C 23.450 33, 23 35.025, 23 37.500 C 23 40.749, 22.600 42, 21.560 42 C 20.619 42, 20.013 40.703, 19.810 38.250 C 19.640 36.188, 19.050 34.500, 18.500 34.500 C 17.032 34.500, 16.671 41.899, 18.058 43.570 C 19.520 45.331, 28.101 45.499, 29.800 43.800 C 30.460 43.140, 31 40.183, 31 37.229 C 31 33.787, 31.539 31.318, 32.500 30.357 C 33.325 29.532, 34 28.016, 34 26.988 C 34 24.960, 32.668 23.666, 31.639 24.694" stroke="none" fill="#1969cd" fill-rule="evenodd" />
                                            </svg>
                                            <strong class="ml-1">{casa.cantHuespedes}</strong>
                                        </div>
                                        <div class="flex items-center justify-center gap-1 flex-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" version="1.1">
                                                <path d="M 8.655 8.829 C 7.575 10.022, 7 12.412, 7 15.706 C 7 18.974, 6.471 21.194, 5.500 22 C 3.316 23.813, 3.316 41, 5.500 41 C 6.325 41, 7 40.325, 7 39.500 C 7 38.667, 7.889 38, 9 38 C 10.111 38, 11 37.333, 11 36.500 C 11 35.654, 10.106 35, 8.950 35 C 7.086 35, 6.927 34.478, 7.200 29.250 L 7.500 23.500 24 23.500 L 40.500 23.500 40.799 29.221 L 41.098 34.943 27.546 35.221 C 9.538 35.592, 9.504 37.407, 27.497 37.778 C 38.592 38.007, 41 38.319, 41 39.528 C 41 40.338, 41.675 41, 42.500 41 C 44.684 41, 44.684 23.813, 42.500 22 C 41.517 21.184, 41 18.955, 41 15.533 C 41 9.805, 39.084 7, 35.171 7 C 32.289 7, 32.357 9.770, 35.250 10.180 C 37.170 10.453, 37.545 11.197, 37.805 15.250 C 37.988 18.107, 37.689 20, 37.055 20 C 36.475 20, 36 19.395, 36 18.655 C 36 15.462, 32.641 14.220, 24 14.220 C 15.359 14.220, 12 15.462, 12 18.655 C 12 19.395, 11.525 20, 10.945 20 C 10.311 20, 10.012 18.107, 10.195 15.250 L 10.500 10.500 20.250 10.214 C 28.012 9.986, 30 9.629, 30 8.464 C 30 7.278, 28.131 7, 20.155 7 C 11.887 7, 10.045 7.293, 8.655 8.829 M 15.713 17.621 C 14.163 19.170, 15.165 20, 18.583 20 C 21.002 20, 22.033 19.594, 21.756 18.750 C 21.297 17.352, 16.818 16.515, 15.713 17.621 M 26.713 17.621 C 25.163 19.170, 26.165 20, 29.583 20 C 32.002 20, 33.033 19.594, 32.756 18.750 C 32.297 17.352, 27.818 16.515, 26.713 17.621" stroke="none" fill="#1969cd" fill-rule="evenodd" />
                                            </svg>
                                            <strong class="ml-1">{casa.cantAmbientes}</strong>
                                        </div>
                                        <div class="flex items-center justify-center gap-1 flex-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" version="1.1">
                                                <path d="M 9.455 6.455 C 7.390 8.519, 7 9.869, 7 14.955 C 7 20.808, 6.917 21, 4.383 21 C 2.126 21, 1.864 21.309, 2.478 23.250 C 2.869 24.488, 3.652 28.048, 4.218 31.163 C 4.891 34.862, 6.158 37.815, 7.874 39.679 C 10.440 42.468, 10.700 42.525, 19.250 42.164 C 25.899 41.883, 28 41.459, 28 40.397 C 28 39.313, 26.134 39, 19.655 39 C 10.085 39, 8.604 38.086, 7.497 31.500 C 7.128 29.300, 6.609 26.712, 6.345 25.750 C 5.953 24.321, 6.519 24, 9.433 24 C 11.937 24, 13 23.553, 13 22.500 C 13 21.675, 12.325 21, 11.500 21 C 10.339 21, 10 19.689, 10 15.200 C 10 12.010, 10.540 8.860, 11.200 8.200 C 12.850 6.550, 15.503 6.696, 17.016 8.519 C 18.043 9.757, 17.973 10.372, 16.638 11.847 C 14.181 14.563, 14.578 15, 19.500 15 C 21.975 15, 24 14.798, 24 14.550 C 24 14.303, 22.651 12.101, 21.002 9.658 C 16.679 3.253, 13.530 2.379, 9.455 6.455 M 17.694 21.639 C 15.945 23.388, 19.168 24, 30.126 24 C 41.079 24, 42.093 24.154, 41.655 25.750 C 41.391 26.713, 40.872 29.300, 40.503 31.500 C 39.654 36.550, 37.480 39, 33.845 39 C 29.997 39, 30.132 41.576, 34.021 42.354 C 38.760 43.302, 42.042 39.330, 43.835 30.478 C 44.389 27.740, 45.156 24.488, 45.538 23.250 L 46.233 21 32.283 21 C 24.611 21, 18.046 21.288, 17.694 21.639" stroke="none" fill="#1969cd" fill-rule="evenodd" />
                                            </svg>
                                            <strong class="ml-1">{casa.cantBanios}</strong>
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









