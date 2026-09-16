/**
 * Secure Payment & Client Verification Configuration
 * 
 * Standard incremental client passcode structure:
 * Starts with "client" followed by standard 2-digit incremented numbers:
 * client01, client02, client03, client04, ..., client99
 * 
 * (Accepts "client01", "Client01", "client 01", "CLIENT 02", etc.)
 */

export interface ClientPasscodeValidation {
  isValid: boolean;
  clientNumber?: string;  // e.g. "01", "02", "03", "10"
  formattedCode?: string; // e.g. "client01"
}

/**
 * Validates incremental client passcodes (client01, client02, client03, etc.)
 */
export function validateClientPasscode(inputToken: string): ClientPasscodeValidation {
  if (!inputToken) return { isValid: false };

  // Normalize: trim and strip special symbols (- or _)
  const clean = inputToken.trim().replace(/[\-_]/g, '');

  // Standard structure: "client" optionally with a space, followed by incremented digits
  // Matches: client01, client 01, Client02, Client 03, CLIENT04, etc.
  const match = clean.match(/^client\s*0*([1-9]\d*)$/i);
  if (match) {
    const rawNum = parseInt(match[1], 10);
    // Pad to standard 2-digit format: 01, 02, 03, ..., 15, 99
    const formattedNum = rawNum < 10 ? `0${rawNum}` : `${rawNum}`;
    return {
      isValid: true,
      clientNumber: formattedNum,
      formattedCode: `client${formattedNum}`,
    };
  }

  // Backup VIP aliases
  const upperNoSpaces = clean.replace(/\s+/g, '').toUpperCase();
  if (['SANDY20', 'SANTHOSH20', 'ADVANCE20'].includes(upperNoSpaces)) {
    return {
      isValid: true,
      clientNumber: 'VIP',
      formattedCode: upperNoSpaces,
    };
  }

  return { isValid: false };
}

// Your official UPI ID:
export const OFFICIAL_UPI_ID = process.env.OFFICIAL_UPI_ID || 'santhoshprasanna81895@oksbi';
