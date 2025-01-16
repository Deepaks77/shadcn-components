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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-background-white">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start !bg-white">
        <button
          onClick={handleClick}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Call {phoneNumber}
        </button>

        <div className="p-4 bg-red-50">
          <div className="relative bg-white">
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 left-2 z-10 origin-[0] bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-900 px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, #ffffff 50%)",
              }}
            >
              Floating outlined
            </label>
          </div>
        </div>
      </main>
    </div>
  );
}
