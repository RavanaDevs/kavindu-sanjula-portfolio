"use client"
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactSection() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("Send Message");
  const [sendEnabled, setSendEnabled] = useState<boolean>(true);

  const sendEmail = async (e:FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setSendEnabled(false);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const { error } = await response.json();
        setStatus(error || "Failed to send email.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <section id="contact" className="py-20 bg-theme-dark">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-8 animate-fade-in">
                  {"Let's Connect"}
                </h2>
                <p className="text-gray-300 mb-12 animate-fade-in">
                  {
                    "I'm always interested in hearing about new projects and opportunities."
                  }
                </p>

                <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up">
                  <a
                    href="https://github.com/ravanadevs"
                    className="w-12 h-12 rounded-full bg-theme-darker flex items-center justify-center text-theme-red hover:bg-theme-red hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kavindu-sanjula-802134294/"
                    className="w-12 h-12 rounded-full bg-theme-darker flex items-center justify-center text-theme-red hover:bg-theme-red hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </a>
                  {/* <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-theme-darker flex items-center justify-center text-theme-red hover:bg-theme-red hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Twitter size={24} />
                  </a> */}
                  <a
                    href="mailto:ravanadevs@gmail.com"
                    className="w-12 h-12 rounded-full bg-theme-darker flex items-center justify-center text-theme-red hover:bg-theme-red hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Mail size={24} />
                  </a>
                </div>

                <div className="bg-theme-darker p-8 rounded-lg animate-fade-in-up">
                  <form className="space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-theme-dark text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-red transition-all"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-theme-dark text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-red transition-all"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 bg-theme-dark text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-red transition-all"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-8 py-3 bg-theme-red text-white rounded-lg hover:bg-red-700 transition-colors"
                      onClick={sendEmail}
                      disabled={!sendEnabled}
                    >
                      {status}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
