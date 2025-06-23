import { createSignal } from 'solid-js';

export default function FormularioAltaChalets() {
    const [mensaje, setMensaje] = createSignal('');

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        const data = {
            codigo: form.codigo.value,
            nombre: form.nombre.value,
            precioAlta: form.precioAlta.value,
            precioMedia: form.precioMedia.value,
            precioBaja: form.precioBaja.value,
            cantHuespedes: form.cantHuespedes.value,
            cantAmbientes: form.cantAmbientes.value,
            cantBanios: form.cantBanios.value,
            latitud: form.latitud.value,
            longitud: form.longitud.value
        };

        const res = await fetch('http://localhost:3001/casas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            setMensaje('Chalet creado con éxito');
            form.reset();
        } else {
            setMensaje('Error al enviar los datos');
        }
    };


    return (
        <>
            <div>
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
                </form>
                {mensaje() && <p>{mensaje()}</p>}
            </div>
        </>
    );
}
