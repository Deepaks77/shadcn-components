"use client";

const FAQSection = () => {
  return (
    <section className="bg-blue-900 text-white py-8 px-6">
      <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {[
          "Can I customize notifications?",
          "When is my trip charged?",
          "Can I customize notifications?",
        ].map((question, idx) => (
          <details key={idx} className="bg-blue-800 p-4 rounded-lg">
            <summary className="cursor-pointer">{question}</summary>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
