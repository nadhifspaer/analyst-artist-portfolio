import * as React from "react";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const whatsappSVG = (
  <svg width={20} height={20} viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#25D366"/><path d="M16 5.5C10.2 5.5 5.5 10.2 5.5 16c0 2.55.85 4.89 2.28 6.8l-1.5 4.37 4.49-1.48A10.45 10.45 0 0 0 16 26.5c5.8 0 10.5-4.7 10.5-10.5S21.8 5.5 16 5.5zm0 18.86c-1.9 0-3.7-.57-5.23-1.64l-.37-.25-2.66.88.89-2.59-.24-.39A8.62 8.62 0 0 1 7.38 16c0-4.76 3.87-8.64 8.62-8.64s8.62 3.88 8.62 8.64S20.76 24.36 16 24.36zm4.71-5.53c-.26-.13-1.5-.74-1.73-.82-.23-.09-.4-.13-.57.13-.16.25-.66.81-.8.98-.14.17-.29.19-.55.06-.27-.13-1.13-.42-2.15-1.34-.79-.7-1.33-1.56-1.48-1.83-.15-.27-.02-.41.12-.54.13-.13.29-.34.43-.51.14-.17.18-.29.27-.48.09-.17.04-.32-.02-.45-.06-.13-.57-1.38-.78-1.88-.2-.48-.41-.42-.57-.43l-.49-.01c-.17 0-.43.06-.66.28-.23.22-.9.82-.9 1.98 0 1.16.73 2.28 1.15 2.72.42.44 1.49 1.49 3.6 2.24a12.45 12.45 0 0 0 1.25.37c.52.08.99.08 1.36.05.41-.04 1.24-.51 1.41-1.01.18-.49.18-.91.13-.99-.06-.06-.23-.15-.49-.27z" fill="#fff"/></svg>
);
// Kaggle SVG
const kaggleSVG = (
  <svg width={20} height={20} viewBox="0 0 33 33" fill="none"><rect width="33" height="33" rx="6" fill="#20BEFF"/><path d="M24.08 22h-2.54l-4.44-7.2-2.09 2.41V22h-2.09v-12h2.09v7.02l6.32-7.02h2.44l-5.23 5.8L24.08 22Z" fill="#fff"/></svg>
);

const ContactSection = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(formRef.current!);
    const email = data.get("email");
    const name = data.get("name");
    const message = data.get("message");

    try {
      const res = await fetch(
        "https://ajibbbvdxysgztmlltzi.supabase.co/functions/v1/send-contact-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, name, message }),
        }
      );

      if (res.ok) {
        toast("Your message has been sent!", { description: "I'll contact you soon 👋" });
        formRef.current?.reset();
      } else {
        // Try to surface the detailed error coming from the server
        let errorMsg = "Failed to send your message.";
        try {
          const errData = await res.json();
          errorMsg = errData?.error ? `Failed to send: ${errData.error}` : errorMsg;
        } catch {}
        toast(errorMsg, {
          description: "Please try again later or contact me directly by email.",
        });
      }
    } catch (err: any) {
      // Show exact error
      toast("Unexpected error. Try again later.", {
        description: typeof err === "object" && err?.message ? err.message : String(err),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-neutral-900 dark:bg-black text-white py-20 px-4 flex flex-col items-center">
      <div className="max-w-lg w-full mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-playfair">Get In Touch</h2>
        <p className="text-gray-300 text-base mb-6">
          Want to connect, discuss a project, or reach out for collaboration? Drop your email, name, and message below. I'll get back to you as soon as I can!
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
          name="name"
          className="w-full px-4 py-3 rounded bg-neutral-700 text-white focus:ring-2 focus:ring-green-400 border border-neutral-600 placeholder:text-gray-400"
          placeholder="Enter name"
          type="text"
          required
        />
        <textarea
          name="message"
          className="w-full px-4 py-3 rounded bg-neutral-700 text-white focus:ring-2 focus:ring-green-400 border border-neutral-600 placeholder:text-gray-400 min-h-[120px]"
          placeholder="Enter your message"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-lg px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-3 shadow focus:outline-none focus:ring-2 focus:ring-green-300 mt-2 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Sending..." : <>Submit <ArrowRight className="ml-1 w-5 h-5" /></>}
        </button>
      </form>

      {/* Social section: arranged in a row, icons clickable as described */}
      <div className="mt-10 flex flex-row gap-6 items-center justify-center">
        {/* Instagram - clickable */}
        <a
          href="https://www.instagram.com/nadhifspaer/profilecard/?igsh=MTk4bTMxZTkwN2c5aA=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
          aria-label="Instagram"
        >
          <Instagram className="w-6 h-6 text-pink-500" />
        </a>
        {/* WhatsApp - show number */}
        <span className="text-white font-medium text-base px-3 flex items-center">{whatsappSVG}<span className="ml-1">08111119363</span></span>
        {/* LinkedIn - clickable */}
        <a
          href="https://www.linkedin.com/in/nadhif-spaer-6271702a2/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6 text-blue-500" />
        </a>
        {/* Kaggle - clickable */}
        <a
          href="https://www.kaggle.com/nadhifspaer"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
          aria-label="Kaggle"
        >
          {kaggleSVG}
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
