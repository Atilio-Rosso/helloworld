import { createSignal } from 'solid-js';

const API_BASE_URL = import.meta.env.PUBLIC_API_BASE_URL

export default function FormularioConsulta() {
    const [mensaje, setMensaje] = createSignal('');

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        const data = {
            nombre: form.nombre.value,
            email: form.email.value,
            mensaje: form.mensaje.value
        };

        const res = await fetch(`${API_BASE_URL}/consultas`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            setMensaje('Consulta enviada con éxito');
            form.reset();
        } else {
            setMensaje('Error al enviar la consulta');
        }
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend class="fieldset-legend">Consultas</legend>

                        <label class="label">Nombre:</label>
                        <input type="text" name="nombre" class="input" placeholder="Tu nombre..." />

                        <label class="label">Email:</label>
                        <input type="email" name="email" class="input" placeholder="Tu email..." />

                        <label class="label">Mensaje:</label>
                        <input type="text" name="mensaje" class="input" placeholder="Tu mensaje..." />

                        <button class="btn btn-outline" type="submit">Enviar</button>
                    </fieldset>
                </form>
                {mensaje() && <p>{mensaje()}</p>}
            </div>
        </>
    );
}
