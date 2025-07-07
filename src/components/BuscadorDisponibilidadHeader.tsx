import { createSignal } from 'solid-js';

const API_BASE_URL = import.meta.env.PUBLIC_API_BASE_URL

export default function BuscadorDisponibilidaHeader() {
    const [mensaje, setMensaje] = createSignal('');

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        const data = {
            checkIn: form.checkIn.value,
            checkOut: form.checkOut.value,
            pax: form.pax.value
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

        <div class="flex justify-center w-[85%] mx-auto">
            <form onSubmit={handleSubmit}>
                <fieldset class="flex fieldset bg-base-200 border-base-300 rounded-box border p-2">
                    <div class="flex"><legend class="fieldset-legend">Ver Disponibilidad:</legend></div>

                    <div class="flex gap-2">
                        <input type="text" name="checkIn" class="input" placeholder="Check-In:..." /></div>

                    <div class="flex gap-2">
                        <input type="email" name="checkOut" class="input" placeholder="Check-Out:..." /></div>

                    <div class="flex gap-2"><label class="label">Huéspedes:</label>
                        <input type="number" name="huespedes" class="input" placeholder="..." /></div>

                    <div><button class="btn btn-outline" type="submit">Consultar</button></div>
                </fieldset>
            </form>
            {mensaje() && <p>{mensaje()}</p>}
        </div>

    );
}
