
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format price in CLP
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  }).format(price);
}

// Generate WhatsApp URL with preformatted message
export function generateWhatsAppUrl(
  phoneNumber: string,
  items: Array<{ name: string; quantity: number; price: number }>,
  totalPrice: number
): string {
  const itemsList = items
    .map(item => `• ${item.name} x ${item.quantity}`)
    .join('\n');

  const formattedTotal = formatPrice(totalPrice);

  const message = `¡Hola! Quisiera realizar el siguiente pedido en Carnes el Novillo:
  
${itemsList}

Total: ${formattedTotal}

Quedo atento a la confirmación. Gracias.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
