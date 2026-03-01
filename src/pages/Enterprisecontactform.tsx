import { useState } from "react";
import Navbar from "../components/Navbar";

const EnterpriseContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    businessPhone: "",
    company: "",
    websiteUrl: "",
    country: "",
    annualRevenue: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Thank you! Our enterprise team will contact you soon.");
    // Optionally redirect after submission
    // window.location.href = "/thank-you";
  };

  return (
    <div className="min-h-screen" style={{
      background: "linear-gradient(135deg, #1a2e1a 0%, #0d1a0d 100%)",
    }}>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <svg
                className="w-10 h-10 mb-6"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 5 L20 35 M15 8 L15 32 M25 8 L25 32 M18 6 Q14 3 12 7 M22 6 Q26 3 28 7"
                  stroke="hsl(var(--shopify-green))"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-white/60">
              SELLERY FOR ENTERPRISE
            </p>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-white">
              Let's talk enterprise commerce
            </h1>

            {/* Get Started Box */}
            <div className="glass-card rounded-2xl p-8 border border-white/10 max-w-md">
              <h3 className="text-xl font-bold mb-3 text-white">Get started faster</h3>
              <p className="text-white/70 mb-4">
                Skip the form and start exploring Sellery now.
              </p>
              <a 
                href="/signup" 
                className="inline-block font-semibold underline hover:no-underline transition-all"
                style={{ color: "hsl(var(--shopify-green))" }}
              >
                Try Sellery
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex items-center">
            <div className="w-full bg-white/5 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/95 text-gray-900 placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                {/* Business Email */}
                <div>
                  <input
                    type="email"
                    name="businessEmail"
                    placeholder="Business email"
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/95 text-gray-900 placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                {/* Business Phone */}
                <div>
                  <input
                    type="tel"
                    name="businessPhone"
                    placeholder="Business phone"
                    value={formData.businessPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/95 text-gray-900 placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                {/* Company */}
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/95 text-gray-900 placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                {/* Website URL */}
                <div>
                  <input
                    type="url"
                    name="websiteUrl"
                    placeholder="Website URL"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-white/95 text-gray-900 placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                {/* Country and Annual Revenue - Side by Side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Country */}
                  <div>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-white/95 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1.25rem center",
                      }}
                    >
                      <option value="">Country</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                      <option value="au">Australia</option>
                      <option value="de">Germany</option>
                      <option value="fr">France</option>
                      <option value="jp">Japan</option>
                      <option value="cn">China</option>
                      <option value="in">India</option>
                      <option value="sg">Singapore</option>
                      <option value="ph">Philippines</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Annual Revenue */}
                  <div>
                    <select
                      name="annualRevenue"
                      value={formData.annualRevenue}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-white/95 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1.25rem center",
                      }}
                    >
                      <option value="">Annual online revenue</option>
                      <option value="0-1m">$0 - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m-10m">$5M - $10M</option>
                      <option value="10m-50m">$10M - $50M</option>
                      <option value="50m-100m">$50M - $100M</option>
                      <option value="100m+">$100M+</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-black hover:scale-[1.02]"
                  style={{
                    background: "hsl(var(--shopify-green))",
                    boxShadow: "0 4px 20px hsl(var(--shopify-green) / 0.4)",
                  }}
                >
                  Submit form
                </button>

                {/* Privacy Notice */}
                <p className="text-xs text-white/60 leading-relaxed pt-2">
                  By submitting this form, you agree to receive promotional messages from Sellery about its products and services. You can unsubscribe at any time by clicking on the link at the bottom of our emails.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseContactPage;