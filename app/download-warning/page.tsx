'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { AlertTriangle, Coffee, Heart, Info, Shield, ExternalLink } from 'lucide-react';

export default function DownloadWarning() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-3xl w-full space-y-6 bg-card p-8 rounded-xl border shadow-lg">
        {/* Header */}
        <div className="flex items-center gap-3 border-b pb-4">
          <AlertTriangle className="h-6 w-6 text-yellow-500" />
          <h1 className="text-2xl font-semibold">Just a heads up!</h1>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Why This Happens - Moved to top */}
          <div className="flex items-start gap-3 bg-accent/5 p-4 rounded-lg">
            <Info className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
            <p className="text-muted-foreground">
              You'll see a Windows security warning because CHROSSX doesn't have a paid Microsoft
              certificate yet ($500/year). This is common for new, free applications. The software
              is completely safe to use.
            </p>
          </div>

          {/* Virus Total Verification */}
          <div className="flex items-start gap-3 bg-green-500/5 p-4 rounded-lg border border-green-500/10">
            <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <div className="space-y-2">
              <p className="text-muted-foreground">
                I encourage everyone to verify CHROSSX's safety on VirusTotal before running.
                VirusTotal is a trusted platform that scans files with 70+ antivirus engines.
              </p>
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a
                  href="https://www.virustotal.com/gui/home/upload"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Verify on VirusTotal
                </a>
              </Button>
            </div>
          </div>

          {/* Warning Preview */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">You'll see this warning:</h3>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border">
              <Image
                src="/windows-warning.png"
                alt="Windows SmartScreen Warning"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* How to Bypass - GIF Demo */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Here's how to bypass it:</h3>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-black/5">
              <Image
                src="/demo.gif"
                alt="How to bypass SmartScreen"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Support Message */}
          <div className="bg-primary/5 border border-primary/10 p-6 rounded-lg space-y-3">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Support CHROSSX
            </h3>
            <p className="text-muted-foreground">
              As a free solution, maintaining CHROSSX (hosting, updates, and infrastructure) is
              quite expensive. If you'd like to support the project, consider buying me a coffee.
              All contributions will go towards purchasing a Microsoft certificate ($500/year) and
              keeping CHROSSX free for everyone.
            </p>
            <Button
              className="gap-2 bg-[#ffdd00] hover:bg-[#ffdd00]/90 text-black font-bold"
              asChild
            >
              <a
                href="https://buymeacoffee.com/damianbulata"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Coffee className="h-4 w-4" />
                Buy me a coffee
              </a>
            </Button>
          </div>

          {/* Instructions */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Steps to proceed:</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                Click <span className="font-medium text-foreground">"More info"</span> when you see
                the warning
              </li>
              <li>
                Select <span className="font-medium text-foreground">"Run anyway"</span> in the next
                screen
              </li>
              <li>CHROSSX will start normally</li>
            </ol>
          </div>

          {/* Final Encouragement */}
          <div className="flex items-center justify-center p-6 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-lg">
            <p className="text-xl font-medium text-center">
              Apart from that, have fun and dominate your game! 🎮
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-4 pt-4 border-t">
          <Button asChild variant="outline">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
