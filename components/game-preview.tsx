'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { CrosshairStyle } from './mini-crosshair-control';

interface GamePreviewProps {
  dotSize: number;
  dotColor: string;
  crosshairStyle: CrosshairStyle;
}

interface Game {
  id: string;
  name: string;
  image: string;
}

const games: Game[] = [
  { id: 'rust', name: 'Rust', image: '/rust.jpg' },
  { id: 'dayz', name: 'DayZ', image: '/dayz.jpg' },
];

export function GamePreview({ dotSize, dotColor, crosshairStyle }: GamePreviewProps) {
  const [selectedGame, setSelectedGame] = useState<Game>(games[0]);

  const renderCrosshair = () => {
    switch (crosshairStyle.id) {
      case 'dot':
        return (
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              backgroundColor: dotColor,
            }}
          />
        );
      case 'cross':
        return (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: `${dotSize * 3}px`,
                height: `${Math.max(2, dotSize / 2)}px`,
                backgroundColor: dotColor,
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: `${Math.max(2, dotSize / 2)}px`,
                height: `${dotSize * 3}px`,
                backgroundColor: dotColor,
              }}
            />
          </div>
        );
      case 'circle':
        return (
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: `${dotSize * 2}px`,
              height: `${dotSize * 2}px`,
              border: `${Math.max(2, dotSize / 3)}px solid ${dotColor}`,
            }}
          />
        );
      case 'diamond':
        return (
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"
            style={{
              width: `${dotSize * 1.5}px`,
              height: `${dotSize * 1.5}px`,
              backgroundColor: dotColor,
            }}
          />
        );
      case 'square':
        return (
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: `${dotSize * 1.5}px`,
              height: `${dotSize * 1.5}px`,
              backgroundColor: dotColor,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden">
      <Image
        src={selectedGame.image}
        alt={`${selectedGame.name} Preview`}
        fill
        className="object-cover"
        priority
      />

      {renderCrosshair()}

      <div className="absolute top-6 left-6">
        <Select
          value={selectedGame.id}
          onValueChange={(value: string) =>
            setSelectedGame(games.find((g) => g.id === value) || games[0])
          }
        >
          <SelectTrigger className="w-40 bg-black/80 backdrop-blur-sm border-gray-800 text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-black/90 border-gray-800">
            {games.map((game) => (
              <SelectItem key={game.id} value={game.id} className="focus:bg-white/10">
                {game.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
