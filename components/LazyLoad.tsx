import Image from 'next/image';
import { useState } from 'react';

type Props = {
  src: string,
  width: number,
  height: number,
  alt: string
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function LazyLoad({ src, width, height, alt, ...props }: Props) {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      {...props}
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={cn(
        'duration-700 ease-in-out',
        isLoading
          ? 'grayscale blur-2xl scale-110'
          : 'grayscale-0 blur-0 scale-100'
      )}

      onLoadingComplete={() => setLoading(false)}
    />
  )
}

export default LazyLoad