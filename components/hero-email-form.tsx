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
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      let data;
      try {
        data = await response.json();
      } catch (error) {
        throw new Error('Failed to parse server response');
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      toast({
        title: 'Success!',
        description: 'Check your email for the activation key.',
      });

      window.location.href = 'https://storage.googleapis.com/chrossx3/ChrossX.exe';
      setEmail('');
    } catch (error: any) {
      console.error('Error:', error);
      toast({
        title: 'Error',
        description: error.message || 'Something went wrong. Please try again.',
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
