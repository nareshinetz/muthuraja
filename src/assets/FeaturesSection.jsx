const features = [
  {
    title: "Credit Card Bills",
    desc: "Pay bills instantly with rewards."
  },
  {
    title: "Rewards",
    desc: "Earn premium cashback and coins."
  },
  {
    title: "Credit Score",
    desc: "Track your credit score easily."
  },
  {
    title: "UPI Payments",
    desc: "Fast and secure UPI payments."
  },
  {
    title: "CRED Coins",
    desc: "Unlock exclusive member benefits."
  },
  {
    title: "Cashback",
    desc: "Get cashback on every transaction."
  }
]

function FeaturesSection() {
  return (
    <section className="bg-black text-white py-24 px-8">

      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          Premium Features
        </h2>

        <p className="text-gray-400 mt-4">
          Experience NeoPOP style UI interactions
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:-translate-y-2 duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-300">
              {item.desc}
            </p>

            <button className="mt-6 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 duration-300">
              Explore
            </button>
          </div>
        ))}

      </div>

    </section>
  )
}

export default FeaturesSection