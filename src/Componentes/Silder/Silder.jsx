import style from './Slider.module.css';
import { useRef, useState, useEffect } from 'react';
import { data } from '../../data';

const Slider = () => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        if (listNode) {
            const imgNode = listNode.querySelectorAll('li > img')[currentIndex];
            if (imgNode) {
                imgNode.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }
    }, [currentIndex]);

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex((curr) => {
                const isFirstSlide = curr === 0;
                return isFirstSlide ? 0 : curr - 1;
            });
        } else {
            setCurrentIndex((curr) => {
                const isLastSlide = curr === data.length - 1;
                return isLastSlide ? curr : curr + 1;
            });
        }
    };
    const goToslide=(slideIndex)=>{
        setCurrentIndex(slideIndex);
    }

    return (
        <div className={style.mainContainer}>
            <div className={style.sliderConteiner}>
                <div
                    className={style.leftArrow}
                    onClick={() => scrollToImage('prev')}
                >
                    &#10092;
                </div>
                <div
                    className={style.rightArrow}
                    onClick={() => scrollToImage('next')}
                >
                    &#10093;
                </div>
                <div className={style.conteinerImg}>
                    <ul ref={listRef}>
                        {data.map((item) => (
                            <li key={item.id}>
                                <img
                                    src={item.imgUrl}
                                    width={1300}
                                    height={600}
                                    alt=""
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={style.dotsContainer}>
                   {
                    data.map((_, idx)=>(
                        <div key={idx} className={style.dotsContainerItem}
                        onClick={()=>(goToslide(idx))}>
                          &#9865;  
                        </div>
                    ))
                   }
                </div>
            </div>
        </div>
    );
};

export default Slider;
