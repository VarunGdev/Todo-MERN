import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Plasma from "./Components/Plasma";
import BlurText from "./Components/BlurText";
import { FiArrowRight } from "react-icons/fi";

function LandingPage() {
  const handleAnimationComplete = () => console.log("Animation completed!");

  return (
    <div className="relative w-full min-h-screen bg-black max-h-[100vh] overflow-y-auto overflow-x-hidden pr-2 [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-orange-500 [&::-webkit-scrollbar-thumb:hover]:bg-orange-400 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800">
      <Plasma
        color="#fd9874d5"
        speed={0.6}
        direction="forward"
        scale={1.1}
        opacity={0.8}
        mouseInteractive={true}
      />

      <Navbar />
      <section
        id="home"
        className="relative z-10 flex flex-col items-center justify-center h-screen text-white px-4"
      >
        <h1 className="text-white font-black text-4xl md:text-6xl tracking-tight mb-4 text-center">
          Task<span className="text-orange-500">Flow</span>
        </h1>
        <p className="text-gray-400 text-base md:text-xl mb-10 text-center max-w-xl font-normal tracking-wide leading-relaxed mx-auto">
          Stay organized and track your tasks{" "}
          <span className="text-white font-medium">efficiently.</span>
        </p>
        <Link
          to="/app"
          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-orange-500 rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
            <FiArrowRight className="w-6 h-6" />
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-orange-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            Get Started
          </span>
          <span className="relative invisible">Get Started</span>
        </Link>
      </section>

      <section
        id="about"
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 bg-black/90"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-slate-800 rounded-3xl -rotate-3 scale-105 border border-white/5 shadow-xl shadow-black/30 transition-transform group-hover:rotate-0"></div>
              <img
                src="https://d502jbuhuh9wk.cloudfront.net/orgData/67eb78d3f6b6fc424a66a430/pages/assets/images/rDLyPimge11795.jpg"
                alt="Screenshot or visual representing the application in use"
                className="relative rounded-3xl object-cover w-full h-auto aspect-square border-4 border-slate-900 shadow-2xl transition-all group-hover:scale-[1.02] group-hover:-translate-y-2"
              />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-orange-500 rounded-full blur-[40px] opacity-40"></div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-start gap-3">
                <div className="w-10 h-[2px] bg-orange-500 rounded-full"></div>
                <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                  Discover Our Mission
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
                <BlurText
                  text="About Us"
                  delay={200}
                  animateBy="words"
                  direction="down"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-5xl md:text-7xl font-bold"
                />
              </h2>
              <div className="mt-4 space-y-3 text-slate-400 text-lg leading-relaxed max-w-xl">
                <p>
                  At <span className="text-white font-semibold">Bexo.ai</span>,
                  we started with a simple observation: most productivity tools
                  actually make you less productive by adding complexity. We
                  decided to fix that.
                </p>
                <p>
                  We provide a refined To-do list service that prioritizes your
                  mental bandwidth above all else. Our platform is built to help
                  you reduce decision fatigue and reclaim your time for what
                  truly matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 bg-black/90"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-600/10 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="flex justify-center">
                <BlurText
                  text="Contact Us"
                  delay={200}
                  animateBy="words"
                  direction="down"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-5xl md:text-7xl font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-4">
                <div className="bg-slate-900/50 border border-white/5 p-6 rounded-3xl backdrop-blur-md hover:border-orange-500/30 transition-colors">
                  <div className="w-12 h-12 bg-orange-500/20 text-orange-500 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-slate-400 text-sm">
                    gdevvarunsha@gmail.com
                  </p>
                </div>

                <div className="bg-slate-900/50 border border-white/5 p-6 rounded-3xl backdrop-blur-md hover:border-orange-500/30 transition-colors">
                  <div className="w-12 h-12 bg-orange-500/20 text-orange-500 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-1">Office</h4>
                  <p className="text-slate-400 text-sm">
                    Fair Tower, 74 sector, Mohali
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl">
                <form
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target;
                    const name = form.fullName.value.trim();
                    const email = form.email.value.trim();
                    const subject = form.subject.value;
                    const message = form.message.value.trim();

                    if (!name || !email || !subject || !message) {
                      alert("Please fill in all fields.");
                      return;
                    }

                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                      alert("Please enter a valid email address.");
                      return;
                    }

                    alert("Email sent!");
                    form.reset();
                  }}
                >
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="First Last"
                      className="bg-slate-900/50 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="yourmail@gmail.com"
                      className="bg-slate-900/50 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>

                  <div className="flex flex-col space-y-2 md:col-span-2 relative">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                      Subject
                    </label>
                    <select
                      name="subject"
                      className="bg-black/70 border border-orange-500 text-white rounded-2xl p-4 pr-10 focus:ring-2 focus:ring-orange-500 outline-none transition-all appearance-none"
                    >
                      <option className="bg-black/70 text-white">Inquiry</option>
                      <option className="bg-black/70 text-white">Support</option>
                      <option className="bg-black/70 text-white">Feedback</option>
                    </select>
                    <svg
                      className="w-5 h-5 text-orange-500 absolute right-3 top-1/2 -translate-y-[-4px] pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="How can we help you?"
                      className="bg-slate-900/50 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                    ></textarea>
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <button
                      type="submit"
                      className="relative flex w-full items-center justify-center p-4 px-6 py-4 overflow-hidden font-bold text-orange-500 transition duration-300 ease-out border-2 border-orange-500 rounded-2xl shadow-md group cursor-pointer"
                    >
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                        <FiArrowRight className="w-6 h-6" />
                      </span>
                      <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
                        Send Message
                      </span>
                      <span className="relative invisible">Send Message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;