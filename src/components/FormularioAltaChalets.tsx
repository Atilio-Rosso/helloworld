import { createSignal } from 'solid-js';
import { setListadoTrigger } from '../lib/listadoTrigger';

const API_BASE_URL = import.meta.env.PUBLIC_API_BASE_URL;

export default function FormularioAltaChalets() {
    const [mensaje, setMensaje] = createSignal('');

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        const data = {
            codigo: form.codigo.value,
            nombre: form.nombre.value,
            puntaje: 0,
            precioAlta: parseFloat(form.precioAlta.value),
            precioMedia: parseFloat(form.precioMedia.value),
            precioBaja: parseFloat(form.precioBaja.value),
            cantHuespedes: parseInt(form.cantHuespedes.value),
            cantAmbientes: parseInt(form.cantAmbientes.value),
            cantBanios: parseInt(form.cantBanios.value),
            latitud: parseFloat(form.latitud.value),
            longitud: parseFloat(form.longitud.value),
        };

        const res = await fetch(`${API_BASE_URL}/casas`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            setMensaje('Chalet creado con éxito');
            form.reset();
            setListadoTrigger(t => t + 1); // ⚠️ esto activa la recarga
        } else {
            setMensaje('Error al enviar los datos');
        }
    };

    return (
        <div class="w-auto min-w-max flex-shrink-0 bg-gray-100 p-4 rounded">
            <form onSubmit={handleSubmit}>
                <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend class="fieldset-legend">Chalets</legend>

                    <label class="label">Código:</label>
                    <input type="text" name="codigo" class="input" placeholder="..." />

                    <label class="label">Nombre Chalet:</label>
                    <input type="text" name="nombre" class="input" placeholder="..." />

                    <label class="label">Precio Temporada Alta:</label>
                    <input type="number" name="precioAlta" class="input" placeholder="..." />

                    <label class="label">Precio Temporada Media:</label>
                    <input type="number" name="precioMedia" class="input" placeholder="..." />

                    <label class="label">Precio Temporada Baja:</label>
                    <input type="number" name="precioBaja" class="input" placeholder="..." />

                    <label class="label">Cantidad de Huéspedes:</label>
                    <input type="number" name="cantHuespedes" class="input" placeholder="..." />

                    <label class="label">Cantidad de Ambientes para Dormir:</label>
                    <input type="number" name="cantAmbientes" class="input" placeholder="..." />

                    <label class="label">Cantidad de Baños:</label>
                    <input type="number" name="cantBanios" class="input" placeholder="..." />

                    <label class="label">Latitud:</label>
                    <input type="number" step="0.000001" name="latitud" class="input" placeholder="..." />

                    <label class="label">Longitud:</label>
                    <input type="number" step="0.000001" name="longitud" class="input" placeholder="..." />

                    <button class="btn btn-outline" type="submit">Enviar</button>
                </fieldset>
                {mensaje() && <p>{mensaje()}</p>}
            </form>
        </div>
    );
}
