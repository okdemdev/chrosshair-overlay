'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Download } from 'lucide-react';

interface DownloadEmailFormProps {
  variant?: 'default' | 'hero';
}

export function DownloadEmailForm({ variant = 'default' }: DownloadEmailFormProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success toast
      toast({
        title: 'Download Started!',
        description: 'Check your email for the activation key.',
      });

      // Trigger download
      window.location.href = '/download/chrossx-setup.exe';

      setEmail('');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex gap-2 ${
        variant === 'hero' ? 'flex-col sm:flex-row w-full max-w-md mx-auto' : 'w-auto'
      }`}
    >
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={variant === 'hero' ? 'h-12 text-lg' : 'h-10'}
      />
      <Button
        type="submit"
        disabled={isLoading}
        className={`bg-primary hover:bg-primary/90 ${variant === 'hero' ? 'h-12 text-lg' : 'h-10'}`}
      >
        <Download className="mr-2 h-5 w-5" />
        {isLoading ? 'Starting...' : 'Download Now'}
      </Button>
    </form>
  );
}
