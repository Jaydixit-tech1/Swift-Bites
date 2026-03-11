/**
 * Format amount in Indian Rupees (INR)
 * @param {number} amount
 * @returns {string} e.g. "₹299" or "₹1,250"
 */
export const formatINR = (amount) => {
  if (typeof amount !== 'number' || Number.isNaN(amount)) return '₹0';
  return `₹${amount.toLocaleString('en-IN', { maximumFractionDigits: 2, minimumFractionDigits: 0 })}`;
};
