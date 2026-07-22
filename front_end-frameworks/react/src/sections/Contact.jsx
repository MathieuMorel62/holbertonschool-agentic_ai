import { useState } from "react";

import {
  AtSign,
  FolderCode,
  Mail,
  Sparkles,
  Users,
  User,
} from "lucide-react";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

const defaultFeedbackMessage = "Please fill all required fields.";

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSending, setIsSending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState(
    defaultFeedbackMessage,
  );

  const isNameValid = formData.name.trim().length >= 2;

  const isEmailValid =
    formData.email.includes("@") && formData.email.includes(".");

  const isMessageValid = formData.message.trim().length >= 10;

  const isFormValid =
    isNameValid && isEmailValid && isMessageValid;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setFeedbackMessage(defaultFeedbackMessage);
  }

  function getFieldClass(isValid) {
    const baseClass =
      "w-full rounded-md border border-slate-800 bg-black px-4 py-3 text-sm text-slate-50 placeholder:text-slate-500 shadow-xl shadow-slate-950/40 transition focus:outline-none";

    if (isValid) {
      return `${baseClass} focus:border-violet-500`;
    }

    return `${baseClass} focus:border-red-500`;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    setIsSending(true);
    setFeedbackMessage("Sending message...");

    await new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });

    setIsSending(false);
    setFormData(initialFormData);
    setFeedbackMessage("Your message has been sent successfully.");

    setTimeout(() => {
      setFeedbackMessage(defaultFeedbackMessage);
    }, 5000);
  }

  return (
    <section
      id="contact-section"
      className="scroll-mt-16 relative overflow-hidden border-b border-slate-900 py-24 text-slate-50"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(168,85,247,0.35),transparent_32%),radial-gradient(circle_at_85%_60%,rgba(59,130,246,0.25),transparent_28%),linear-gradient(135deg,#1e1238_0%,#0f172a_45%,#020617_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(2,6,23,0.45)_75%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 text-center">
        <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs text-violet-300">
          ✦ Start your AI journey ✦
        </span>

        <h2 className="text-4xl font-black leading-none tracking-tight md:text-5xl">
          Ready to Explore
          <span className="block text-violet-300">
            Agentic AI?
          </span>
        </h2>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="https://www.holbertonschool.fr/rejoindre-lhippocamp"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-600"
          >
            Enroll at Holberton School →
          </a>

          <a
            href="https://www.holbertonschool.fr/admission"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-slate-800 bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/40 transition hover:bg-slate-900"
          >
            Need more information?
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <FolderCode className="h-4 w-4 text-violet-500" />
            Project-based learning
          </span>

          <span className="flex items-center gap-2">
            <Users className="h-4 w-4 text-violet-500" />
            Peer learning environment
          </span>

          <span className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-violet-500" />
            AI-powered workflows
          </span>
        </div>

        <form
          className="mt-8 flex w-full max-w-2xl flex-col gap-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-8 text-left shadow-2xl shadow-slate-950/40 backdrop-blur"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label
              className="ml-2 flex items-center gap-2 text-sm font-semibold"
              htmlFor="name"
            >
              <User className="h-4 w-4 text-violet-500" />
              Full name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name..."
              value={formData.name}
              onChange={handleChange}
              className={getFieldClass(isNameValid)}
              autoComplete="off"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="ml-2 flex items-center gap-2 text-sm font-semibold"
              htmlFor="email"
            >
              <AtSign className="h-4 w-4 text-violet-500" />
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className={getFieldClass(isEmailValid)}
              autoComplete="off"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="ml-2 flex items-center gap-2 text-sm font-semibold"
              htmlFor="message"
            >
              <Mail className="h-4 w-4 text-violet-500" />
              Message
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project or learning goals!"
              value={formData.message}
              onChange={handleChange}
              className={`${getFieldClass(isMessageValid)} min-h-32 resize-none`}
              autoComplete="off"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid || isSending}
            className={`w-full rounded-md px-4 py-3 font-semibold text-white shadow-lg shadow-violet-500/40 transition ${
              isFormValid && !isSending
                ? "cursor-pointer bg-violet-500 hover:bg-violet-600"
                : "cursor-not-allowed bg-violet-500 opacity-60"
            }`}
          >
            {isSending ? "Sending..." : "Send message"}
          </button>

          <p className="min-h-5 text-center text-sm text-slate-400"
            role="status"
            aria-live="polite"
          >
            {feedbackMessage}
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
