import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './carousel.scss';
import red from '/assets/background.png';
import imgNext from '/assets/imgNext.svg';
import reddead2 from '/assets/reddead2.png';
export const EmblaCarousel = () => {
    const [emblaRef] = useEmblaCarousel()

    return (
        <>
            
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <div className='caixaTexto'>
                            <img src={reddead2} alt="" />
                            <p>Estados Unidos, 1899. O fim da era do velho oeste começou, e as autoridades estão caçando as últimas gangues de fora da lei que restam. Os que não se rendem, nem sucumbem, são mortos.</p>
                            <button>COMPRE AGORA</button>
                        </div>
                        <img src={red} alt="" />
                    </div>
                    <div className="embla__slide">
                        <div className='caixaTexto'>
                            <img src={reddead2} alt="" />
                            <p>Estados Unidos, 1899. O fim da era do velho oeste começou, e as autoridades estão caçando as últimas gangues de fora da lei que restam. Os que não se rendem, nem sucumbem, são mortos.</p>
                            <button>COMPRE AGORA</button>
                        </div>
                        <img src={red} alt="" />
                    </div>
                    <div className="embla__slide">
                        <div className='caixaTexto'>
                            <img src={reddead2} alt="" />
                            <p>Estados Unidos, 1899. O fim da era do velho oeste começou, e as autoridades estão caçando as últimas gangues de fora da lei que restam. Os que não se rendem, nem sucumbem, são mortos.</p>
                            <button>COMPRE AGORA</button>
                        </div>
                        <img src={red} alt="" />
                    </div>
                </div>
            </div>

            <div className='imgNext'>
                <img src={imgNext} alt="" />
            </div>
        </>
    )
}