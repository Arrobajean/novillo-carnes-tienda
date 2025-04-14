
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { CartItem } from "@/context/CartContext";

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
  items: CartItem[],
  totalPrice: number
): string {
  const itemsList = items
    .map(item => {
      // Format the item based on whether it's weight-based or unit-based
      const isWeightProduct = item.unit === 'kg' || item.unit === 'gr';
      
      if (isWeightProduct && item.weightQuantity) {
        const weightDisplay = item.weightQuantity === 0.25 ? '250gr' : 
                             item.weightQuantity === 0.5 ? '500gr' : 
                             `${item.weightQuantity}kg`;
        return `• ${item.name} - ${weightDisplay} (${formatPrice(item.price)}/kg) - ${formatPrice(item.price * item.weightQuantity)}`;
      } else {
        return `• ${item.name} × ${item.quantity} - ${formatPrice(item.price)} c/u - ${formatPrice(item.price * item.quantity)}`;
      }
    })
    .join('\n');

  const formattedTotal = formatPrice(totalPrice);

  const message = `¡Hola! Quisiera realizar el siguiente pedido en Carnes el Novillo:
  
${itemsList}

Total: ${formattedTotal}

Quedo atento a la confirmación. Gracias.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
