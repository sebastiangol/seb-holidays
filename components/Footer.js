function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-indigo-900">
      <div className="space-y-4 text-xs text-gray-400">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Seb Holidays works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Seb Holidays Plus</p>
        <p>Seb Holidays Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-400">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Join</p>
      </div>

      <div className="space-y-4 text-xs text-gray-400">
        <h5 className="font-bold">HOST</h5>
        <p>How to host</p>
        <p>Information</p>
      </div>

      <div className="space-y-4 text-xs text-gray-400">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust and Safety</p>
      </div>
    </div>
  );
}

export default Footer;
