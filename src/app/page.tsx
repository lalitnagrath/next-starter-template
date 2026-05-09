import Image from "next/image";

export default function ScapiaReferralLandingPage() {
  const features = [
    {
      title: 'Zero Forex Markup & LTF Card',
      desc: 'Spend internationally without paying extra forex charges.',
    },
    {
      title: 'Airport Benefits',
      desc: 'Enjoy lounge access, dining and travel perks across airports.',
    },
    {
      title: 'Travel Rewards',
      desc: 'Earn rewards on every trip and redeem them for future travel.',
    },
  ];

  const faqs = [
    {
      q: 'Is the card lifetime free?',
      a: 'Yes, the Scapia card is lifetime free with no joining or annual fees.',
    },
    {
      q: 'Does it support UPI?',
      a: 'Yes, the RuPay variant supports UPI payments.',
    },
    {
      q: 'How do rewards work?',
      a: 'You earn Scapia Coins that can be redeemed for travel bookings.',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.35),_transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.25),_transparent_30%)]" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            Best LTF Credit Cards
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#features" className="hover:text-white transition">
              Features
            </a>
            <a href="#benefits" className="hover:text-white transition">
              Benefits
            </a>
            <a href="#faq" className="hover:text-white transition">
              FAQ
            </a>
          </nav>

          <button className="rounded-full bg-white text-black px-5 py-2 font-semibold hover:scale-105 transition">
            <a href="https://apply.scapia.cards/landing_page?referral_code=neqk4m" >Apply Now</a>a>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-28 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 mb-8">
              India’s Fastest Growing Travel Card
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Travel smarter with the
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Scapia Credit Card
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
              Earn rewards, unlock airport perks and enjoy zero forex markup on international spends.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="rounded-full bg-white text-black px-8 py-4 font-semibold text-lg hover:scale-105 transition">
                Apply with Referral
              </button>

              <button className="rounded-full border border-white/20 px-8 py-4 text-lg hover:bg-white/10 transition">
                Learn More
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-zinc-400">
              <div>✔ Lifetime Free</div>
              <div>✔ Zero Forex</div>
              <div>✔ Lounge Access</div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />

            <div className="relative rotate-6 hover:rotate-0 transition duration-500 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-[40px] p-8 shadow-2xl w-full max-w-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-zinc-400 text-sm">Scapia Card</p>
                  <h3 className="text-3xl font-bold mt-2">Travel Edition</h3>
                </div>

                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
              </div>

              <div className="mt-24 space-y-4">
                <div className="h-4 rounded-full bg-white/10" />
                <div className="h-4 w-2/3 rounded-full bg-white/10" />
              </div>

              <div className="mt-16 flex justify-between items-end">
                <div>
                  <p className="text-xs text-zinc-500">Card Holder</p>
                  <p className="mt-1 font-semibold">James Bond</p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-zinc-500">Valid Thru</p>
                  <p className="mt-1 font-semibold">12/30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ['0%', 'Forex Markup'],
            ['20%', 'Travel Rewards'],
            ['24/7', 'Travel Support'],
            ['100K+', 'Users'],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center"
            >
              <div className="text-4xl font-black">{value}</div>
              <div className="mt-2 text-zinc-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-purple-400 font-semibold tracking-wide uppercase">
              Features
            </p>

            <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">
              Designed for modern travellers
            </h2>

            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
              Everything you need from a premium travel credit card with a simple and modern experience.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 hover:-translate-y-2 transition"
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-8" />

                <h3 className="text-2xl font-bold">{feature.title}</h3>

                <p className="mt-4 text-zinc-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-10 backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-6">
              {[
                'Unlimited Airport Perks',
                'No Joining Fee',
                'UPI Payments',
                'Travel Insurance',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-black/30 border border-white/10 p-6"
                >
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4" />
                  <h4 className="font-semibold">{item}</h4>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-purple-400 font-semibold uppercase tracking-wide">
              Why Choose Scapia
            </p>

            <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
              A card built for travellers
            </h2>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
              Get rewarded every time you travel, dine or shop. With zero forex markup and premium airport benefits, Scapia makes travel seamless.
            </p>

            <div className="mt-10 space-y-5">
              {[
                'Earn rewards on every transaction',
                'Redeem instantly for travel bookings',
                'Modern app experience with real-time tracking',
                'Simple and transparent reward system',
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mt-1" />
                  <p className="text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto rounded-[40px] border border-white/10 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-orange-500/20 p-12 text-center backdrop-blur-xl">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Ready to start your journey?
          </h2>

          <p className="mt-6 text-lg text-zinc-300 max-w-2xl mx-auto">
            Apply using the referral link and unlock travel rewards, airport perks and premium experiences.
          </p>

          <button className="mt-10 rounded-full bg-white text-black px-10 py-5 text-lg font-semibold hover:scale-105 transition">
            Apply Now
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-purple-400 font-semibold uppercase tracking-wide">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-16 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-xl font-bold">{faq.q}</h3>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-2xl font-bold">ScapiaReferral</div>
            <p className="mt-2 text-zinc-500 text-sm">
              Built with Next.js + Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
