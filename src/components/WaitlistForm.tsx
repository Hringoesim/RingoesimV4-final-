import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";

const countries = [
  { code: 'AF', name: '🇦🇫 Afghanistan' },
  { code: 'AL', name: '🇦🇱 Albania' },
  { code: 'DZ', name: '🇩🇿 Algeria' },
  { code: 'AR', name: '🇦🇷 Argentina' },
  { code: 'AM', name: '🇦🇲 Armenia' },
  { code: 'AU', name: '🇦🇺 Australia' },
  { code: 'AT', name: '🇦🇹 Austria' },
  { code: 'AZ', name: '🇦🇿 Azerbaijan' },
  { code: 'BH', name: '🇧🇭 Bahrain' },
  { code: 'BD', name: '🇧🇩 Bangladesh' },
  { code: 'BY', name: '🇧🇾 Belarus' },
  { code: 'BE', name: '🇧🇪 Belgium' },
  { code: 'BR', name: '🇧🇷 Brazil' },
  { code: 'BG', name: '🇧🇬 Bulgaria' },
  { code: 'CA', name: '🇨🇦 Canada' },
  { code: 'CL', name: '🇨🇱 Chile' },
  { code: 'CN', name: '🇨🇳 China' },
  { code: 'CO', name: '🇨🇴 Colombia' },
  { code: 'HR', name: '🇭🇷 Croatia' },
  { code: 'CY', name: '🇨🇾 Cyprus' },
  { code: 'CZ', name: '🇨🇿 Czech Republic' },
  { code: 'DK', name: '🇩🇰 Denmark' },
  { code: 'EG', name: '🇪🇬 Egypt' },
  { code: 'EE', name: '🇪🇪 Estonia' },
  { code: 'FI', name: '🇫🇮 Finland' },
  { code: 'FR', name: '🇫🇷 France' },
  { code: 'GE', name: '🇬🇪 Georgia' },
  { code: 'DE', name: '🇩🇪 Germany' },
  { code: 'GH', name: '🇬🇭 Ghana' },
  { code: 'GR', name: '🇬🇷 Greece' },
  { code: 'HK', name: '🇭🇰 Hong Kong' },
  { code: 'HU', name: '🇭🇺 Hungary' },
  { code: 'IS', name: '🇮🇸 Iceland' },
  { code: 'IN', name: '🇮🇳 India' },
  { code: 'ID', name: '🇮🇩 Indonesia' },
  { code: 'IR', name: '🇮🇷 Iran' },
  { code: 'IQ', name: '🇮🇶 Iraq' },
  { code: 'IE', name: '🇮🇪 Ireland' },
  { code: 'IL', name: '🇮🇱 Israel' },
  { code: 'IT', name: '🇮🇹 Italy' },
  { code: 'JP', name: '🇯🇵 Japan' },
  { code: 'JO', name: '🇯🇴 Jordan' },
  { code: 'KZ', name: '🇰🇿 Kazakhstan' },
  { code: 'KE', name: '🇰🇪 Kenya' },
  { code: 'KW', name: '🇰🇼 Kuwait' },
  { code: 'LV', name: '🇱🇻 Latvia' },
  { code: 'LB', name: '🇱🇧 Lebanon' },
  { code: 'LT', name: '🇱🇹 Lithuania' },
  { code: 'LU', name: '🇱🇺 Luxembourg' },
  { code: 'MY', name: '🇲🇾 Malaysia' },
  { code: 'MT', name: '🇲🇹 Malta' },
  { code: 'MX', name: '🇲🇽 Mexico' },
  { code: 'MD', name: '🇲🇩 Moldova' },
  { code: 'MA', name: '🇲🇦 Morocco' },
  { code: 'NL', name: '🇳🇱 Netherlands' },
  { code: 'NZ', name: '🇳🇿 New Zealand' },
  { code: 'NG', name: '🇳🇬 Nigeria' },
  { code: 'MK', name: '🇲🇰 North Macedonia' },
  { code: 'NO', name: '🇳🇴 Norway' },
  { code: 'OM', name: '🇴🇲 Oman' },
  { code: 'PK', name: '🇵🇰 Pakistan' },
  { code: 'PE', name: '🇵🇪 Peru' },
  { code: 'PH', name: '🇵🇭 Philippines' },
  { code: 'PL', name: '🇵🇱 Poland' },
  { code: 'PT', name: '🇵🇹 Portugal' },
  { code: 'QA', name: '🇶🇦 Qatar' },
  { code: 'RO', name: '🇷🇴 Romania' },
  { code: 'RU', name: '🇷🇺 Russia' },
  { code: 'SA', name: '🇸🇦 Saudi Arabia' },
  { code: 'RS', name: '🇷🇸 Serbia' },
  { code: 'SG', name: '🇸🇬 Singapore' },
  { code: 'SK', name: '🇸🇰 Slovakia' },
  { code: 'SI', name: '🇸🇮 Slovenia' },
  { code: 'ZA', name: '🇿🇦 South Africa' },
  { code: 'KR', name: '🇰🇷 South Korea' },
  { code: 'ES', name: '🇪🇸 Spain' },
  { code: 'LK', name: '🇱🇰 Sri Lanka' },
  { code: 'SE', name: '🇸🇪 Sweden' },
  { code: 'CH', name: '🇨🇭 Switzerland' },
  { code: 'TW', name: '🇹🇼 Taiwan' },
  { code: 'TH', name: '🇹🇭 Thailand' },
  { code: 'TR', name: '🇹🇷 Turkey' },
  { code: 'UA', name: '🇺🇦 Ukraine' },
  { code: 'AE', name: '🇦🇪 United Arab Emirates' },
  { code: 'GB', name: '🇬🇧 United Kingdom' },
  { code: 'US', name: '🇺🇸 United States' },
  { code: 'UY', name: '🇺🇾 Uruguay' },
  { code: 'VE', name: '🇻🇪 Venezuela' },
  { code: 'VN', name: '🇻🇳 Vietnam' },
  { code: 'OTHER', name: '🌍 Other' },
];

