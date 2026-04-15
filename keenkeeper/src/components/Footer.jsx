import logoXl from "../assets/logo-xl.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
    <footer className="bg-[#244D3F] text-white">
      <div
        className="mx-auto"
        style={{
          maxWidth: "1600px",
          paddingLeft: "245px",
          paddingRight: "245px",
          paddingTop: "80px",
          paddingBottom: "30px",
        }}
      >
        {/* Top section — logo + text + social icons */}
        <div className="text-center" style={{ marginBottom: "40px" }}>
          <img src={logoXl} alt="KeenKeeper" className="h-10 mx-auto mb-4" />
          <p className="text-gray-300 text-sm">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <p className="text-white mt-4 mb-3">Social Links</p>
          <div className="flex justify-center gap-4">
            <img src={instagram} alt="Instagram" className="h-9 cursor-pointer" />
            <img src={facebook} alt="Facebook" className="h-9 cursor-pointer" />
            <img src={twitter} alt="Twitter" className="h-9 cursor-pointer" />
          </div>
        </div>

        {/* Bottom section */}
        <div
          className="border-t border-gray-600 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-2"
          style={{ paddingTop: "40px" }}
        >
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
            <span className="cursor-pointer hover:text-white">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;