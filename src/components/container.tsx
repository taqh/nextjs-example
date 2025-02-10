import { cn } from '@/lib/utils';
import React from 'react';

type ContainerProps = React.HTMLAttributes<HTMLDivElement>

function Container({ className }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full h-full max-w-6xl px-6 md:px-14 lg:px-20 z-10',
        className
      )}
    ></div>
  );
}

export default Container;
