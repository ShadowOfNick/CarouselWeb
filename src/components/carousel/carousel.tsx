import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { CarouselItem } from './carousel-item';
import './carousel.scss';

interface ItemData {
  label: string;
  tag: string;
  imageSrc: string;
  link: string;
};

interface CarouselProps {
  items: ItemData[];
};

export const Carousel: React.FC<CarouselProps> = ({
  items,
}) => {
  const [current, setCurrent] = React.useState(0);

  const updateIndex = (newIndex: any) => {
    if (newIndex < 0) {
      newIndex = items.length  - 1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
    }

    setCurrent(newIndex);
  };

  const swiper = useSwipeable({
    onSwipedLeft: () => updateIndex(current + 1),
    onSwipedRight: () => updateIndex(current - 1)
  });

  return (
    <div className="carousel__slider">
      <div className="carousel__slider__control">
        {items.map((item, index) => (
          <button
            type="button"
            className={`carousel__slider__control__item${current === index ? ' carousel__slider__control__item--active' : ''}`}
            key={item.tag}
            onClick={() => setCurrent(index)}
            aria-hidden="true"
          >
            {item.tag}
          </button>
        ))}
      </div>
      <div {...swiper} className="carousel__slider__item-box">
        {items.map((item, index) => (
          <CarouselItem
            key={item.label}
            {...item}
            highlighted={current === index}
            hidden={current !== index}
          />
        ))}
      </div>
    </div>
  );
};
