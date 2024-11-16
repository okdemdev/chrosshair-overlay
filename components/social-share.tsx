'use client';

import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SocialShare() {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const title = 'CHROSSX - Free Crosshair Overlay for Windows';

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(title)}`,
      '_blank'
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      '_blank'
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        shareUrl
      )}&title=${encodeURIComponent(title)}`,
      '_blank'
    );
  };

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={shareOnTwitter}
        className="hover:bg-[#1DA1F2] hover:text-white"
      >
        <Twitter className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={shareOnFacebook}
        className="hover:bg-[#4267B2] hover:text-white"
      >
        <Facebook className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={shareOnLinkedIn}
        className="hover:bg-[#0077b5] hover:text-white"
      >
        <Linkedin className="h-4 w-4" />
      </Button>
    </div>
  );
}
