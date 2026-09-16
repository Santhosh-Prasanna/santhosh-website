import { NextResponse } from 'next/server';
import { validateClientPasscode, OFFICIAL_UPI_ID } from '@/config/payment';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const token = (body.token || '').trim();

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Please enter your client project passcode.' },
        { status: 400 }
      );
    }

    const result = validateClientPasscode(token);

    if (result.isValid) {
      return NextResponse.json({
        success: true,
        upiId: OFFICIAL_UPI_ID,
        clientNumber: result.clientNumber,
        formattedCode: result.formattedCode,
        clientStatus: `Verified Client #${result.clientNumber}`,
        message: `Project agreement confirmed for Client #${result.clientNumber}. UPI payment gateway unlocked.`,
      });
    }

    return NextResponse.json(
      {
        success: false,
        message:
          'Access Restricted: Invalid project passcode. To prevent payment fraud, UPI coordinates are released exclusively to clients with an authorized passcode (e.g. client01, client02, client03).',
      },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: 'Server verification error. Please try again.' },
      { status: 500 }
    );
  }
}
