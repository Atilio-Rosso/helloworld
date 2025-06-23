import { createSignal, createResource, Show } from 'solid-js';

const fetchCasas = async () => {
    const res = await fetch('http://localhost:3001/casas');
    return res.json();
};

export default function ListadoChalets() {
    const [casas, { refetch }] = createResource(fetchCasas);

    return (
        <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
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
                                <td>
                                    <p>{casa.nombre}</p>
                                </td>
                                <td>
                                    <p>{casa.puntaje}</p>
                                </td>
                                <td>
                                    <p>{casa.precioAlta}</p>
                                </td>
                                <td>
                                    <p>{casa.precioMedia}</p>
                                </td>
                                <td>
                                    <p>{casa.precioBaja}</p>
                                </td>
                                <td>
                                    <p>{casa.cantHuespedes}</p>
                                </td>
                                <td>
                                    <p>{casa.cantAmbientes}</p>
                                </td>
                                <td>
                                    <p>{casa.cantBanios}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Show>
        </div>
    );
}
