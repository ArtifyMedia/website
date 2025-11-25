import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export function PartnerApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    partnerType: 'agency',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const webhookData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        website: formData.website,
        partnerType: formData.partnerType,
        message: formData.message,
        submittedAt: new Date().toISOString(),
      };

      await fetch('https://n8n.srv1039673.hstgr.cloud/webhook-test/artify-partner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting partner application:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="relative min-h-screen bg-[#060606] pt-20 flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05)_0%,transparent_50%)]"></div>
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-[#C8F31D] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Application Received!
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Thank you for your interest in partnering with Artify Media. Our team will review your application and get back to you within 24-48 hours.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-4 bg-[#C8F31D] hover:bg-[#C8F31D]/90 text-black font-bold rounded-xl transition-all"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#060606] pt-20">
    <div className="relative min-h-screen bg-white pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(204,255,0,0.03)_0%,transparent_50%)]"></div>

      <div className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                  <span className="text-primary-dark text-sm font-semibold">PARTNER APPLICATION</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Apply to{' '}
                <span className="inline-block relative">
                  <span className="absolute inset-0 bg-[#ccff00] rounded-lg transform -skew-x-6"></span>
                  <span className="relative text-black font-bold px-2">
                  Partner With Us
                  </span>
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Fill out the form below and our team will review your application within 24-48 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="backdrop-blur-sm bg-white/5 border border-[#C8F31D]/20 rounded-3xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="backdrop-blur-sm bg-white/80 border border-[#ccff00]/20 rounded-3xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#ccff00]/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#ccff00]/50 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#ccff00]/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#ccff00]/50 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#ccff00]/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#ccff00]/50 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#ccff00]/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#ccff00]/50 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#ccff00]/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#ccff00]/50 transition-colors"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Partnership Type *
                  </label>
                  <select
                    required
                    value={formData.partnerType}
                    onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#ccff00]/20 rounded-xl text-gray-900 focus:outline-none focus:border-[#ccff00]/50 transition-colors"
                  >
                    <option value="agency">Agency Partnership</option>
                    <option value="freelancer">Freelancer Partnership</option>
                    <option value="reseller">Reseller Partnership</option>
                  </select>
                  <p className="text-xs text-gray-400 mt-2">
                    Note: This is a service partnership with no equity involvement
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Tell Us About Your Business *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-[#ccff00]/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#ccff00]/50 transition-colors resize-none"
                    placeholder="Tell us about your business, your clients, and why you want to partner with us..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#ccff00] to-[#ccff00] hover:from-yellow-400 hover:to-[#ccff00] text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[#ccff00]/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

  )
}
  )
}