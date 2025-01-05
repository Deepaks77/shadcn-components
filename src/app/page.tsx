"use client";
export default function Home() {
  const phoneNumber = "7404196036";
  const handleClick = () => {
    const isMacOS = navigator.userAgent.includes("Macintosh");
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const isWindows = navigator.userAgent.includes("Windows");

    // Attempt to call via default app, otherwise display the number
    const hasDefaultDialer = confirm(
      "Do you want to attempt calling using your default dialer? Click 'Cancel' to copy the number instead."
    );
    if (hasDefaultDialer) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      navigator.clipboard.writeText(phoneNumber).then(() => {
        alert(`Phone number ${phoneNumber} copied to clipboard.`);
      });
    }

    if (isMobile) {
      // Directly call on mobile
      window.location.href = `tel:${phoneNumber}`;
    } else if (isMacOS) {
      // Dial the number in macOS (FaceTime)
      window.location.href = `tel:${phoneNumber}`;
    } else if (isWindows) {
      // Attempt to call via default app, otherwise display the number
      const hasDefaultDialer = confirm(
        "Do you want to attempt calling using your default dialer? Click 'Cancel' to copy the number instead."
      );
      if (hasDefaultDialer) {
        window.location.href = `tel:${phoneNumber}`;
      } else {
        navigator.clipboard.writeText(phoneNumber).then(() => {
          alert(`Phone number ${phoneNumber} copied to clipboard.`);
        });
      }
    } else {
      // Fallback for unknown platforms
      alert(`Please dial this number: ${phoneNumber}`);
    }
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <button
          onClick={handleClick}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Call {phoneNumber}
        </button>
      </main>
    </div>
  );
}
