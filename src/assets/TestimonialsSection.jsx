function TestimonialsSection() {
  return (
    <section className="bg-gray-950 text-white py-24 px-8">

      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          Trusted by Millions
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-black border border-gray-700 p-8 rounded-3xl">
          <h3 className="text-4xl font-bold">4.8★</h3>
          <p className="text-gray-400 mt-2">App Store Rating</p>
        </div>

        <div className="bg-black border border-gray-700 p-8 rounded-3xl">
          <h3 className="text-4xl font-bold">10M+</h3>
          <p className="text-gray-400 mt-2">Happy Members</p>
        </div>

        <div className="bg-black border border-gray-700 p-8 rounded-3xl">
          <h3 className="text-4xl font-bold">₹500Cr+</h3>
          <p className="text-gray-400 mt-2">Rewards Distributed</p>
        </div>

      </div>

    </section>
  )
}

export default TestimonialsSection