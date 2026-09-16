'use client';

export default function WhatsAppFloat() {
  const handleClick = () => {
    window.open('/whatsapp', '_blank', 'noopener,noreferrer');
  };

  return (
    <aside className="whatsapp-float-container" aria-label="WhatsApp Quick Contact">
      <button
        type="button"
        onClick={handleClick}
        className="whatsapp-float-btn"
        id="whatsapp-floating-button"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="whatsapp-pulse-ring" aria-hidden="true"></span>

        {/* WhatsApp Icon */}
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="whatsapp-icon-svg"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.05-1.92-.477-1.397-.571-2.482-1.996-2.55-2.088-.069-.092-.563-.748-.563-1.425 0-.677.354-1.009.479-1.147.126-.138.275-.172.367-.172.092 0 .183.001.263.005.085.004.198-.032.309.234.115.275.391.954.425 1.024.035.069.058.149.011.239-.046.092-.069.149-.138.23-.069.08-.145.179-.207.24-.069.069-.141.144-.061.282.08.138.358.591.768.956.528.47 0.973.616 1.111.685.138.069.218.058.299-.035.08-.092.345-.402.437-.539.092-.138.184-.115.31-.069.126.046.804.379.942.448.138.069.23.103.264.161.034.057.034.332-.11.737z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.177L2 22l4.981-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.05c-1.635 0-3.15-.494-4.417-1.341l-.317-.213-2.955.827.844-2.887-.234-.339A8.026 8.026 0 0 1 3.95 12c0-4.439 3.611-8.05 8.05-8.05 4.439 0 8.05 3.611 8.05 8.05 0 4.439-3.611 8.05-8.05 8.05z" />
        </svg>

        {/* Floating Tooltip Label */}
        <span className="whatsapp-float-tooltip">Chat on WhatsApp</span>
      </button>
    </aside>
  );
}

