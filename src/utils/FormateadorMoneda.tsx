import type { Component } from 'solid-js';

const formatCurrency = (monto: number) =>
    new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(monto);

const Precio: Component<{ monto: number }> = (props) => {
    return <span>{formatCurrency(props.monto)}</span>;
};

export default Precio;