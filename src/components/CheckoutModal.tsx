import { useState } from 'react';
import { X, CheckCircle, Loader2, Sparkles } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { supabase } from '../lib/supabase';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { LiquidButton } from './ui/button';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { cartItems, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    clientEmail: '',
    clientPhone: '',
    customerType: '',
    sellingWhat: '',
    website: '',
    monthlyRevenue: '',
    biggestChallenge: '',
    marketingBudget: '',
    seriousness: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.clientEmail.trim()) {
      newErrors.clientEmail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.clientEmail)) {
      newErrors.clientEmail = 'Invalid email format';
    }
    if (!formData.clientPhone.trim()) newErrors.clientPhone = 'Phone is required';
    if (!formData.customerType) newErrors.customerType = 'Please select customer type';
    if (!formData.sellingWhat.trim()) newErrors.sellingWhat = 'Please tell us what you\'re selling';
    if (!formData.biggestChallenge.trim()) newErrors.biggestChallenge = 'Please share your biggest challenge';
    if (!formData.marketingBudget) newErrors.marketingBudget = 'Please select your budget range';
    if (!formData.seriousness) newErrors.seriousness = 'Please let us know your commitment level';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const servicesData = cartItems.map(item => ({
        id: item.service.id,
        name: item.service.name,
        category: item.service.category,
        notes: item.notes,
      }));

      const webhookData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        clientEmail: formData.clientEmail,
        clientPhone: formData.clientPhone,
        customerType: formData.customerType,
        sellingWhat: formData.sellingWhat,
        website: formData.website,
        monthlyRevenue: formData.monthlyRevenue,
        biggestChallenge: formData.biggestChallenge,
        marketingBudget: formData.marketingBudget,
        seriousness: formData.seriousness,
        services: servicesData,
        numberOfServices: cartItems.length,
        submittedAt: new Date().toISOString(),
      };

      await Promise.all([
        fetch('https://n8n.srv1039673.hstgr.cloud/webhook-test/business-cart-brief', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookData),
        }),
        supabase.from('bookings').insert({
          client_name: `${formData.firstName} ${formData.lastName}`,
          client_email: formData.clientEmail,
          client_phone: formData.clientPhone,
          company_name: formData.sellingWhat,
          website: formData.website,
          problem_statement: formData.biggestChallenge,
          project_brief: `Customer Type: ${formData.customerType}, Monthly Revenue: ${formData.monthlyRevenue}, Marketing Budget: ${formData.marketingBudget}, Seriousness: ${formData.seriousness}`,
          services: servicesData,
          total_amount: 0,
          status: 'pending',
        }),
      ]);

      await clearCart();
      setIsSuccess(true);

      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({
          firstName: '',
          lastName: '',
          clientEmail: '',
          clientPhone: '',
          customerType: '',
          sellingWhat: '',
          website: '',
          monthlyRevenue: '',
          biggestChallenge: '',
          marketingBudget: '',
          seriousness: '',
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Oops! Something went sideways. Mind trying again?');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white border border-[#ccff00]/20 rounded-2xl p-8 max-w-md w-full text-center">
            <CheckCircle className="w-16 h-16 text-[#ccff00] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Woohoo! You're In! 🎉</h2>
            <p className="text-gray-700 mb-6">
              We got your request and we're pumped! Expect a message from us within 24 hours to set up your consultation.
            </p>
            <p className="text-sm text-gray-600">
              Check your inbox for all the deets!
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={onClose} />

      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="bg-white border border-[#ccff00]/20 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-200 flex-shrink-0">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Let's Get This Party Started!</h2>
                <p className="text-sm text-gray-600 mt-1">Fill out the form below and we'll make magic happen</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0 ml-4"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-6 md:p-8">
              <div className="mb-6 p-4 bg-[#ccff00]/10 border border-[#ccff00]/20 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-primary-dark" />
                  <span className="text-primary-dark text-sm font-semibold">Your Selected Services</span>
                  <span className="text-primary-dark font-bold">({cartItems.length})</span>
                </div>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {cartItems.map(item => (
                    <div key={item.id} className="text-sm text-gray-700">
                      • {item.service.name}
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className={`w-full bg-white border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#ccff00]/50 focus:ring-1 focus:ring-[#ccff00]/20 transition-all`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#ccff00]/50 focus:ring-1 focus:ring-[#ccff00]/20 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.clientEmail}
                      onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                      className={`w-full bg-white border ${errors.clientEmail ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#ccff00]/50 focus:ring-1 focus:ring-[#ccff00]/20 transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.clientEmail && (
                      <p className="text-red-500 text-xs mt-1">{errors.clientEmail}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <PhoneInput
                      international
                      defaultCountry="AE"
                      value={formData.clientPhone}
                      onChange={(value) => setFormData({ ...formData, clientPhone: value || '' })}
                      className={`phone-input ${errors.clientPhone ? 'border-red-500' : ''}`}
                    />
                    {errors.clientPhone && (
                      <p className="text-red-500 text-xs mt-1">{errors.clientPhone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Who are your customers? *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Businesses', 'Consumers'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, customerType: type })}
                        className={`px-4 py-3 rounded-lg border-2 transition-all ${
                          formData.customerType === type
                            ? 'border-[#ccff00] bg-[#ccff00]/10 text-gray-900 font-semibold'
                            : 'border-gray-300 text-gray-600 hover:border-[#ccff00]/50'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                  {errors.customerType && (
                    <p className="text-red-500 text-xs mt-1">{errors.customerType}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What are you selling? *
                  </label>
                  <input
                    type="text"
                    value={formData.sellingWhat}
                    onChange={(e) => setFormData({ ...formData, sellingWhat: e.target.value })}
                    className={`w-full bg-white border ${errors.sellingWhat ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#ccff00]/50 focus:ring-1 focus:ring-[#ccff00]/20 transition-all`}
                    placeholder="e.g., Luxury real estate, Fashion products, etc."
                  />
                  {errors.sellingWhat && (
                    <p className="text-red-500 text-xs mt-1">{errors.sellingWhat}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your current website
                  </label>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#ccff00]/50 focus:ring-1 focus:ring-[#ccff00]/20 transition-all"
                    placeholder="https://yourwebsite.com (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your approx. monthly revenue in AED
                  </label>
                  <input
                    type="text"
                    value={formData.monthlyRevenue}
                    onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#ccff00]/50 focus:ring-1 focus:ring-[#ccff00]/20 transition-all"
                    placeholder="e.g., 50,000 - 100,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What is your biggest challenge at the moment? *
                  </label>
                  <textarea
                    value={formData.biggestChallenge}
                    onChange={(e) => setFormData({ ...formData, biggestChallenge: e.target.value })}
                    className={`w-full bg-white border ${errors.biggestChallenge ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#ccff00]/50 focus:ring-1 focus:ring-[#ccff00]/20 transition-all resize-none`}
                    rows={3}
                    placeholder="Tell us what's keeping you up at night..."
                  />
                  {errors.biggestChallenge && (
                    <p className="text-red-500 text-xs mt-1">{errors.biggestChallenge}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What is your approx. total monthly marketing budget in AED? *
                  </label>
                  <select
                    value={formData.marketingBudget}
                    onChange={(e) => setFormData({ ...formData, marketingBudget: e.target.value })}
                    className={`w-full bg-white border ${errors.marketingBudget ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[#ccff00]/50 focus:ring-1 focus:ring-[#ccff00]/20 transition-all`}
                  >
                    <option value="">Select your budget range</option>
                    <option value="Less than 15,000">Less than 15,000 per month (we cannot help)</option>
                    <option value="15,000 - 30,000">15,000 - 30,000</option>
                    <option value="30,000 - 50,000">30,000 - 50,000</option>
                    <option value="50,000 - 100,000">50,000 - 100,000</option>
                    <option value="100,000+">100,000+</option>
                  </select>
                  {errors.marketingBudget && (
                    <p className="text-red-500 text-xs mt-1">{errors.marketingBudget}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How serious are you about growing your business? *
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'serious', label: 'I am serious about this and I want to know more about how Artify can help my business grow' },
                      { value: 'learning', label: 'I want to learn more' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, seriousness: option.value })}
                        className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                          formData.seriousness === option.value
                            ? 'border-[#ccff00] bg-[#ccff00]/10 text-gray-900 font-semibold'
                            : 'border-gray-300 text-gray-600 hover:border-[#ccff00]/50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  {errors.seriousness && (
                    <p className="text-red-500 text-xs mt-1">{errors.seriousness}</p>
                  )}
                </div>

                <LiquidButton
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Your Info...
                    </>
                  ) : (
                    'Count Me In! Let\'s Do This! 🚀'
                  )}
                </LiquidButton>

                <p className="text-xs text-gray-600 text-center">
                  By clicking the button, you're giving us the green light to reach out within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
