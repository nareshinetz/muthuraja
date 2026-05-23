function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-black">
      <h1 className="text-3xl font-bold">CRED</h1>

      <ul className="flex gap-8 text-gray-300">
        <li>Home</li>
        <li>Features</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar