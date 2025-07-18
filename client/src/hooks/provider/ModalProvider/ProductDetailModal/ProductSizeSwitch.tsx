import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { classNames } from '@/utils/helper';
import Title6 from '@/components/shared/typo/Title6';
import { CoffeeSize } from '@/types';
import { coffeeSizeOptions } from '@/constants/constants';

interface ProductSizeSwitchProps {
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}

export default function ProductSizeSwitch({ selectedSize, setSelectedSize }: ProductSizeSwitchProps) {
  return (
    <div>
      <Title6 className="mb-2">Size</Title6>
      <RadioGroup value={selectedSize} onChange={setSelectedSize}>
        <RadioGroup.Label className="sr-only">Coffee size</RadioGroup.Label>
        <div className="flex flex-row gap-4 ">
          {coffeeSizeOptions.map((option) => (
            <RadioGroup.Option
              key={option.label}
              value={option.value}
              className={({ checked }) =>
                classNames(
                  'flex items-center justify-center px-4 py-1 border rounded-xl',
                  checked
                    ? 'bg-primary-50 border-primary-600'
                    : 'bg-white border-neutral-200'
                )
              }
            >
              {option.label}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
