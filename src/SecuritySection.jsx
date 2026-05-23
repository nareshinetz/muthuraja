import { FaLock } from "react-icons/fa"

function SecuritySection() {
  return (
    <section className="bg-black text-white py-24 px-8">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-5xl font-bold mb-6">
            Security First
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            Your payments and personal data are fully protected
            with advanced encryption and secure systems.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 rounded-full font-semibold">
            Learn More
          </button>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-3xl p-12 flex justify-center">
          <FaLock size={120} />
        </div>

      </div>

    </section>
  )
}

export default SecuritySection