interface WaitlistFormProps {
  onSuccess?: () => void;
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [formData, setFormData] = React.useState({
    email: '',
    name: '',
    country: '',
    honeypot: '' // Spam protection
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Name is optional in Index.tsx logic but required here originally. 
    // I'll make it optional to match the simpler flow if desired, but keeping it required is fine too.
    // Let's keep it required for better data quality if the form asks for it.
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.country) {
      newErrors.country = 'Please select your country';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    // Spam check
    if (formData.honeypot) {
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.from('waitlist').insert([
        {
          email: formData.email,
          country: formData.country,
          name: formData.name,
        }
      ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Welcome to the waitlist!",
        description: "You've been added to our list. We'll be in touch soon!",
      });

      // Google Ads Conversion Event
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17765913455/94u_CNvvmdIbEO-muZdC',
          'value': 1.0,
          'currency': 'EUR'
        });
      }

      setIsSuccess(true);

      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }

    } catch (error: any) {
      console.error('Waitlist submission error:', error);
      console.error('Full error details:', JSON.stringify(error, null, 2));

      let errorTitle = "Something went wrong";
      let errorMessage = "Please try again later or contact us directly at info@ringoesim.com";

      // Check if there's a specific error message from the backend
      if (error && typeof error === 'object') {
        // Supabase function errors often have a context property
        if (error.context?.body) {
          try {
            const errorBody = typeof error.context.body === 'string'
              ? JSON.parse(error.context.body)
              : error.context.body;

            if (errorBody.error) {
              errorMessage = errorBody.error;
              if (errorBody.details) {
                errorMessage += `: ${errorBody.details}`;
              }
            }
          } catch (e) {
            console.error('Error parsing error body:', e);
          }
        }

        // Check for message property
        if ('message' in error && error.message) {
          if (error.message.includes('Failed to fetch')) {
            errorMessage = "Network error. Please check your connection and try again.";
          } else if (error.message.includes('FunctionsRelayError') || error.message.includes('FunctionsHttpError')) {
            errorMessage = `Server error: ${error.message}. Please contact support.`;
          } else if (!errorMessage.includes('Server error')) {
            errorMessage = error.message;
          }
        }
      }

      toast({
        title: errorTitle,
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center space-y-4 p-6 bg-green-50 rounded-lg border border-green-200">
        <CheckCircle className="h-12 w-12 text-green-600 mx-auto" />
        <h3 className="text-lg font-semibold text-green-800">You're on the list!</h3>
        <p className="text-green-700">
          We've sent a confirmation email to <strong>{formData.email}</strong>.
          You'll be among the first to know when Ringo launches.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Join the Waitlist</h3>
        <p className="text-gray-600">Be the first to experience Ringo when we launch</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot field for spam protection */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={(e) => setFormData(prev => ({ ...prev, honeypot: e.target.value }))}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Enter your full name"
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="Enter your email address"
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Select value={formData.country} onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}>
            <SelectTrigger className={errors.country ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.country && (
            <p className="text-sm text-red-600">{errors.country}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-6 text-lg"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Joining...
            </>
          ) : (
            'Join Waitlist'
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          By joining, you agree to receive updates about Ringo. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}

export default WaitlistForm;