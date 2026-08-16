export const CHECKOUT_URL_BASICO = "https://pay.wiapy.com/r6SAZycWWnuI";
export const CHECKOUT_URL_COMPLETO = "https://pay.wiapy.com/z3-EciYrxvvi";

// Checkout do Completo com desconto (R$ 29,90), usado no modal de upsell.
export const CHECKOUT_URL_COMPLETO_PROMO = "https://pay.wiapy.com/Cg4ph7DjBf8";

// Fallback para qualquer CTA que não especifique um plano.
export const CHECKOUT_URL = CHECKOUT_URL_COMPLETO;

// Duração do contador da oferta. Altere aqui pra mudar o prazo (em horas).
export const COUNTDOWN_DURATION_MS = 24 * 60 * 60 * 1000;
