import Navigation from "../components/NavbarLanding"; 

const LandingPage = () => {
  return (
    <div >
      <Navigation />

      <div className="hero bg-base-200 h-auto bg-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="./src/assets/landing/1.png"
            className="w-full max-w-sm lg:max-w-md rounded-lg shadow-2xl"
            alt="Landing 1"
          />
          <div>
            <h1 className="text-5xl font-bold">W4LLET – The Future of Secure & Seamless Crypto Management</h1>
            <p className="py-6">Your Crypto, Your Control</p>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 h-auto bg-black">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="./src/assets/landing/2.png"
            className="w-full max-w-sm lg:max-w-md rounded-lg shadow-2xl"
            alt="Landing 2"
          />
          <div>
            <h1 className="text-5xl font-bold">🔹 For Everyday Users – Secure & Simple</h1>
            <p className="py-6">
              New to crypto? No problem. W4LLET makes managing, sending, and receiving digital assets
              effortless with an easy-to-use interface. No technical knowledge required—just security
              and simplicity at your fingertips.
            </p>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 h-auto bg-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="./src/assets/landing/3.png"
            className="w-full max-w-sm lg:max-w-md rounded-lg shadow-2xl"
            alt="Landing 3"
          />
          <div>
            <h1 className="text-5xl font-bold">⚡ For Active Traders – Speed & Insights</h1>
            <p className="py-6">
              Stay ahead of the market with real-time price tracking, instant transactions, and
              volatility alerts. W4LLET ensures traders never miss an opportunity with an optimized,
              high-speed trading experience.
            </p>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 h-auto bg-black">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="./src/assets/landing/4.png"
            className="w-full max-w-sm lg:max-w-md rounded-lg shadow-2xl"
            alt="Landing 4"
          />
          <div>
            <h1 className="text-5xl font-bold">🏦 For Institutional Investors – Control & Security</h1>
            <p className="py-6">
              Managing large crypto portfolios? W4LLET provides multi-signature wallets, detailed
              transaction history, and advanced portfolio management tools—ensuring maximum security
              and compliance for high-net-worth individuals and organizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;