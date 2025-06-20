// src/components/PanelAdmin.tsx
import { createSignal, createResource, Show } from 'solid-js';

const fetchConsultas = async () => {
    const res = await fetch('http://localhost:3001/consultas');
    return res.json();
};

export default function PanelAdmin() {
    const [consultas, { refetch }] = createResource(fetchConsultas);
    const [editandoId, setEditandoId] = createSignal<number | null>(null);
    const [formData, setFormData] = createSignal({ nombre: '', email: '', mensaje: '' });

    const handleEdit = (consulta) => {
        setEditandoId(consulta.id);
        setFormData({ nombre: consulta.nombre, email: consulta.email, mensaje: consulta.mensaje });
    };

    const handleSave = async (id: number) => {
        await fetch(`http://localhost:3001/consultas/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData())
        });
        setEditandoId(null);
        refetch();
    };

    const handleDelete = async (id: number) => {
        if (confirm('¿Seguro que querés eliminar esta consulta?')) {
            await fetch(`http://localhost:3001/consultas/${id}`, {
                method: 'DELETE'
            });
            refetch();
        }
    };

    return (
        <div>
            <h2>Panel de Consultas</h2>
            <Show when={consultas()} fallback={<p>Cargando...</p>}>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Mensaje</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {consultas().map((consulta) => (
                            <tr>
                                <td>
                                    <Show
                                        when={editandoId() === consulta.id}
                                        fallback={<span>{consulta.nombre}</span>}
                                    >
                                        <input
                                            type="text"
                                            value={formData().nombre}
                                            onInput={(e) =>
                                                setFormData({ ...formData(), nombre: e.currentTarget.value })
                                            }
                                        />
                                    </Show>
                                </td>
                                <td>
                                    <Show
                                        when={editandoId() === consulta.id}
                                        fallback={<span>{consulta.email}</span>}
                                    >
                                        <input
                                            type="email"
                                            value={formData().email}
                                            onInput={(e) =>
                                                setFormData({ ...formData(), email: e.currentTarget.value })
                                            }
                                        />
                                    </Show>
                                </td>
                                <td>
                                    <Show
                                        when={editandoId() === consulta.id}
                                        fallback={<span>{consulta.mensaje}</span>}
                                    >
                                        <textarea
                                            value={formData().mensaje}
                                            onInput={(e) =>
                                                setFormData({ ...formData(), mensaje: e.currentTarget.value })
                                            }
                                        />
                                    </Show>
                                </td>
                                <td>
                                    <Show
                                        when={editandoId() === consulta.id}
                                        fallback={
                                            <>
                                                <button onClick={() => handleEdit(consulta)}>Editar</button>
                                                <button onClick={() => handleDelete(consulta.id)}>Eliminar</button>
                                            </>
                                        }
                                    >
                                        <button onClick={() => handleSave(consulta.id)}>Guardar</button>
                                        <button onClick={() => setEditandoId(null)}>Cancelar</button>
                                    </Show>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Show>
        </div>
    );
}
