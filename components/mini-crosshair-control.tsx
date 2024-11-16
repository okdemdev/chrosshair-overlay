'use client';

import { useState } from 'react';
import { Card } from './ui/card';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface MiniCrosshairControlProps {
  onSizeChange: (size: number) => void;
  onColorChange: (color: string) => void;
  onStyleChange: (style: CrosshairStyle) => void;
}

export interface CrosshairStyle {
  id: string;
  name: string;
  preview: string;
}

const colorOptions = [
  { value: '#ff0000', label: 'Red' },
  { value: '#00ff00', label: 'Green' },
  { value: '#0000ff', label: 'Blue' },
  { value: '#ffffff', label: 'White' },
  { value: '#ffff00', label: 'Yellow' },
];

const crosshairStyles: CrosshairStyle[] = [
  { id: 'dot', name: 'Dot', preview: '•' },
  { id: 'cross', name: 'Cross', preview: '+' },
  { id: 'circle', name: 'Circle', preview: '○' },
  { id: 'diamond', name: 'Diamond', preview: '◇' },
  { id: 'square', name: 'Square', preview: '□' },
];

export function MiniCrosshairControl({
  onSizeChange,
  onColorChange,
  onStyleChange,
}: MiniCrosshairControlProps) {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].value);
  const [selectedStyle, setSelectedStyle] = useState(crosshairStyles[0]);

  return (
    <Card className="w-64 bg-[#1a1a1a] border-[#333] shadow-xl">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between bg-[#2a2a2a] px-3 py-2 rounded-t-lg border-b border-[#333]">
        <div className="flex items-center gap-2">
          <Image src="/icon.png" alt="CHROSSX" width={16} height={16} />
          <span className="text-sm text-gray-300 font-medium">CHROSSX</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors" />
          <button className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 transition-colors" />
          <button className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-colors" />
        </div>
      </div>

      {/* App Content */}
      <div className="p-4 space-y-6">
        {/* Crosshair Style Selector */}
        <div className="space-y-2">
          <Label className="text-xs text-gray-400">Crosshair Style</Label>
          <Select
            value={selectedStyle.id}
            onValueChange={(value) => {
              const newStyle =
                crosshairStyles.find((style) => style.id === value) || crosshairStyles[0];
              setSelectedStyle(newStyle);
              onStyleChange(newStyle);
            }}
          >
            <SelectTrigger className="w-full bg-[#2a2a2a] border-[#333] text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#2a2a2a] border-[#333]">
              {crosshairStyles.map((style) => (
                <SelectItem
                  key={style.id}
                  value={style.id}
                  className="focus:bg-[#404040] focus:text-white hover:bg-[#404040]"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg" style={{ color: selectedColor }}>
                      {style.preview}
                    </span>
                    <span>{style.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-xs text-gray-500 italic text-center">+ unlimited styles</p>
        </div>

        {/* Size Control */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-xs text-gray-400">Size</Label>
            <span className="text-xs text-gray-500">px</span>
          </div>
          <Slider
            defaultValue={[5]}
            max={20}
            min={1}
            step={1}
            onValueChange={(value) => onSizeChange(value[0])}
            className="w-full"
          />
        </div>

        {/* Color Selection */}
        <div className="space-y-2">
          <Label className="text-xs text-gray-400">Color</Label>
          <div className="grid grid-cols-5 gap-2">
            {colorOptions.map((color) => (
              <button
                key={color.value}
                onClick={() => {
                  setSelectedColor(color.value);
                  onColorChange(color.value);
                }}
                className={cn(
                  'w-8 h-8 rounded-md transition-all',
                  selectedColor === color.value
                    ? 'ring-2 ring-primary ring-offset-2 ring-offset-[#1a1a1a]'
                    : 'hover:scale-110'
                )}
                style={{ backgroundColor: color.value }}
                title={color.label}
              />
            ))}
          </div>
          <p className="text-xs text-gray-500 italic text-center">+ other infinite colors</p>
        </div>

        {/* Always On Top Toggle */}
        <div className="flex items-center justify-between">
          <Label className="text-xs text-gray-400">Always on Top</Label>
          <div className="w-8 h-4 bg-primary/20 rounded-full relative">
            <div className="absolute right-0 top-0.5 w-3 h-3 bg-primary rounded-full mr-0.5" />
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="px-3 py-2 bg-[#2a2a2a] border-t border-[#333] rounded-b-lg">
        <span className="text-xs text-green-400">● Active</span>
      </div>
    </Card>
  );
}
