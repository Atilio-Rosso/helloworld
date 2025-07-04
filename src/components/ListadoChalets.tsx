import { createResource, createEffect, Show } from 'solid-js';
import { listadoTrigger } from '../lib/listadoTrigger';

const API_BASE_URL = import.meta.env.PUBLIC_API_BASE_URL;

const fetchCasas = async () => {
    const res = await fetch(`${API_BASE_URL}/casas`);
    return res.json();
};

export default function ListadoChalets() {
    const [casas, { refetch }] = createResource(fetchCasas);

    // Reaccionamos al trigger global
    createEffect(() => {
        listadoTrigger(); // dependencia reactiva
        refetch();
    });

    return (
        <div class="flex-1 bg-gray-200 p-4 rounded">
            <h1>Listado Chalets</h1>
            <Show when={casas()} fallback={<p>Cargando...</p>}>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Puntaje</th>
                            <th>Precio Alta</th>
                            <th>Precio Media</th>
                            <th>Precio Baja</th>
                            <th>Pax</th>
                            <th>Ambientes</th>
                            <th>Ba&ntilde;os</th>
                        </tr>
                    </thead>
                    <tbody>
                        {casas().map((casa) => (
                            <tr>
                                <td>{casa.nombre}</td>
                                <td>{casa.puntaje}</td>
                                <td>{casa.precioAlta}</td>
                                <td>{casa.precioMedia}</td>
                                <td>{casa.precioBaja}</td>
                                <td>{casa.cantHuespedes}</td>
                                <td>{casa.cantAmbientes}</td>
                                <td>{casa.cantBanios}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Show>
        </div>
    );
}
