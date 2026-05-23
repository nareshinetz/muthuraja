function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 px-8">

      <div className="grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">
            CRED
          </h2>

          <p>
            Premium experience for trusted users.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Company
          </h3>

          <ul className="space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Social
          </h3>

          <ul className="space-y-2">
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        © 2026 CRED Clone UI
      </div>

    </footer>
  )
}

export default Footer