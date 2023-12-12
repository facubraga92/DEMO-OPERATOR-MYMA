import useScript from './useScript';

export default function useMercadoPago() {
    const { MercadoPago } = useScript(
        'https://sdk.mercadopago.com/js/v2',
        'MercadoPago'
    );

    return MercadoPago;
}
