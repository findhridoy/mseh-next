import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
// import "swiper/css";
import "swiper/css/bundle";
// import "swiper/css/pagination";
// import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { teamData } from "../assets/teamData";
import TeamCard from "../components/TeamCard";

SwiperCore.use([Autoplay]);
const Team = () => {
  return (
    <section className="team section" id="team">
      <div className="container">
        <div className="team__content">
          <h3 className="team__title section__title">Our Awesome Team</h3>
          <h2 className="team__subtitle section__subtitle">
            Featured Service that We Provide
          </h2>
          <div className="team__data">
            <Swiper
              loop={true}
              // autoplay={true}
              spaceBetween={24}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              breakpoints={{
                // when window width is >= 640px
                340: {
                  slidesPerView: 1,
                },
                // when window width is >= 576px
                576: {
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 3,
                },
                // when window width is >= 1200px
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {teamData?.map((team) => (
                <SwiperSlide kay={team?.id}>
                  <TeamCard team={team} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
