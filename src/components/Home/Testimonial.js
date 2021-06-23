import React, { useState } from "react";

import { CSSTransition, SwitchTransition } from "react-transition-group";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import * as styles from "./Home.module.css";

import testimonials from "../../lib/utils";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonials[activeIndex];

  function handleNext() {
    if (activeIndex >= testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  function handlePrev() {
    if (activeIndex === 0) {
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }
  return (
    <div>
      <div className={styles.testimonials}>
        <h1>Testimonials</h1>
        <p>see what our clients say about us</p>
        <div className={styles.testimonial__wrapper}>
          <SwitchTransition component={null}>
            <CSSTransition
              key={activeSlide.id}
              timeout={300}
              classNames={{
                enterActive: styles["fade-enter"],
                enterDone: styles["fade-enter-active"],
                exitActive: styles["fade-exit"],
                exitDone: styles["fade-exit-active"],
              }}
            >
              <div className={styles.testimonial__info}>
                <div className={styles.testimonial__desc}>
                  <h4 className={styles.para}>{activeSlide.desc}</h4>
                </div>
                <h2 className={styles.testimonial__name}>{activeSlide.name}</h2>
                <p className={styles.testimonial__title}>
                  {activeSlide.title}, <br /> {activeSlide.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>

        <div className={styles.arrows}>
          <div
            className={styles.prev}
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <ArrowBackIosIcon />
          </div>
          <div
            className={styles.next}
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
