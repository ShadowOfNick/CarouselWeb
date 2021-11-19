import React from 'react';
import './carousel.scss';

interface CarouselItemProps {
  label: string;
  imageSrc: string;
  highlighted?: boolean;
  hidden?: boolean;
};

export const CarouselItem: React.FC<CarouselItemProps> = ({
  label,
  imageSrc,
  highlighted = false,
  hidden = false,
}) => {
  const classes = ['carousel-item'];

  if (hidden) {
    classes.push('carousel-item--hidden');
  }
  if (highlighted) {
    classes.push('carousel-item--highlighted');
  }

  return (
    <div className={classes.join(' ')}>
      <div
        className="carousel-item__content"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageSrc})` }}
      >
        <h4 className="carousel-item__content__label">
          {label}
        </h4>
      </div>
    </div>
  );
};
