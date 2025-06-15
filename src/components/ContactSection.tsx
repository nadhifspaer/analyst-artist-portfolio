
import * as React from "react";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  // Email sending via mailto link. Could use backend/email API if needed.
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(formRef.current!);
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");
    // Compose email body
    const mailto = `mailto:your@email.com?subject=Contact from Portfolio&body=Email: ${email}%0AMobile: ${phone}%0A${encodeURIComponent(
      message as string,
    )}`;
    window.open(mailto, "_blank");
    formRef.current?.reset();
  };

  return (
    <section className="w-full bg-neutral-900 dark:bg-black text-white py-20 px-4 flex flex-col items-center">
      <div className="max-w-lg w-full mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-playfair">Get In Touch</h2>
        <p className="text-gray-300 text-base mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <form
        ref={formRef}
        className="w-full max-w-md flex flex-col gap-5 items-center"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <input
          name="email"
          className="w-full px-4 py-3 rounded bg-neutral-700 text-white focus:ring-2 focus:ring-green-400 border border-neutral-600 placeholder:text-gray-400"
          placeholder="Please enter your email"
          type="email"
          required
        />
        <input
          name="phone"
          className="w-full px-4 py-3 rounded bg-neutral-700 text-white focus:ring-2 focus:ring-green-400 border border-neutral-600 placeholder:text-gray-400"
          placeholder="Enter mobile"
          type="text"
        />
        <textarea
          name="message"
          className="w-full px-4 py-3 rounded bg-neutral-700 text-white focus:ring-2 focus:ring-green-400 border border-neutral-600 placeholder:text-gray-400 min-h-[120px]"
          placeholder="Enter your message"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-lg px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-3 shadow focus:outline-none focus:ring-2 focus:ring-green-300 mt-2"
        >
          Submit <ArrowRight className="ml-1 w-5 h-5" />
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
