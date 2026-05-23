function TrustSection() {
  return (
    <section className="py-24 px-10 bg-black">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-5xl font-bold mb-6">
            Members-only club
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            CRED focuses heavily on trust, exclusivity,
            and premium experiences.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="premium"
            className="rounded-3xl"
          />
        </div>

      </div>

    </section>
  )
}

export default TrustSection